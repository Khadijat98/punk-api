import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import './App.scss';
import { useState, useEffect } from 'react';

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [beerArray, setBeerArray] = useState([]);

  useEffect(() => {
    const URL = `https://api.punkapi.com/v2/beers`;
    fetch(URL)
    .then(response => {
      return response.json();
    })
    .then(beerObject => {
      setBeerArray(beerObject);
    })
  }, [])

  const handleInput = (event) => {
    const searchInput = event.target.value.toLowerCase();
    setSearchTerm(searchInput);
  }

  const filteredBeerCards = beerArray.filter(beer => {
    const beerNameLower = beer.name.toLowerCase();

    return beerNameLower.includes(searchTerm);
  })

  return <div className="app">
    <Navbar searchTerm={searchTerm} handleInput={handleInput}/>
    <Main beerArray={filteredBeerCards}/>
  </div>
}

export default App;
