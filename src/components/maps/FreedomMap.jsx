import { useWorldData } from "../../utils/useGeoMap";
import React, { useEffect, useRef, useState } from "react";
import { select } from "d3";
import { useFetchedData } from "../../utils/processData";
import { updateMap } from "../../utils/updateMap";

export const FreedomMap = ({ selectedTheme }) => {
  const mapData = useWorldData([]);
  const svgRef = useRef(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedDataset, setSelectedDataset] = useState("pressFRank");
  const { csvData, isLoading } = useFetchedData(selectedTheme, selectedDataset);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const svg = select(svgRef.current);
    const container = select(".freedom-container");
    const tooltip = container
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);
    if (!isLoading && mapData && csvData.length > 0) {
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
        <div className="freedom-container" id="freedom">
          <h2>Human Rights & Freedom MAP</h2>
          <div>
            <select
              value={selectedDataset}
              onChange={(e) => setSelectedDataset(e.target.value)}
            >
              <option value="pRScore">Political Rights</option>
              <option value="hRIndex">Human Rights Data</option>
              <option value="electoralDem">
                Electoral Democracy Countries
              </option>
              <option value="pressFRank">Press Freedom Rank</option>
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
