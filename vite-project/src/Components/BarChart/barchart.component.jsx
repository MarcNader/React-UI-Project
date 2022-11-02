import "./barchart.styles.scss";

import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "1 pm",
    hamada: 4000,
    amt: 2400
  },
  {
    name: "2 pm",
    hamada: 3000,
    amt: 2210
  },
  {
    name: "3 pm",
    hamada: 2000,
    amt: 2290
  },
  {
    name: "4 pm",
    hamada: 2780,
    amt: 2000
  },
  {
    name: "5 pm",
    hamada: 1890,
    amt: 2181
  },
  {
    name: "6 pm",
    hamada: 2390,
    amt: 2500
  },
  {
    name: "7 pm",
    hamada: 3490,
    amt: 2100
  }
];

const BarCharts= () => {
  return (
    <div className="chart-container">
        <div>
            <h3>Miles Statistics</h3>
        </div>

        <div>
            <div>element</div>
            <div>element</div>
            <div>element</div>

        </div>
    {/* <ResponsiveContainer width="50%" height={200} > */}
       <BarChart className="barchart"
      width={400}
      height={200}
      data={data}
      barSize={20}
      >
      <XAxis dataKey="name" />
      <Tooltip />
      <Bar dataKey="hamada" fill="#82ca9d" />
    </BarChart>
      {/* </ResponsiveContainer> */}
      </div>
    );
}

export default BarCharts