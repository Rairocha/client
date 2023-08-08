import { useContext, useEffect} from "react"
import { Link } from "react-router-dom";
import { get, post } from "../services/authService"
import { AuthContext } from "../context/auth.context"

const PoliticianPreview = ({ pol , follower, setFollow }) => {
  

  const newName= [pol.short_title,pol.first_name,pol.middle_name,pol.last_name].reduce((acc,i)=>{if(i){return acc+' '+i} else{return acc}})
;
  const {  user } = useContext(AuthContext)


  

  const addToUser=(polId,user)=>{
    post(`/users/follow/${polId}`,user)
    .then((updatedUser)=>{
      setFollow(updatedUser.data.following);
    }) 
    .catch((err)=>{console.log(err)});
    
  }

  

  return (

    <div> 
    <Link to={`/politicians/${pol._id}`}>
          
            <p>{`${newName}`}</p>
      </Link>
      <button onClick={()=>{addToUser(pol._id,user)}}>Follow</button>
    </div>
        

  );
};

export default PoliticianPreview;