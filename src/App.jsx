import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import './App.scss';
import { useState, useEffect } from 'react';

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [beerArray, setBeerArray] = useState([]);
  const [URLaddition, setURLaddition] = useState("");

  const checkOne = (event) => {
    const isCheckBoxOne = event.target.checked;
    isCheckBoxOne ? setURLaddition("abv_gt=6") : setURLaddition("");
  }

  const checkTwo = (event) => {
    const isCheckBoxTwo = event.target.checked;
    isCheckBoxTwo ? setURLaddition("brewed_before=01-2010") : setURLaddition("");
  }

  const checkThree = (event) => {
    const isCheckBoxThree = event.target.checked;
    console.log(isCheckBoxThree);

    if (isCheckBoxThree) {
      const filteredByBeerPh = beerArray.filter(beer => {
        const acidicBeer = (beer.ph < 4)
        setURLaddition(beer.ph)
        return acidicBeer;
      })

      return filteredByBeerPh;
    } 
  }

  useEffect(() => {
    const URL = `https://api.punkapi.com/v2/beers?${URLaddition}`;
    fetch(URL)
    .then(response => {
      return response.json();
    })
    .then(beerObject => {
      setBeerArray(beerObject);
      console.log(beerObject)
    })
  }, [URLaddition])

  const handleInput = (event) => {
    const searchInput = event.target.value.toLowerCase();
    setSearchTerm(searchInput);
  }

  const filteredBeerCards = beerArray.filter(beer => {
    const beerNameLower = beer.name.toLowerCase();

    return beerNameLower.includes(searchTerm);
  })

  return <div className="app">
    <Navbar searchTerm={searchTerm} handleInput={handleInput} checkOne={checkOne} checkTwo={checkTwo} checkThree={checkThree}/>
    <Main beerArray={filteredBeerCards}/>
  </div>
}

export default App;
