import './App.css';
import { Val } from './test';
import React,{useEffect, useState} from 'react';


function App() {
//useState: 
  const [first, setfirst] = useState('redot')

  const a = () => {
    setfirst('albums')
  }

  const b = () => {
    setfirst('comments')
  }

// useEffect:
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${first}`)
      .then(response => response.json())
      .then(json => console.log(json))
  },[first])

  return (
    <>
    <Val/>
      <button onClick={a}>ADD</button>
      <br/>
      Result = {first}
      <br/>
      <button onClick={b}>SUB</button>
    </>
  );
}

export default App;
