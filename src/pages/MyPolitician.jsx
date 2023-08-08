import { useContext, useEffect,useState } from "react"
import { PoliticianContext } from "../context/politicians.context"


import { get } from "../services/authService"

import PoliticianSummary from "../components/PoliticianSummary"


const MyPolitician = () => {
    const [follower, setFollow] = useState([]);

    const { pol } = useContext(PoliticianContext)

    useEffect(() => {
        get('/users/following')
        .then((f)=>{
          console.log('following get',f.data.following)
          setFollow(f.data.following)
        })
        .catch((err) => {
          console.log(err)
       })}
    , [])

    
    

  return (
    <div id="my-pol"> 
        <h1>My Politicians</h1>
        {
            pol.filter((p)=>follower.includes(p._id)).map((p) => {
                return (
                    
                    <PoliticianSummary key={p._id} pol={p}/>

                )
            })
        }
    </div>
  )
}

export default MyPolitician;