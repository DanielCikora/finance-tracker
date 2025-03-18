"use client";
import { BarChart } from "@mui/x-charts/BarChart";
export default function Chart() {
  return (
    <BarChart
      xAxis={[
        {
          scaleType: "band",
          data: ["group A", "group B", "group C", "group D"],
        },
      ]}
      series={[
        { data: [3, 4, 2] },
        { data: [2, 5, 7] },
        { data: [8, 5, 3] },
        { data: [3, 9, 2] },
      ]}
      width={1200}
      height={600}
    />
  );
}
