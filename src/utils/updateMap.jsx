import React from "react";
import { select, zoom, geoPath, geoMercator } from "d3";

import { Tooltip } from "../components/Tooltip";
import { renderToString } from "react-dom/server";
import colorScales from "./colorScales";
export const updateMap = (
  svg,
  mapData,
  selectedDataset,
  csvData,
  tooltip,
  setSelectedCountry
) => {
  const onMouseOver = (event, d) => {
    setSelectedCountry(d.properties.name);
    const tooltipContent = renderToString(
      <Tooltip
        selectedDataset={selectedDataset}
        csvData={csvData}
        data={d}
        iso={d.properties.iso_a3}
        name={d.properties.name}
      />
    );
    tooltip
      .style("opacity", 1)
      .style("left", event.pageX + "px")
      .style("top", event.pageY + "px")
      .html(tooltipContent)
      .transition()
      .duration(500);
    select(event.target).classed("hovered", true); // Add a "hovered" class to change the color
  };
  const onMouseOut = (event) => {
    tooltip.style("opacity", 0);
    setSelectedCountry(null);
    select(event.target).classed("hovered", false); // Remove the "hovered" class to revert the color
  };

  svg.selectAll("g").remove();
  const width = 600;
  const height = 500;
  // project the map
  const projection = geoMercator()
    .scale(150)
    .center([0, 0])
    .translate([width, height]);
  const path = geoPath(projection);
  const g = svg.append("g");
  g.selectAll("country")
    .data(mapData.features.filter((e) => e.id !== "010")) //remove antarctica
    .enter()
    .append("path")
    .attr("d", path)
    .attr("class", "country")
    .attr("fill", (d) => {
      const countryCode = d.properties.iso_a3 || d.properties.name;
      const countryDataEntry = csvData.find(
        (item) => item.Country === countryCode
      );

      if (countryDataEntry) {
        const colorScale = colorScales(
          selectedDataset,
          csvData,
          countryDataEntry
        );
        return colorScale;
      } else {
        return "gray";
      }
    })
    .on("mouseover", onMouseOver)
    .on("mouseout", onMouseOut);

  // Create a zoom behavior and attach it to the SVG element
  const zoomBehavior = zoom()
    .scaleExtent([1, 3])
    .on("zoom", (event) => {
      g.attr("transform", event.transform);
    });
  // add the function to svg
  svg.call(zoomBehavior);
};
