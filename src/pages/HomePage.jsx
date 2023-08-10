import { PoliticianContext } from "../context/politicians.context"
import { useContext, useEffect,useState } from "react"
import {Donut} from "../components/GraphsHomePage";

const HomePage = () => {
    const { pol } = useContext(PoliticianContext);
    
    
    useEffect(()=>{
      console.log(pol.filter((p)=>{return p['gender']=='M'}).length)
    },[pol])

    return (
      <div style={{display:'flex',flexDirection:'column',alignItems: 'center',justifyContent:'center'}}><p>In our database since {Math.min.apply(null,pol.map((p)=>{
        return parseInt(p['roles'].at(-1)['start_date'].slice(0,4))
        }))} a total of {pol.map((p)=>{return p['roles'].length}).reduce((a,b)=>{return a+b},0)} roles in the house of senate({pol.map((p)=>{return p['roles'].filter((f)=>{return f['chamber']=='Senate'}).length}).reduce((a,b)=>{return a+b},0)} roles) and house of representatives ({pol.map((p)=>{return p['roles'].length}).reduce((a,b)=>{return a+b},0)}) were occupied by {pol.length} politicians. 
        <br/>If you are thinking about becoming a candidate think again! In the same period of time 16370 people have won a lottery jackpot and over 3000 people became NBA players.</p>
        <p>If you are a women it will be even harder to be elected</p>
        <div style={{width:'30vw',display:'flex',alignItems: 'center',justifyContent:'center'}}>
          
          <Donut/>
        </div>
        <div style={{width:'30vw',display:'flex',alignItems: 'center',justifyContent:'center'}}>
          
          <Donut/>
        </div>
      </div>
        
    )
  }


  
  export default HomePage