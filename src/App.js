import React from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
 

const business = {
  imageSrc: 'https://images.pexels.com/photos/2092906/pexels-photo-2092906.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  name: 'Nicolo Pastaria',
  address: '1030 Bohemian Drive',
  city: 'Lucia',
  state: 'ON',
  zipCode: 'R5Y3E4',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
 }

 const businesses = [
   business,
   business,
   business,
   business,
   business,
   business
 ];


class App extends React.Component {

  searchYelp(term,location,sortBy){
    console.log(`We found ${term} at ${location} in the follow ${sortBy}`);
  }
  render() {
  return (
    <div className="App">
      <h1>Scrumptious</h1>
      <SearchBar searchYelp={this.searchYelp} />
      <BusinessList businesses={businesses} />
    </div>
  );
  }
}

export default App;
