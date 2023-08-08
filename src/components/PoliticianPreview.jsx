import { Link } from "react-router-dom";
import { get, post } from "../services/authService"

const PoliticianPreview = ({ pol }) => {
  
  const newName= [pol.short_title,pol.first_name,pol.middle_name,pol.last_name].reduce((acc,i)=>{if(i){return acc+' '+i} else{return acc}})
;

  const addToUser=(polId)=>{
    console.log(polId)
    /*post(`/politicians/follow/${polId}`)
    .then(()=>{})
    .catch((err)=>{console.log(NativeError)})*/
  }


  return (

    <div> 
    <Link to={`/politicians/${pol._id}`}>
          
            <p>{`${newName}`}</p>
            <button onClick={(pol)=>{addToUser(pol._id)}}>Follow</button>
          
          
      </Link>
    </div>
        

  );
};

export default PoliticianPreview;