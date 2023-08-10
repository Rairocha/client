import { useEffect,useState } from "react"
//import AnyChart from 'anychart';
import ApexCharts from 'apexcharts'
import React, { Component } from "react";
import Chart from "react-apexcharts";



const TimeLine=({choosenPol})=>{
    const [cleanRoles,setCleanRoles] = useState([])

    const roleCleaningFunc=()=>{
        const first = choosenPol['roles'][0]
        let finalRoles=[{name:`${first['short_title']} - ${first.party.replace('R','Republican').replace('D','Democrat').replace('I','Independent').replace('P','Progressive')}`,start:first['start_date'],end:first['end_date']}]

        for( let r of choosenPol['roles'].slice(1)){
            if((`${r['short_title']} - ${r.party.replace('R','Republican').replace('D','Democrat').replace('I','Independent').replace('P','Progressive')}`==finalRoles.at(-1)['name'])&&(r['end_date'].slice(0,7)==finalRoles.at(-1)['start'].slice(0,7))){
                finalRoles.at(-1)['start']=r['start_date']
            }
            else{
                finalRoles.push({name:`${r['short_title']} - ${r.party.replace('R','Republican').replace('D','Democrat').replace('I','Independent').replace('P','Progressive')}`,start:r['start_date'],end:r['end_date']})
            }
        }
        
        return [{data:finalRoles.map((m)=>{return {x:m['name'],y:[(new Date(m['start'])).getTime(),(new Date(m['end'])).getTime()]} })}]
    }
    useEffect(()=>{
        setCleanRoles(roleCleaningFunc())
    },[choosenPol])

/*{function () {
                // create a timeline chart
                let chart = AnyChart.timeline();


                // configure the range series label settings
                cleanRoles.labels().format("{%name}");
                // set the chart container id
                chart.container("container");

                // draw the chart
                 chart.draw()}} */
    
    return(
        <div className="timeline-graph">
            <Chart options={{
              chart: {
                height: 390,
                type: 'rangeBar'},
              plotOptions: {
                bar: {
                  horizontal: true,
                  isDumbbell: true,
                  barHeight: '1%'
                }
              },
              short_title: {
                text: 'Functions over the years'
              },
              xaxis: {
                type: 'datetime'
              },
              tooltip: {
                x: {
                    format: "MMM yyyy"
                   }
                 }
            }} series ={cleanRoles} 

            type="rangeBar" height={350}/>
        </div>
    )
}

export default TimeLine;