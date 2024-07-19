// 3- alterando contexto
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";


function ChargeCounter() {
    const {counter, setCounter} = useContext(CounterContext)
  return (
    <div>
        <button onClick={() => setCounter(counter + 1)} >
            Add value to counter
        </button>
    </div>
  )
}

export default ChargeCounter