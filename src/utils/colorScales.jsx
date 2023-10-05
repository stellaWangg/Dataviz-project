import { scaleOrdinal, scaleLinear, schemeYlOrRd, scaleSequential } from "d3";

const colorScales = (selectedDataset, csvData, countryDataEntry) => {
  if (selectedDataset === "lgbtqCensorship") {
    let uniqueValues = [
      "01. No censorship",
      "02. Varies by region",
      "03. Ambiguous",
      "04. Other punishment",
      "05. Fine as punishment",
      "06. State-enforced",
      "07. Imprisonment as punishment",
    ];
    const colorScale1 = scaleOrdinal()
      .domain(uniqueValues)
      .range([
        "#609966",
        "#79AC78",
        "#FFFF00",
        "#FFD700",
        "#FFA500",
        "#BB2525",
        "#952323",
      ]);
    return colorScale1(countryDataEntry.Censorship);
  } else if (selectedDataset === "policyIndex") {
    const policyData = csvData.filter((item) => item.Country !== "");
    const policyDifferences = policyData.map((item) => {
      const value1991 = item[1991];
      const value2019 = item[2019];
      // Check if both values are defined before subtraction
      if (value1991 !== undefined && value2019 !== undefined) {
        return value2019 - value1991;
      } else {
        return 0;
      }
    });
    const maIndex = Math.max(...policyDifferences);
    const miIndex = Math.min(...policyDifferences);
    const colorScale2 = scaleLinear()
      .domain([miIndex, 0, maIndex])
      .range(["#7C9473", "#FFB200"]);
    return colorScale2(countryDataEntry[1991] - countryDataEntry[2019]);
  } else if (selectedDataset === "discriminationLaw") {
    let dValues = ["Illegal", "Illegal in some contexts", "No protections"];
    const colorScale3 = scaleOrdinal()
      .domain(dValues.sort())
      .range(["#4c9642", "#FFBF00", "#c73f24"]);
    return colorScale3(countryDataEntry.Discrimination);
  } else if (selectedDataset === "womenEmpowerment") {
    const emData = csvData.filter((item) => item.Country !== "");
    const empDifferences = emData.map((item) => {
      const value1911 = item[1911];
      const value2022 = item[2022];
      // Check if both values are defined before subtraction
      if (value1911 !== undefined && value2022 !== undefined) {
        return value1911 - value2022;
      } else {
        return 0;
      }
    });
    const maxIndex = Math.max(...empDifferences);
    const minIndex = Math.min(...empDifferences);

    const colorScale4 = scaleLinear()
      .domain([minIndex, 0, maxIndex])
      .range(schemeYlOrRd[3]);

    return colorScale4(countryDataEntry[1911] - countryDataEntry[2022]);
  } else if (selectedDataset === "nonDiscriminationLaw") {
    //this dataset also separate color to 2 categories
    const colorScale5 = scaleOrdinal()
      .domain(["No", "Yes"])
      .range(["#c73f24", "#4c9642"]);
    return colorScale5(countryDataEntry["Law against discrimination"]);
  } else if (selectedDataset === "pressFRank") {
    //this part I separate the value as negative and positive, negative is the rank number decreased(means the situation gets better),positive is rank number increased(situation gets worse).
    const interpolateColors = (d) => (d < 0 ? "#2bba3e" : "#c73f24"); //#2bba3e is greenish; #c73f24 is redish
    const colorScale6 = scaleSequential(interpolateColors).domain([-1, 1]);
    return colorScale6(countryDataEntry[2023] - countryDataEntry[2002]);
  } else if (selectedDataset == "electoralDem") {
    // separate the value as democracy and non-democracy
    const colorScale7 = scaleOrdinal()
      .domain(["Democracy", "Non-democracy"])
      .range(["#009FBD", "#EB455F"]);
    return colorScale7(countryDataEntry["Electoral Democracy"]);
  } else if (selectedDataset == "hRIndex") {
    const colorScale8 = scaleSequential()
      .domain([0, 1])
      .range([
        "#a66564",
        "#2756db",
        "#7cb982",
        "#c795f5",
        "#e39e60",
        "#a5a57d",
        "#9f8a6d",
        "#eb8ac3",
        "#a0a0a0",
      ]);
    return colorScale8(countryDataEntry["Index"]);
  } else if (selectedDataset == "pRScore") {
    const colorScale9 = scaleLinear()
      .domain([-3, 15, 50])
      .range(["darkred", "orange", "green"]);
    return colorScale9(countryDataEntry["Political Score"]);
  }
};
export default colorScales;
