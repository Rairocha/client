import { useContext, useEffect,useState } from "react"
import { PoliticianContext } from "../context/politicians.context"
import { AuthContext } from "../context/auth.context"
import { Link } from "react-router-dom"
import { get, post } from "../services/authService"

import PoliticianPreview from "../components/PoliticianPreview"


const AllPoliticians = () => {
    const [follower, setFollow] = useState([]);

    const { pol, getPol } = useContext(PoliticianContext)
    const {  user } = useContext(AuthContext)

    useEffect(() => {
        getPol();
        get('/users/following',user)
        .then((f)=>{
          console.log('following get',f.data.following)
          setFollow(f.data.following)
        })
        .catch((err) => {
          console.log(err)
       })

    }, [])

  return (
    <div id="all-pol"> 
        <h1>All Politicians</h1>
        {
            pol.map((p) => {
                return (
                    
                    <PoliticianPreview key={p._id} pol={p} follower={follower} setFollow={setFollow}/>

                )
            })
        }
    </div>
  )
}

export default AllPoliticians