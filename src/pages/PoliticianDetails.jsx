import { useContext, useEffect, useState,Suspense } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { PoliticianContext } from "../context/politicians.context"

import Comment from "../components/Comment"


const PoliticianDetails = ()=>{
    let param = useParams();
    
    const [comments, setComment] = useState([])
    const { pol } = useContext(PoliticianContext);
    const [choosenPol,setChoosenPol] = useState(null)

    function getAge(dateString){
        {
            var today = new Date();
            var birthDate = new Date(dateString);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
            {
                age--;
            }
            return age;
        }
    }
    
    useEffect(()=>{
        setChoosenPol(pol.filter((p)=>{return p._id == param.polId})[0])
    },[param.polId, pol])

    const stateObj = {'AL': 'Alabama',
    'AK': 'Alaska',
    'AS': 'American Samoa',
    'AZ': 'Arizona',
    'AR': 'Arkansas',
    'AA': 'Armed Forces Americas',
    'AE': 'Armed Forces Europe',
    'AP': 'Armed Forces Pacific',
    'CA': 'California',
    'CO': 'Colorado',
    'CT': 'Connecticut',
    'DE': 'Delaware',
    'DC': 'District Of Columbia',
    'FL': 'Florida',
    'GA': 'Georgia',
    'GU': 'Guam',
    'HI': 'Hawaii',
    'ID': 'Idaho',
    'IL': 'Illinois',
    'IN': 'Indiana',
    'IA': 'Iowa',
    'KS': 'Kansas',
    'KY': 'Kentucky',
    'LA': 'Louisiana',
    'ME': 'Maine',
    'MH': 'Marshall Islands',
    'MD': 'Maryland',
    'MA': 'Massachusetts',
    'MI': 'Michigan',
    'MN': 'Minnesota',
    'MS': 'Mississippi',
    'MO': 'Missouri',
    'MT': 'Montana',
    'NE': 'Nebraska',
    'NV': 'Nevada',
    'NH': 'New Hampshire',
    'NJ': 'New Jersey',
    'NM': 'New Mexico',
    'NY': 'New York',
    'NC': 'North Carolina',
    'ND': 'North Dakota',
    'NP': 'Northern Mariana Islands',
    'OH': 'Ohio',
    'OK': 'Oklahoma',
    'OR': 'Oregon',
    'PA': 'Pennsylvania',
    'PR': 'Puerto Rico',
    'RI': 'Rhode Island',
    'SC': 'South Carolina',
    'SD': 'South Dakota',
    'TN': 'Tennessee',
    'TX': 'Texas',
    'VI': 'US Virgin Islands',
    'UT': 'Utah',
    'VT': 'Vermont',
    'VA': 'Virginia',
    'WA': 'Washington',
    'WV': 'West Virginia',
    'WI': 'Wisconsin',
    'WY': 'Wyoming'}

   if(choosenPol){
    return (
        
        <div>
            {choosenPol.url&&<a href = {choosenPol.url}><p>{[choosenPol.short_title,choosenPol.first_name,choosenPol.middle_name,choosenPol.last_name].reduce((acc,i)=>{if(i){return acc+' '+i} else{return acc}})}</p></a>}
            {!choosenPol.url&&<p>{[choosenPol.short_title,choosenPol.first_name,choosenPol.middle_name,choosenPol.last_name].reduce((acc,i)=>{if(i){return acc+' '+i} else{return acc}})}</p>}
            {choosenPol.in_office&&<p>Age : {getAge(choosenPol.date_of_birth)}</p>}
            <p>Date of Birth:  {new Date(choosenPol.date_of_birth).toLocaleDateString("en-US")}</p>
            <p>Gender: {choosenPol.gender}</p>
            <p>Party: {choosenPol.party.replace('R','Republican').replace('D','Democrat')}</p>
            <p>Highest Seniority: {choosenPol.seniority}</p>
            <p>State: {stateObj[choosenPol.state]}, {choosenPol.state}</p>
            {pol[0]['roles'].map((i)=>{
                return (<p>{i['title']}: {i['start_date']}-{i['end_date']}</p>
                )}
            )}
            {choosenPol.phone&&<p>Phone: {choosenPol.phone}</p>}
            <div id='logos'>
                {choosenPol.facebook_account&&<a href= {'https://www.facebook.com/'+ choosenPol.facebook_account}><img src='https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg' style={{height: '3vh'}}/></a>}
            
                {choosenPol.twitter_account&&<a href= {'https://twitter.com/'+ choosenPol.twitter_account}><img src='https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg' style={{height: '3vh'}}/></a>}

                {choosenPol.youtube_account&&<a href= {'https://www.youtube.com/user/'+ choosenPol.youtube_account}><img src='https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg' style={{height: '3vh'}}/></a>}

                {choosenPol.contact_form&&<a href= {choosenPol.contact_form}><img src='https://upload.wikimedia.org/wikipedia/commons/5/5c/Email_Logo_PNG.png' style={{height: '3vh'}}/></a>}
            </div>
            <Comment key={choosenPol._id} polId={choosenPol._id} comments={comments} setComment={setComment} />
        </div>
       
    )}
}

export default PoliticianDetails;
