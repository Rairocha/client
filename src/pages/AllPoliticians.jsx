import { useContext, useEffect,useState } from "react"
import { PoliticianContext } from "../context/politicians.context"
import {Divider} from 'antd'

import { get } from "../services/authService"

import PoliticianPreview from "../components/PoliticianPreview"
import Filters from "../components/Filters";


const AllPoliticians = () => {
    const [follower, setFollow] = useState([]);
    const [filterValues, setFilterValues] = useState({})

    const { pol } = useContext(PoliticianContext);

    const filterPoliticians = (p)=>{
      return Object.keys(filterValues).filter((f)=>(filterValues[f]!='all'))
      .reduce((acc,k)=>{return acc&& p[k]==filterValues[k]},true)
    }
    
   
    useEffect(() => {
        get('/users/following')
        .then((f)=>{
          //console.log('following get',f.data.following)
          setFollow(f.data.following)
        })
        .catch((err) => {
          console.log(err)
       })}
    , [])
       
  
//console.log('result',  Object.keys(filterValues).filter((f)=>(filterValues[f]!='all')).reduce((acc,k)=>{return acc&& pol[0][k]==filterValues[k]},true)  )
  return (
    <div id="all-pol"> 
        <h1>All Politicians</h1>
        <Filters filterValues={filterValues}  setFilterValues={setFilterValues}/>
        {
            pol.filter((p)=>{return filterPoliticians(p)}).map((p) => {
                return (
                    <div>
                    <PoliticianPreview key={p._id} pol={p} follower={follower} setFollow={setFollow}/>
                    <Divider/>
                    </div>
                )
            })
        }
      
    </div>
  )
}

export default AllPoliticians