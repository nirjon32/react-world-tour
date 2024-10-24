import {useState,useEffect} from "react"
import Country from "../Country/country";
const Countries = () => {
    const [countries,setCountries]=useState([])
    const [selectedCountries,setSelectedCountries]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
       .then(response=>response.json()
       .then(data=>setCountries(data)))
    },[])
    const handleSelectedCountries = country=> {
        const newSelectedCountries= [...selectedCountries,country]
        setSelectedCountries(newSelectedCountries);
    }
    const handleRemoveCountry = country =>{
        const selected = selectedCountries.filter(item => item !== country);
        setSelectedCountries(selected);
  }
    console.log(countries);
    return (
        <div>
           

            

                
            <div className="country-flag">
             {
                selectedCountries.map(selectedcountry=> <h3 
                    key={selectedcountry.cca3} 
                    >{<img className='flag1' src={selectedcountry.flags.png} alt='flag' />}</h3>)
             }

            </div>
             <div className="countries-container">

             {  
                countries.map(country=> <Country
                      key={country.cca3} 
                      country={country}
                      handleSelectedCountries={handleSelectedCountries}
                      handleRemoveCountry={handleRemoveCountry}>
                      
                      </Country>)
                
             }
             </div>

            
        </div>
    );
};

export default Countries;