import { Bar, BarChart, ResponsiveContainer, XAxis } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 80,
  },
  {
    name: "Page B",
    uv: 50,
  },
  {
    name: "Page C",
    uv: 50,
  },
  {
    name: "Page D",
    uv: 80,
  },
  {
    name: "Page E",
    uv: 90,
  },
  {
    name: "Page F",
    uv: 50,
  },
];

export default function EVBarChart() {
  return (
    <ResponsiveContainer width={240} height={170}>
      <BarChart barSize={10} width={500} height={300} data={data}>
        <XAxis
          style={{
            fontSize: "0.8rem",
          }}
          dataKey="uv"
        />
        <Bar
          style={{
            borderRadius: "10px",
          }}
          dataKey="uv"
          fill="#6053ED"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
