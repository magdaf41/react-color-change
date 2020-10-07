import React from 'react';
import './App.css';
import Header from './Header'

function App() {
  return (
    <div>
<Header text='to jest pierwszy nagłówek' color='red' />

{/* <button onClick={Header.changeValue}> red </button> */}
{/* <button> green </button>
<button> blue </button> */}
<Header text='to jest drugi nagłówek' color='blue'/>
<Header text='to jest trzeci nagłówek' color='green'/>
    </div>

  );
  }
export default App;
