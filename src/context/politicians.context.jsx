import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

import { get } from "../services/authService";

const PoliticianContext = createContext()

const PoliticianProvider = ({ children }) => {

    const [pol, setPol] = useState([])

    const getPol = () => {
        
        get('/politicians/all-politicians')
            .then((response) => {
                //console.log("Politicians", response.data)
                setPol(response.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }

    useEffect(()=>{
        if (!pol.length) {
            getPol()
        }
    },[])

    return (
        <PoliticianContext.Provider value={{ pol, getPol, setPol}}>
            {children}
        </PoliticianContext.Provider>
    )
}

export { PoliticianContext, PoliticianProvider }