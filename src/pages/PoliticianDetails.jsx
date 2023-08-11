import { useContext, useEffect, useState } from "react"
import {  useParams } from "react-router-dom"
import { PoliticianContext } from "../context/politicians.context"

import Comment from "../components/Comment"
import TimeLine from "../components/TimeLine"

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

    const objSalaries = {1947: 151695,
        1948: 151695,
        1949: 151695,
        1950: 151695,
        1951: 151695,
        1952: 151695,
        1953: 151695,
        1954: 151695,
        1955: 227599,
        1956: 227599,
        1957: 227599,
        1958: 227599,
        1959: 227599,
        1960: 227599,
        1961: 227599,
        1962: 227599,
        1963: 227599,
        1964: 227599,
        1965: 257962,
        1966: 257962,
        1967: 257962,
        1968: 257962,
        1969: 314045,
        1970: 314045,
        1971: 314045,
        1972: 314045,
        1973: 314045,
        1974: 314045,
        1975: 224600,
        1976: 224600,
        1977: 257124,
        1978: 257124,
        1979: 226490,
        1980: 226490,
        1981: 226490,
        1982: 195994,
        1983: 189904,
        1984: 189360,
        1985: 189214,
        1986: 189214,
        1987: 184613,
        1988: 184613,
        1989: 184613,
        1990: 200360,
        1991: 248886,
        1992: 250064,
        1993: 250612,
        1994: 250612,
        1995: 250612,
        1996: 250612,
        1997: 250612,
        1998: 227266,
        1999: 227266,
        2000: 222339,
        2001: 222054,
        2002: 225985,
        2003: 227880,
        2004: 226816,
        2005: 224907,
        2006: 222057,
        2007: 222057,
        2008: 213077,
        2009: 219774,
        2010: 219774,
        2011: 219774,
        2012: 219774,
        2013: 219774,
        2014: 219774,
        2015: 219774,
        2016: 219774,
        2017: 219774,
        2018: 219774,
        2019: 219774,
        2020: 182189,
        2021: 182189,
        2022: 182189}
    /*{choosenPol['roles'].map((i)=>{
                return (<p>{i['title']}: {i['start_date']}-{i['end_date']}</p>
                )}
            )} */
   
   if(choosenPol){
    return (
        
        <div>
            {choosenPol.url&&<a href = {choosenPol.url}><p>{[choosenPol.short_title,choosenPol.first_name,choosenPol.middle_name,choosenPol.last_name].reduce((acc,i)=>{if(i){return acc+' '+i} else{return acc}})}</p></a>}
            {!choosenPol.url&&<p>{[choosenPol.short_title,choosenPol.first_name,choosenPol.middle_name,choosenPol.last_name].reduce((acc,i)=>{if(i){return acc+' '+i} else{return acc}})}</p>}
            {choosenPol.in_office&&<p>Age : {getAge(choosenPol.date_of_birth)}</p>}
            <p>Date of Birth:  {new Date(choosenPol.date_of_birth).toLocaleDateString("en-US")}</p>
            <p>Gender: {choosenPol.gender}</p>
            <p>Party: {choosenPol.party.replace('R','Republican').replace('D','Democrat').replace('I','Independent').replace('P','Progressive')}</p>
            <p>Highest Seniority: {choosenPol.seniority}</p>
            <p>State: {stateObj[choosenPol.state]}, {choosenPol.state}</p>
            <p>Number of terms served: {choosenPol['roles'].length}</p>
            <p>Missed votes{choosenPol.missed_votes_pct}%</p>
            <p>Votes with party {choosenPol.votes_with_party_pct}%</p>
            <TimeLine choosenPol={choosenPol}/>
            
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
