import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import './App.scss';
import { useState, useEffect } from 'react';

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [beerArray, setBeerArray] = useState([]);
  const [URLparam, setURLparam] = useState("");
  const [unfilteredBeerObj, setUnfilteredBeerObj] = useState("");

  const checkOne = (event) => {
    const isCheckBoxOne = event.target.checked;

    if (isCheckBoxOne) {
      if (URLparam === "") {
        setURLparam("abv_gt=6")
      } else if (URLparam === "brewed_before=01-2010") {
        setURLparam("brewed_before=01-2010&abv_gt=6")
      };
    } else {
      if (URLparam === "brewed_before=01-2010&abv_gt=6") {
        setURLparam("brewed_before=01-2010")
      } else if (URLparam === "abv_gt=6") {
        setURLparam("")
      };
    };
  };

  const checkTwo = (event) => {
    const isCheckBoxTwo = event.target.checked;

    if (isCheckBoxTwo) {
      if (URLparam === "") {
        setURLparam("brewed_before=01-2010")
      } else if (URLparam === "abv_gt=6") {
        setURLparam("abv_gt=6&brewed_before=01-2010")
      };
    } else {
      if (URLparam === "abv_gt=6&brewed_before=01-2010") {
        setURLparam("abv_gt=6")
      } else if (URLparam === "brewed_before=01-2010") {
        setURLparam("")
      };
    };
  };

  const checkThree = (event) => {
    const isCheckBoxThree = event.target.checked;
    const acidicBeer = beerArray.filter(beer => {return beer.ph < 4 && beer.ph !== null})

    isCheckBoxThree ? setBeerArray(acidicBeer) : setBeerArray(unfilteredBeerObj);
    
  }; 

  useEffect(() => {
    const URL = `https://api.punkapi.com/v2/beers?per_page=28&${URLparam}`;
    fetch(URL)
    .then(response => {
      return response.json();
    })
    .then(beerObject => {
      setBeerArray(beerObject);
      setUnfilteredBeerObj(beerObject);
    })
  }, [URLparam]);

  const handleInput = (event) => {
    const searchInput = event.target.value.toLowerCase();
    setSearchTerm(searchInput);
  };

  const filteredBeerCards = beerArray.filter(beer => {
    const beerNameLower = beer.name.toLowerCase();

    return beerNameLower.includes(searchTerm);
  }); 

  return <div className="app">
    <Navbar searchTerm={searchTerm} handleInput={handleInput} checkOne={checkOne} checkTwo={checkTwo} checkThree={checkThree}/>
    <Main beerArray={filteredBeerCards}/>
  </div>
}

export default App;
