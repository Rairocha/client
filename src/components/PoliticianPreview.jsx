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

    <div> 
      <PoliticianSummary key={pol._id} pol={pol}/>
      {!follower.includes(pol._id)&&<button onClick={()=>{addToUser(pol._id)}}>Follow</button>}
      {follower.includes(pol._id)&&<button onClick={()=>{removeToUser(pol._id)}}>Unfollow</button>}
    </div>
        

  );
};

export default PoliticianPreview;