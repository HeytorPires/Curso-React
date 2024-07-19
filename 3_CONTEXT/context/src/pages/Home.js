import React from 'react';
// import { useContext } from 'react'
// import {CounterContext} from '../context/CounterContext'
import ChargeCounter from '../Components/ChargeCounter';

// 4 - refatorando com hook
import { useCounterContext } from '../hooks/useCounterContext';

// 5 - context Complexo
import { useTitleColorContext } from '../hooks/useTitleColorContext';

const Home = () => {
  //const {counter} = useContext(CounterContext)
  const { counter } = useCounterContext();

  // 5 - context mais complexo
  const { color, dispatch } = useTitleColorContext();
  
  // 6 - alterando state complexo
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  console.log("hehe", color);
  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <p>valor do contador: {counter}</p>
      {/* 3 - alterando valor contexto */}
      <ChargeCounter />
      {/* 6 - alterando contexto complexo */}
      <div>
        <button onClick={() => setTitleColor('RED')}>Vermelho</button>
        <button onClick={() => setTitleColor('BLUE')}>Azul</button>
      </div>
    </div>
  );
};

export default Home;
