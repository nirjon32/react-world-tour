import './Country.css';
import { useState } from 'react';

const Country = ({ country, handleSelectedCountries, handleRemoveCountry }) => {
   
   const [selected, setSelected] = useState(false);
   const [showDetails, setShowDetails] = useState(false); // State for toggling additional info

   const handleSelectedCountry = () => {
       setSelected(!selected);
       if (!selected) {
           handleSelectedCountries(country);
       } else {
           handleRemoveCountry(country);
       }
   };

   // Toggle the additional info display
   const handleToggleDetails = () => {
       setShowDetails(!showDetails);
   };

   return (
       <div className='country'>
           <h3>{country.name.common}</h3>
           <div className='country-info'>

             <img className='flag' src={country.flags.png} alt='flag' />

             <div>

             <p><strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
             <p><strong>Region:</strong> {country.region}</p>
             <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
             </div>

           </div>

           {/* Arrow for toggle */}
           <div className="toggle-arrow" onClick={handleToggleDetails} style={{ cursor: 'pointer' }}>
               {showDetails ? '▲ Hide Details' : '▼ Show Details'}
           </div>

           {/* Conditionally render additional information */}
           {showDetails && (
               <div className='additional-info'>
                   <p><strong>Subregion:</strong> {country.subregion || 'N/A'}</p>
                   <p><strong>Area:</strong> {country.area.toLocaleString()} km²</p>
                   <p><strong>Timezone:</strong> {country.timezones ? country.timezones[0] : 'N/A'}</p>
                   <p><strong>Official Name:</strong> {country.name.official}</p>
               </div>
           )}

          
           <button className='button-85' onClick={handleSelectedCountry}>
               {selected ? 'Selected' : 'Select'}
           </button>
       </div>
   );
};

export default Country;
