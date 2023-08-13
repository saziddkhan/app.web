import './App.css';
import React  from 'react';
import { useState, useEffect } from 'react'


  
function App() {

  const [count, setCount] = useState([])
  const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		'X-RapidAPI-Key': '7e1082e15cmsh701a1750c023b6bp1f367ajsn55d9b8feacf6',
		'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
	}
};


  const fetchData = async () => {
    const response = await fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', options);
    const data = await response.json();
    console.log(data);
    setCount(data);
  }

  useEffect(() => {
    fetchData();
  }
  , [])
   


  return (
    
    <div>
      <h1>{count.value}</h1>
      <button onClick={fetchData} className="btn">Click me</button>
    </div>
  );
}


export default App;
