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
    <ResponsiveContainer width={240} height={280}>
      <BarChart barSize={15} data={data}>
        <XAxis
          style={{
            fontSize: "0.8rem",
          }}
          dataKey="uv"
        />
        <Bar
          dataKey="uv"
          shape={(props: {
            x: number;
            y: number;
            width: number;
            height: number;
          }) => {
            const { x, y, width, height } = props;
            return (
              <rect
                x={x}
                y={y}
                width={width}
                height={height}
                rx={6}
                ry={6}
                fill="#6053ED"
              />
            );
          }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
