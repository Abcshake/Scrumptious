import React, {useState} from 'react';
import './SearchBar.css';

const SearchBar = ({searchYelp}) => {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('best_match');


  const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
  };

  const getSortByClass = (sortByOption) => {
    return sortBy === sortByOption ? 'active' : '';
    };

    const handleSortByChange = (sortByOption) => {
      setSortBy(sortByOption);
    };
  
    const handleTermChange = (event) => {
      setTerm(event.target.value);
    };
  
    const handleLocationChange = (event) => {
      setLocation(event.target.value);
    };
  
    const handleSearch = (event) => {
      searchYelp(term, location, sortBy);
      event.preventDefault();
    };
  

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map(sortByOption => (
        <li 
          className={getSortByClass(sortByOptions[sortByOption])}
          key={sortByOptions[sortByOption]}
          onClick={() => handleSortByChange(sortByOptions[sortByOption])}>
          {sortByOption}
        </li>
      ));
  }

    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={handleTermChange} />
          <input placeholder="Where?" onChange={handleLocationChange}/>
        </div>
        <div className="SearchBar-submit">
          <a onClick={handleSearch}>Find</a>
        </div>
      </div>
    );
}

export default SearchBar;