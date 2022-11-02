import "./sellcarchart.styles.scss"
import {
    BarChart,
    Bar,
    XAxis,
    Tooltip,
    YAxis,
    CartesianGrid,
  } from "recharts";
import { useState } from "react";

const SellCarChart= ()=> {
    const data = [
        {
          name: "Mon",
          hamada: 10,
          amt: 2400
        },
        {
          name: "Tues",
          hamada: 10,
          amt: 2210
        },
        {
          name: "Wed",
          hamada: 17,
          amt: 2290
        },
        {
          name: "Thu",
          hamada: 22,
          amt: 2000
        },
        {
          name: "Fri",
          hamada: 18,
          amt: 2181
        },
        {
          name: "Sat",
          hamada: 16,
          amt: 2500
        },
        {
          name: "Sun",
          hamada: 19,
          amt: 2100
        }
      ];

      const [color,setColor]=useState("black");
    return (
        <div className="sellcar-chart-container">
        <div>
            <h5 className="my-2">Tracking History</h5>
        </div>

        <div className="me-5">
        <BarChart className="barchart"
      width={400}
      height={300}
      data={data}
      barSize={20}
      >
      <XAxis dataKey="name" />
      <CartesianGrid strokeDasharray="3 3" />
      <YAxis/>
      <Tooltip />
        <Bar dataKey="hamada" fill="#FF6370" />
      
    </BarChart>
        </div>
      
 
      </div>
    )
}

export default SellCarChart