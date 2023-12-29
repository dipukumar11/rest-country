import { useEffect, useState } from "react";
import Country from "../Country/Country";


const Countrys = () => {
   const [countrys, setcountrys]=useState([])
   useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(Response=>Response.json())
    .then(data => setcountrys(data))
   },[])

const [visitCountry, setVisitCountry] =useState([])

const visitClilkHandel=(county)=>{
   const newVisitCountry = [...visitCountry, county]
   setVisitCountry(newVisitCountry)
}

    return (
        <div >
            <h1>Hellow Bangladesh: {countrys.length} </h1>

            <div>
                <h1>Country Name List:{visitCountry.length}</h1>
                <ul>
                    {
                        visitCountry.map(country=><li key={country.ccn3}>{country.name.common}</li>)
                    }
                    
                </ul>
            </div>
            <div className="country">
            {
                countrys.map(country =><Country country={country} 
                    visitClilkHandel={visitClilkHandel}
                    key={country.ccn3}
                    ></Country>)
            }
            </div>
            
        </div>
    );
};

export default Countrys;