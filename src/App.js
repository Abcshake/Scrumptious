import React, {useEffect,useState} from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './util/Yelp';

function App() {
  const [businesses, setBusinesses] = useState([])

  const searchYelp = (term,location,sortBy) => {
    Yelp.search(term,location,sortBy).then(businesses=> {
      setBusinesses({businesses: businesses})
    });
  };
  console.log(businesses);
  useEffect(() => {
    searchYelp();
  }, [])

  return (
    <div className="App">
      <h1>Scrumptious</h1>
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
