import "./assetsgraphchart.styles.scss"
import {
    AreaChart,
    Area,
    XAxis,
    Tooltip
  } from "recharts";

const AssetsGraphChart = ({data})=> {
    return (
        <div className="graphicchart-container">
        <div>
            <h3>Miles Statistics</h3>
        </div>

        <div>
            <div>element</div>
            <div>element</div>
            <div>element</div>

        </div>
      <AreaChart 
        width={700}
        height={240}
        data={data}
        // margin={{
        //   top: 10,
        //   right: 30,
        //   left: 5,
        //   bottom: 0
        // }}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <Area  type="monotone" dataKey="uv" stroke="#9C51FE" fill="##9C51FE" fillOpacity="0.05"/>
      </AreaChart>
      </div>
    );
  
  
}

export default AssetsGraphChart