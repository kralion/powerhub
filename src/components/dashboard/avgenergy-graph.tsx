import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";

import React from "react";
const data = [
  {
    name: "Page A",
    level: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page G",
    level: 6000,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page B",
    level: 3500,
    pv: 1398,
    amt: 2210,
  },

  {
    name: "Page G",
    level: 4500,
    pv: 4300,
    amt: 2100,
  },
];

export default function AvgEnergyGraph() {
  return (
    <AreaChart
      width={150}
      height={50}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#6053ED" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
      </defs>
      <Tooltip
        trigger="click"
        content={
          <div className="rounded-md bg-white p-2 shadow-md">
            <p className="text-sm font-semibold text-[#6053ED]">78%</p>
          </div>
        }
        cursor={{ stroke: "none", strokeWidth: 2 }}
      />

      <Area
        type="monotone"
        dataKey="level"
        stroke="#271ba3"
        fillOpacity={1}
        fill="url(#colorUv)"
      />
    </AreaChart>
  );
}
