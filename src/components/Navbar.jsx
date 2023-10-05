import React, { useState, useRef } from "react";

const links = [
  {
    id: 1,
    url: "/",
    text: "",
  },
  {
    id: 2,
    url: "/maps",
    text: "MAPS",
    dropdownOptions: [
      { text: "LGBTQ+ Rights", url: "/maps#lgbtq-rights" },
      { text: "Gender Equality", url: "/maps#gender-equality" },
      { text: "Freedom Speech", url: "/maps#freedom" },
    ],
  },
  {
    id: 3,
    url: "/quiz",
    text: "QUIZ",
  },
  {
    id: 4,
    url: "/resources",
    text: "RESOURCES",
  },
];

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to handle scrolling to a section with an offset

  const handleMouseOver = (e) => {
    e.preventDefault();
    console.log(e.target.text);
    if (e.target.text === "MAPS" || e.target.closest(".dropdown")) {
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
    }
  };

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <a href="/">
            <img
              src={"https://i.ibb.co/QXcXpvk/project-logo.png"}
              className="logo"
              alt="logo"
            />
          </a>
        </div>
        <div
          className="links-container"
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text, dropdownOptions } = link;
              return (
                <li
                  key={id}
                  onMouseEnter={handleMouseOver}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <a href={url}>{text}</a>
                  {dropdownOptions && dropdownOptions.length > 0 && (
                    <ul
                      className={`${
                        isDropdownOpen ? "show-dropdown dropdown" : "dropdown"
                      }`}
                    >
                      {dropdownOptions.map((option, i) => (
                        <li key={i}>
                          <a href={option.url}>{option.text}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}{" "}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
