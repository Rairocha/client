import { Link } from "react-router-dom";

const PoliticianSummary = ({pol}) => {
    const newName= [pol.short_title,pol.first_name,pol.middle_name,pol.last_name].reduce((acc,i)=>{if(i){return acc+' '+i} else{return acc}})
;
    return (
        <Link to={`/politicians/details/${pol._id}`}>
          
            <p>{`${newName}`}</p>

      </Link>
    )
}
export default PoliticianSummary;