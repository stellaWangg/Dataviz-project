import { csv } from "d3";
import { useState, useEffect } from "react";
import { datasets } from "../data/themeData";

export const useFetchedData = (selectedTheme, selectedDataset) => {
  const [csvData, setCsvData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (!datasets[selectedTheme] || !datasets[selectedTheme][selectedDataset]) {
      console.error("Dataset or theme is invalid");
      return;
    }
    setIsLoading(true);
    csv(datasets[selectedTheme][selectedDataset].url)
      .then((resp) => {
        let fetchedData = [];
        if (selectedTheme === "lgbtq") {
          if (selectedDataset === "policyIndex") {
            fetchedData = resp.map((d) => ({
              Country: d["Code"],
              1991: d["1991"],
              2019: d["2019"],
            }));
          } else if (selectedDataset === "discriminationLaw") {
            fetchedData = resp.map((d) => ({
              Country: d["Code"],
              Discrimination: d["Discrimination"].replace(/^\d+\.\s+/, ""),
            }));
          } else if (selectedDataset === "lgbtqCensorship") {
            fetchedData = resp.map((d) => ({
              Country: d["Code"],
              Censorship: d["Censorship"],
            }));
          }
        } else if (selectedTheme === "gender") {
          if (selectedDataset === "womenEmpowerment") {
            fetchedData = resp.map((d) => ({
              Country: d["Code"],
              1911: d["index_1911"],
              2022: d["index_2022"],
            }));
          } else if (selectedDataset === "nonDiscriminationLaw") {
            fetchedData = resp.map((d) => ({
              Country: d["Code"],
              "Law against discrimination":
                d["prohibit discrimination"] === "1" ? "Yes" : "No",
            }));
          }
        } else if (selectedTheme === "freedom") {
          if (selectedDataset === "pressFRank") {
            fetchedData = resp.map((d) => ({
              Country: d["ISO3"],
              2002: d["Press Freedom Rank_2002"],
              2023: d["Press Freedom Rank_2023"],
            }));
          } else if (selectedDataset === "pRScore") {
            fetchedData = resp.map((d) => ({
              Country: d["Code"],
              "Political Score": d["polrights_score_fh"],
            }));
          } else if (selectedDataset === "electoralDem") {
            fetchedData = resp.map((d) => ({
              Country: d["Code"],
              "Electoral Democracy":
                d["Electoral Democracy Designation in FIW 2023"] === "Yes"
                  ? "Democracy"
                  : "Non-democracy",
            }));
          } else if (selectedDataset === "hRIndex") {
            fetchedData = resp.map((d) => ({
              Country: d["Code"],
              Index: d["civ_libs_vdem_owid"],
            }));
          }
        }
        setCsvData(fetchedData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [selectedDataset, selectedTheme]);
  return { csvData, isLoading };
};
