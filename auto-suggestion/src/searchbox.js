import React, { useState } from "react";

function SearchBoxDropdown() {
  const [inputValue, setInputValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([]);

  const handleInputChange = (e) => {

    const oldvalue=inputValue;
    const value = e.target.value;
    let str;
    let filtered;
    let trimmedStr;
    setInputValue(value);
    const lastSpaceIndex = inputValue.lastIndexOf(" ");
    console.log(lastSpaceIndex);
    if(lastSpaceIndex != -1){
    str=inputValue.substring(lastSpaceIndex+1);
    trimmedStr = inputValue.substring(0,lastSpaceIndex)
    console.log(str);
    fetch(`http://localhost:8084/suggest/getword/${str}`)
    
    .then(response => response.json())
    .then(data => {
        setData(data)
    })
    .catch(error => {
      // handle the error
    });}
    else{
        str=value;
        console.log(str);
        fetch(`http://localhost:8084/suggest/getword/${str}`)
        
        .then(response => response.json())
        .then(data => {
            setData(data)
        })
        .catch(error => {
          // handle the error
        });
    }

    console.log({data});
    if(lastSpaceIndex != -1){
    filtered = data.map(item =>trimmedStr+" "+item.words.toLowerCase());}
    else
    {
    filtered = data.map(item =>item.words.toLowerCase());
    }

    setShowDropdown(value !== "" && filtered.length > 0);
    setFilteredData(filtered);


    
  };

  const handleItemClick = (item) => {
   
const lastSpaceIndex = inputValue.lastIndexOf(" ");
const trimmedStr = inputValue.substring(0,lastSpaceIndex)
var value=trimmedStr+" "+item+" ";
    setInputValue(value);

  };

  return (
    <div style={{"textAlign":"center"}}>
      <input
        type="text"
        placeholder="Search..."
        value={inputValue}
        onChange={handleInputChange}
      />
      {showDropdown && (
        <ul style={{"list-style-type": "none"}}>
          {filteredData.map((item) => (
            <li key={item} onClick={() => handleItemClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBoxDropdown;
