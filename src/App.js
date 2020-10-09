import React from 'react';
import './App.css';
import ChangeColor from './ChangeColor';


function App() {

  return (
    <div>
      <ChangeColor text='to jest pierwszy nagłówek' color='red' />
      <ChangeColor text='to jest drugi nagłówek' color='blue' />
      <ChangeColor text='to jest trzeci nagłówek' color='green' />
    </div>

  );
}
export default App;
