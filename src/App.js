import React from 'react';
import './App.css';
import ChangeColor from './ChangeColor';
import Counter from './Counter';
import ChangeHeaderTest from './ChangeHeaderText';



function App() {

  return (
    <div>
      <ChangeColor text='to jest pierwszy nagłówek' color='red' />
      <ChangeColor text='to jest drugi nagłówek' color='blue' />
      <ChangeColor text='to jest trzeci nagłówek' color='green' />
      <ChangeHeaderTest button='Change Text'/>
      <Counter initValue={0} />
      <Counter initValue={108} />

    </div>

  );
}
export default App;
