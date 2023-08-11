import { useEffect,useState,useContext } from "react"
import Chart from "react-apexcharts";

import { PoliticianContext } from "../context/politicians.context"

const Donut=({pol})=>{
    
    const[manWoman,setManWomen]=useState([])
    
    useEffect(()=>{
        setManWomen([pol.filter((p)=>{return p['gender']=='M'}).length,pol.filter((p)=>{return p['gender']=='F'}).length])
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

const TimeSeriesManWomen=({pol})=>{
    
    const[countSMan,setCountSMan]=useState({})
    const[countSWoman,setCountSWoman]=useState({})
    const[countRMan,setCountRMan]=useState({})
    const[countRWoman,setCountRWoman]=useState({})
    function range(start, end) {
        if(start === end) return [start];
        return [start, ...range(start + 1, end)];
    }

    const objectCount=(chamberOption)=>{
        const idYears= pol.map((p)=>{
            return [p['gender'],p['roles'].filter((i)=>{return i['chamber']==chamberOption}).map((i)=>{
                return range(parseInt(i['start_date'].slice(0,4)),parseInt(i['end_date'].slice(0,4)))
            }).flat()]    
    })
        let years = [... new Set(idYears.map((i)=>{return i[1]}).flat())].sort()
        let objMCount= years.reduce((acc, key) => { acc[key] = 0 
                                                    return acc; }, {})
        let objFCount= years.reduce((acc, key) => { acc[key] = 0 
            return acc; }, {})
        
        for (let y of years){
            idYears.forEach(element => {
                if(element[0]=='M'){
                    objMCount[y]+=element[1].includes(y)            
                }
                else{
                    objFCount[y]+=element[1].includes(y)
                }
            })
        }
        return [objMCount,objFCount]
    }
    useEffect(()=>{
        let [maleS,femaleS] = objectCount('Senate')
        let [maleR,femaleR] = objectCount('House')
        setCountSMan(maleS)
        setCountSWoman(femaleS)
        setCountRMan(maleR)
        setCountRWoman(femaleR)
    },[pol])
    
    return(
        <div style={{}}>
            <Chart type="line" 
            series= {[
                {
                  name: "Man",
                  data: Object.values(countSMan),
                },
                //additional data in this array..
                {
                  name: "Women",
                  data: Object.values(countSWoman),
                },
              ]} 
            options={{
                xaxis: {
                  categories: Object.keys(countSMan),
                  tickAmount: 10
                },
                title: {
                    text: 'Senate',
                    align: 'center'}
                ,width:'50vw'
              }} />
              <Chart type="line" 
            series= {[
                {
                  name: "Man",
                  data: Object.values(countRMan),
                },
                //additional data in this array..
                {
                  name: "Women",
                  data: Object.values(countRWoman),
                },
              ]} 
            options={{
                xaxis: {
                  categories: Object.keys(countRMan),
                  tickAmount: 10
                },
                title: {
                    text: 'House of Representatives',
                    align: 'center'}
              }} />
        </div>
    )
}

const TimeSeriesParties=({pol})=>{
    
    const[countSR,setCountSR]=useState({})
    const[countSD,setCountSD]=useState({})
    const[countSI,setCountSI]=useState({})
    const[countRR,setCountRR]=useState({})
    const[countRD,setCountRD]=useState({})
    const[countRI,setCountRI]=useState({})
    const[countSRD,setCountSRD]=useState({})

    function range(start, end) {
        if(start === end) return [start];
        return [start, ...range(start + 1, end)];
    }

    const objectCount=(chamberOption)=>{
        const idYears= pol.map((p)=>{
            return [p['party'],p['roles'].filter((i)=>{return i['chamber']==chamberOption}).map((i)=>{
                return range(parseInt(i['start_date'].slice(0,4)),parseInt(i['end_date'].slice(0,4)))
            }).flat()]    
    })
        let years = [... new Set(idYears.map((i)=>{return i[1]}).flat())].sort()
        let objRCount= years.reduce((acc, key) => { acc[key] = 0 
                                                    return acc; }, {})
        let objDCount= years.reduce((acc, key) => { acc[key] = 0 
                                                    return acc; }, {})
        let objICount= years.reduce((acc, key) => { acc[key] = 0 
                                                    return acc; }, {})
        
        for (let y of years){
            idYears.forEach(element => {
                if(element[0]=='R'){
                    objRCount[y]+=element[1].includes(y)            
                }
                else if(element[0]=='D'){
                    objDCount[y]+=element[1].includes(y)            
                }
                else{
                    objICount[y]+=element[1].includes(y)
                }
            })
        }
        return [objRCount,objDCount,objICount]
    }
    useEffect(()=>{
        let [RS,DS,IS] = objectCount('Senate')
        let [RR,DR,IR] = objectCount('House')
        setCountSR(RS)
        setCountSD(DS)
        setCountSI(IS) 
   
        setCountRR(RR)
        setCountRD(DR)
        setCountRI(IR) 
    },[pol])
    
    return(
        <div style={{}}>
            <Chart type="line" 
            series= {[
                {
                  name: "Republican",
                  data: Object.values(countSR),
                },
                {
                    name: "Democrat",
                    data: Object.values(countSD),
                  },
                  {
                    name: "Independent",
                    data: Object.values(countSI),
                  },
                //additional data in this array..
              ]} 
            options={{
                xaxis: {
                  categories: Object.keys(countSR),
                  tickAmount: 10
                },
                title: {
                    text: 'Senate',
                    align: 'center'}
                ,width:'50vw'
              }} />
              <Chart type="line" 
            series= {[
                {
                  name: "Republican",
                  data: Object.values(countRR),
                },
                {
                    name: "Democrat",
                    data: Object.values(countRD),
                  },
                  {
                    name: "Independent",
                    data: Object.values(countRI),
                  },
                //additional data in this array..
              ]} 
            options={{
                xaxis: {
                  categories: Object.keys(countRR),
                  tickAmount: 10
                },
                title: {
                    text: 'Senate',
                    align: 'center'}
                ,width:'50vw'
              }} />
        </div>
    )
}


export {Donut,TimeSeriesManWomen,TimeSeriesParties};
