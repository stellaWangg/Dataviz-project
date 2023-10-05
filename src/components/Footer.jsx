import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes, faLink } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { Modal } from "react-bootstrap";
const Footer = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <footer className="d-flex align-items-center justify-content-center py-3 my-4 border-top">
      <span className="d-flex align-items-center text-center">
        © 2023 Stella Wang &nbsp;
      </span>

      <FontAwesomeIcon
        icon={faShareNodes}
        onClick={handleShow}
        id="share"
      ></FontAwesomeIcon>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Share</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Share this link via</p>
          <div className="d-flex align-items-center justify-content-around icons">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https://datavisstella.web.app`}
              target="_blank"
              rel="noopener noreferrer"
              className="fs-5 d-flex align-items-center justify-content-center"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=https://datavisstella.web.app&text=${encodeURIComponent(
                "Check this data visualization site for human rights!"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="fs-5 d-flex align-items-center justify-content-center"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href={`https://instagram.com`}
              className="fs-5 d-flex align-items-center justify-content-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href={`https://api.whatsapp.com/send?text=https://datavisstella.web.app`}
              target="_blank"
              rel="noopener noreferrer"
              className="fs-5 d-flex align-items-center justify-content-center"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
          <p>Or copy link</p>
          <div className="field d-flex align-items-center justify-content-between">
            <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
            <input
              type="text"
              value="https://datavisstella.web.app"
              style={{ width: "80%" }}
            />
            <button
              onClick={(e) => {
                document.querySelector("input").select();
                if (document.execCommand("copy")) {
                  document.querySelector(".field").classList.add("active");
                  e.target.innerText = "Copied";
                  setTimeout(() => {
                    document.querySelector(".field").classList.remove("active");
                    e.target.innerText = "Copy";
                  }, 3500);
                }
              }}
            >
              Copy
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </footer>
  );
};

export default Footer;
