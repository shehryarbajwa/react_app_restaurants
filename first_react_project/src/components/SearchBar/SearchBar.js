import React from 'react'
import './SearchBar.css'

// In the yelp API, best_match returns the best match, ratings the ratings of the restaurant
// And the review_count the most reviewed
// These are available here : https://www.yelp.com/developers/documentation/v3/business_search
const sortByOptions = {
    'Best Match' : 'best_match',
    'Highest Rated' : 'rating',
    'Most Reviewed' : 'review_count'
}

// To iterate through the sortByOptions, we can use Object.keys. Its a Javascript function to 
// To iterate over the sortByOptions keys
// Explain what this function is doing
// Task for tomorrow
// We iterate over the keys of sortByOptions and then use map with a callBack function sortByOptions
// This map function iterates over the function one by one
// Instead of us calling the method three times, the map function runs once for each entry in our original array
// Then it returns the value one by One
class SearchBar extends React.Component {
    renderSortByOptions(){
        return Object.keys(sortByOptions).map(sortByOption => { 
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue}> {sortByOption} </li>
        });
        }
    
    render(){
        return(
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
             <ul>
                {this.renderSortByOptions()}
            </ul>
            </div>
                <div className="SearchBar-fields">
                <input placeholder="Search Businesses" />
                <input placeholder="Where?" />
            </div>
            <div className="SearchBar-submit">
                <a>Let's Go</a>
            </div>
            </div>
        )
    }
}

export default SearchBar;