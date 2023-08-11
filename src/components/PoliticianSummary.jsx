import { Link } from "react-router-dom";

const PoliticianSummary = ({pol}) => {
    const newName= [pol.short_title,pol.first_name,pol.middle_name,pol.last_name].reduce((acc,i)=>{if(i){return acc+' '+i} else{return acc}})
;
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
    return (
        <div>
        <Link to={`/politicians/details/${pol._id}`}>
          
            <h2>{`${newName}`}</h2>
        
      </Link>
        <div style={{display:'flex',justifyContent:'space-between'}}>
        
            <p>{`${pol.party.replace('R','Republican').replace('D','Democrat').replace('I','Independent')}`}</p>
            <p>Is {!pol.in_office&&`not`} in office</p>
            <p>{`${stateObj[pol.state]}`}</p>
        </div>
        </div>
    )
}
export default PoliticianSummary;