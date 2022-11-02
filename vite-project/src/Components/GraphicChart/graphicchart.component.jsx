import "./graphicchart.styles.scss"
import {
    AreaChart,
    Area,
    XAxis,
    Tooltip
  } from "recharts";

const GraphicChart = ({data})=> {
      
    
      
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
          <AreaChart 
            width={400}
            height={240}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 5,
              bottom: 0
            }}
          >
            {/* <CartesianGrid strokeDasharray="3"/> */}
            <XAxis dataKey="name" />
            <Tooltip />
            <Area id="areachart" type="monotone" dataKey="uv" stroke="red" fill="#FFF3EB" fillOpacity="0.3"/>
          </AreaChart>
          </div>
        );
      
      
    
}

export default GraphicChart