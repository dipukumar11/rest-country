import { useState } from 'react';
import './Country.css'

const Country = ({country, visitClilkHandel}) => {
    // console.log(visitClilkHandel)
    const {name,flags,region}=country;
    // console.log(country)
    const [visited, setVisited]=useState(false)

const VisitClickHandel =()=>{
    setVisited(!visited)
}





    return (
        <div className={visited?"bg":'box'}>
            <h1>Name:{name.common} </h1>
            <img src={flags.png} alt="" />
            <h2>Offical Name: {name.official}</h2>
            <p>Relegion: {region}</p>
            <button onClick={VisitClickHandel} className='btn'>{visited?"Visited":"Going..."}</button>
             <div className='visit'>
             {
                visited?"This Is Alrady Visit":"I want To Visit"
              }
             </div>
             <button className='btn' onClick={()=>visitClilkHandel(country)}>VisitCountry</button>
            
        </div>
    );
};

export default Country;