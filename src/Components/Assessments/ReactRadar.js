import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const ReactRadar = (props) => {
  // Sample data
//   const data = [
//     { name: "A", x: 21 },
//     { name: "B", x: 22 },
//     { name: "C", x: -32 },
//     { name: "D", x: -14 },
//     { name: "E", x: -51 },
//     { name: "F", x: 16 },
//   ];
  return (
    <RadarChart height={300} width={600} outerRadius="80%" data={props.data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="name" />
      <PolarRadiusAxis />
      <Radar dataKey="x" stroke="green" fill="transparent" fillOpacity={0.5} />
    </RadarChart>
  );
};

export default ReactRadar;
