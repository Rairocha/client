import { useContext, useEffect,useState } from "react"
import { PoliticianContext } from "../context/politicians.context"
import { Divider, Input, Select,Form,Button } from 'antd';

import { get } from "../services/authService"

import PoliticianPreview from "../components/PoliticianPreview"
import Filters from "../components/Filters";


const AllPoliticians = () => {
    const [follower, setFollow] = useState([]);
    const [filterBool, setFilterBool] = useState(false);
    const [filterValues, setFilterValues] = useState({})

    const { pol } = useContext(PoliticianContext);

    const filterPoliticians = (p)=>{
      return Object.keys(filterValues).filter((f)=>(filterValues[f]!='all'))
      .reduce((acc,k)=>{return acc&& p[k]==filterValues[k]},true)
    }

    const activateFilters = ()=>{
      if (filterBool){
        setFilterBool(false)
      }
      else{
        setFilterBool(true)
      }
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
       
  
console.log('result',  Object.keys(filterValues).filter((f)=>(filterValues[f]!='all')).reduce((acc,k)=>{return acc&& pol[0][k]==filterValues[k]},true)  )
  return (
    <div id="all-pol"> 
        <h1>All Politicians</h1>
        <Filters filterValues={filterValues}  setFilterValues={setFilterValues}/>
        {
            pol.filter((p)=>{return filterPoliticians(p)}).map((p) => {
                return (
                    
                    <PoliticianPreview key={p._id} pol={p} follower={follower} setFollow={setFollow}/>

                )
            })
        }
      
    </div>
  )
}

export default AllPoliticians