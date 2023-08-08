import { useContext, useEffect } from "react"
import { PoliticianContext } from "../context/politicians.context"
import { Link } from "react-router-dom"

import PoliticianPreview from "../components/PoliticianPreview"


const AllPoliticians = () => {

    const { pol, getPol } = useContext(PoliticianContext)

    useEffect(() => {

        if (!pol.length) {
            getPol()
        }

    }, [])

  return (
    <div id="all-pol"> 
        <h1>All Politicians</h1>
        {
            pol.map((p) => {
                return (
                    
                    <PoliticianPreview key={p._id} pol={p} />

                )
            })
        }
    </div>
  )
}

export default AllPoliticians