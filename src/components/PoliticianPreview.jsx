import { useContext} from "react"
import { post } from "../services/authService"
import { AuthContext } from "../context/auth.context"

import PoliticianSummary from "../components/PoliticianSummary"

const PoliticianPreview = ({ pol , follower, setFollow }) => {
  
  const addToUser=(polId)=>{
    post(`/users/follow/${polId}`)
    .then((updatedUser)=>{
      setFollow(updatedUser.data.following);
    }) 
    .catch((err)=>{console.log(err)});
    
  }

  const removeToUser=(polId)=>{
    post(`/users/unfollow/${polId}`)
    .then((updatedUser)=>{
      setFollow(updatedUser.data.following);
    }) 
    .catch((err)=>{console.log(err)});
    
  }

  return (

    <div style={{display:'flex',justifyContent:'space-between', alignContent:'center'}}> 
      <PoliticianSummary key={pol._id} pol={pol}/>
      {!follower.includes(pol._id)&&<button style={{width:'7vw',height:'5vh'}} onClick={()=>{addToUser(pol._id)} }>Follow</button>}
      {follower.includes(pol._id)&&<button style={{width:'7vw',height:'5vh'}} onClick={()=>{removeToUser(pol._id)}}>Unfollow</button>}
      
    </div>
    
        

  );
};

export default PoliticianPreview;