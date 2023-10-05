import React from "react";

export const Tooltip = ({ selectedDataset, csvData, data, iso }) => {
  const tooltipContent = {
    womenEmpowerment: (
      <>
        {data.properties.name}
        <br />
        1911: {csvData.find((item) => item.Country === iso)?.["1911"] || "N/A"}
        <br />
        2022: {csvData.find((item) => item.Country === iso)?.["2022"] || "N/A"}
      </>
    ),
    nonDiscriminationLaw: (
      <>
        {data.properties.name}
        <br />
        Status quo:{" "}
        {csvData.find((item) => item.Country === iso)?.[
          "Law against discrimination"
        ] || "N/A"}
      </>
    ),
    pRScore: (
      <>
        {data.properties.name}
        <br />
        Score:{" "}
        {csvData.find((item) => item.Country === iso)?.["Political Score"] ||
          "N/A"}
      </>
    ),
    pressFRank: (
      <>
        {data.properties.name}
        <br />
        2002: {csvData.find((item) => item.Country === iso)?.["2002"] || "N/A"}
        <br />
        2023: {csvData.find((item) => item.Country === iso)?.["2023"] || "N/A"}
      </>
    ),
    electoralDem: (
      <>
        {data.properties.name}

        <br />
        {csvData.find((item) => item.Country === iso)?.[
          "Electoral Democracy"
        ] || "N/A"}
      </>
    ),
    hRIndex: (
      <>
        {data.properties.name}
        <br />
        Index:{" "}
        {csvData.find((item) => item.Country === iso)?.["Index"] || "N/A"}
      </>
    ),
    policyIndex: (
      <>
        {data.properties.name}
        <br />
        1991: {csvData.find((item) => item.Country === iso)?.["1991"] || "N/A"}
        <br />
        2019: {csvData.find((item) => item.Country === iso)?.["2019"] || "N/A"}
      </>
    ),
    lgbtqCensorship: (
      <>
        {data.properties.name}
        <br />
        Censorship: {/* .replace(/^\d+\.\s+/, "")  */}
        {csvData
          .find((item) => item.Country === iso)
          ?.["Censorship"]?.replace(/^\d+\.\s+/, "") || "N/A"}
      </>
    ),
    discriminationLaw: (
      <>
        {data.properties.name}
        <br />
        Status quo:{" "}
        {csvData.find((item) => item.Country === iso)?.["Discrimination"] ||
          "N/A"}
      </>
    ),
  };
  return <React.Fragment>{tooltipContent[selectedDataset]}</React.Fragment>;
};
