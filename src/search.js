import React, { useState } from "react";
function SearchBar() {
    const [searchValue, setSearchValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleSearch = async () => {
        const url = `https://www.google.com/search?q=${encodeURIComponent(searchValue)}`;
        window.open(url, '_blank');
      };
  
    const handleInputChange = async (e) => {
      const { value } = e.target;
      setSearchValue(value);
      if (value.trim().indexOf(' ') !== -1) {
        let sen=e.target.value;
        let index=sen.lastIndexOf(" ");
        sen=sen.substring(0,index);
        const words = value.trim().split(' ');
        const lastWord = words[words.length - 1];
        const response = await fetch(`http://localhost:8084/suggest/getword/${lastWord}`);
        const data = await response.json();
        const filtered = data.map(item =>sen+" "+item.words.toLowerCase());
        setSuggestions(filtered.slice(0,10));
      } else {
          const { value } = e.target;
          let sen=searchValue;
          sen=searchValue.substring(0,searchValue.lastIndexOf(" "))
          console.log(sen)
          setSearchValue(value);
          const words = value.split(' ');
          const lastWord = words[words.length - 1];
          const response = await fetch(`http://localhost:8084/suggest/getword/${lastWord}`);
          const data = await response.json();
            const filtered = data.map(item =>item.words.toLowerCase());
            setSuggestions(filtered.slice(0,10));
      }
    };
  
  
    const handleSuggestionClick = (suggestion) => {

      setSearchValue((prevSearchValue) => {
        if(suggestion.lastIndexOf(' ') !== -1){
            suggestion=suggestion.substring(suggestion.lastIndexOf(" ")+1);
        const words = prevSearchValue.split(' ');
        words.pop(); 
        words.push(suggestion); 
        return words.join(' ');}
        else{
            const words = prevSearchValue.split(' ');
            words.pop(); 
            words.push(suggestion); 
            return words.join(' '); 
        }
      });
      setSuggestions([]);
    };
  
    return (
      <div>
        <input
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          style={{"marginTop": "100px","marginLeft":"300px","width":"500px"}}
          placeholder="Search..."
        />
        <button onClick={handleSearch}  style={{"marginLeft":"10px"}}>Search</button>
        {suggestions.length > 0 && (
          <ul style={{"list-style-type": "none","marginLeft":"300px","width":"500px"}}>
            {suggestions.map((suggestion) => (
              <li key={suggestion} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  
  export default SearchBar;
  