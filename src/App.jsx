import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import './App.scss';
import { useState, useEffect } from 'react';

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [beerArray, setBeerArray] = useState([]);
  const [URLparam, setURLparam] = useState("");
  const [unfilteredBeerObj, setUnfilteredBeerObj] = useState("");
  // const [highAcidityArray, setHighAcidityArray] = useState([]);
  // const [checkBoxThree, setCheckBoxThree] = useState(false);

  const checkHighABV = (event) => {
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

  const checkClassicRange = (event) => {
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

  const checkHighAcidity = (event) => {
    const isCheckBoxThree = event.target.checked;
    // setCheckBoxThree(!checkBoxThree);

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
      // const highAcidity = beerObject.filter = (beer) => {
      //   beerArray.filter(beer => {return beer.ph < 4 && beer.ph !== null})
      // }
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
    <Navbar searchTerm={searchTerm} handleInput={handleInput} checkOne={checkHighABV} checkTwo={checkClassicRange} checkThree={checkHighAcidity}/>
    <Main beerArray={filteredBeerCards}/>
  </div>
}

export default App;
