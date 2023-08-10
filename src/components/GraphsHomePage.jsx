import { useEffect,useState,useContext } from "react"
import Chart from "react-apexcharts";

import { PoliticianContext } from "../context/politicians.context"

const Donut=()=>{
    const { pol } = useContext(PoliticianContext);
    const[manWoman,setManWomen]=useState([])
    
    useEffect(()=>{
        setManWomen([pol.filter((p)=>{return p['gender']=='M'}).length,pol.filter((p)=>{return p['gender']=='F'}).length])
        console.log(manWoman)
    },[pol])




    return(
        <div className="donut-graph">
          <Chart options={   {
              chart: {
                type: 'donut',
              },
              
              labels: ["Men", "Women"],
              title: {
                text: "Men/Women proportions in the house"
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  }
                  
                
                }
              }]
            }} series ={manWoman} 

            type="donut" height={200}/>
        </div>
    )
}

const TimeSeriesManWomen=()=>{
    return(
        <div></div>
    )
}


export {Donut,TimeSeriesManWomen};
