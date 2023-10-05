import { csv } from "d3";
import { useEffect, useState } from "react";

import { feature } from "topojson";

const jsonUrl = "https://unpkg.com/world-atlas@2.0.2/countries-50m.json";
const isoUrl =
  "https://gist.githubusercontent.com/stellaWangg/9e4dbfef0159014962ad331f1118f28e/raw/258a5d6f6294fb14da769e9e950192476709e6df/cleanISO.csv";

export const useWorldData = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    Promise.all([fetch(jsonUrl).then((res) => res.json()), csv(isoUrl)])
      .then(([world, isoCode]) => {
        const countries = feature(world, world.objects.countries);
        const isoCodeData = new Map();
        isoCode.forEach((d) => {
          isoCodeData.set(d.name, d["alpha-3"]);
        });
        //modify the acronym names
        const acronymName = {
          "Is.": "Island",
          "Dem. ": "Democratic ",
          "Rep. ": "Republic ",
          "Rep.": "Republic ",
          "Br. ": "British ",
          "Ter.": "Territory ",
          "W.": "Western",
          "N.": "Northern",
          "S.": "South",
          "Geo.": "Georgia",
          "Barb.": "Barbuda",
          "Herz.": "Herzegovina",
          "Eq.": "Equatorial",
          "St. Vin. and Gren.": "St. Vincent and the Grenadines",
          "St-": "St. ",
          "": "",
          "Fr.": "French",
          "Fr. South Antarctic Lands": "French Southern Territories",
          "U.South": "U.S.",
        };
        countries.features.forEach((d) => {
          let countryName = d.properties.name;
          Object.keys(acronymName).forEach((abbrName) => {
            if (countryName.includes(abbrName)) {
              countryName = countryName.replace(
                abbrName,
                acronymName[abbrName]
              );
            }
          });
          // d.properties.name = countryName;
          d.properties.iso_a3 = isoCodeData.get(countryName) || null;
        });
        setData(countries);
      })
      .catch((error) => console.log(error));
  }, []);
  return data;
};
