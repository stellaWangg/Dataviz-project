import { useWorldData } from "../../utils/useGeoMap";
import React, { useEffect, useRef, useState } from "react";
import { select } from "d3";
import { useFetchedData } from "../../utils/processData";
import { updateMap } from "../../utils/updateMap";
export const GenderMap = ({ selectedTheme }) => {
  const mapData = useWorldData([]);
  const svgRef = useRef(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedDataset, setSelectedDataset] = useState("womenEmpowerment");
  const { csvData, isLoading } = useFetchedData(selectedTheme, selectedDataset);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const svg = select(svgRef.current);
    const container = select(".gender-container");
    const tooltip = container
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);
    if (mapData && csvData.length > 0) {
      updateMap(
        svg,
        mapData,
        selectedDataset,
        csvData,
        tooltip,
        setSelectedCountry
      );
      setLoading(false);
    }
  }, [csvData, isLoading]);
  return (
    <>
      {isLoading ? (
        <div className="text-center mb-5">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="gender-container" id="gender-equality">
          <h2>Gender Equality MAP</h2>
          <div>
            <select
              value={selectedDataset}
              onChange={(e) => setSelectedDataset(e.target.value)}
            >
              <option value="womenEmpowerment">Women Empowerment Index</option>
              <option value="nonDiscriminationLaw">
                Laws Against discrimination in Hiring
              </option>
            </select>
          </div>
          <svg
            ref={svgRef}
            viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}
            width={`${window.innerWidth / 1.3}`}
          >
            {selectedCountry && (
              <div className="tooltip">
                <h4>Selected Country: {selectedCountry}</h4>
              </div>
            )}
          </svg>
        </div>
      )}
    </>
  );
};
