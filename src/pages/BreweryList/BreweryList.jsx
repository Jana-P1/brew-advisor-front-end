import { useState, useEffect } from 'react';
import * as breweryService from '../../services/breweryService'
import Brewery from "../../components/Brewery/Brewery";


const BreweryList = () => {
  const [breweries, setBreweries] = useState([])

  useEffect(() => {
    breweryService.getAll()
      .then(allBreweries => {
        setBreweries(allBreweries.businesses)
      })
  }, [])

  return (
    <>
      <h1>I am the BreweryList</h1>
      <div>
        {breweries.map(brewery => (
          <Brewery key={brewery.id} brewery={brewery} />
        ))}
      </div>
    </>
  );
}
 
export default BreweryList;