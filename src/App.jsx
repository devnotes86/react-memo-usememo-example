import {useMemo, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import DateTime1 from "./components/DateTime1.jsx";
import './App.css'
import DateTimeMemo from "./components/DateTimeMemo.jsx";

function App() {
    const [count, setCount] = useState(0)

    const [number1, setnumber1] = useState(0);
    const [number2, setnumber2] = useState(0);
    const add2 = (n1, n2) => {
        const result = +n1 + +n2;
        console.log("addWithUseMemo(n1, n2) executed, result: " + result);
        return result;
    };

    const addWithUseMemo = useMemo(() => {
        return add2(number1, number2)
    }, [number1, number2]);

    const add = () =>  {
             const result = +number1 + +number2;
             console.log("add(number1, number2) executed, result: " + result);
             return result;
    };

  return (
    <>
      <h1>memo Example</h1>
      <DateTime1></DateTime1><br />
      <DateTimeMemo></DateTimeMemo>

        <div className="card">

            <button onClick={() => setCount((count) => count + 1)}>
                click to re-render parent component
            </button>

        </div>

      <h1>useMemo Example</h1>

        <p>
            number 1:  <input    value={number1}  onChange={event => {
                setnumber1(event.target.value);
            }}   /> +
            number 2:  <input   value={number2}  onChange={event => {
            setnumber2(event.target.value);
        }}   /><br />

            Result: <b>{    add() }</b><br />
            Result (useMemo): <b>{addWithUseMemo}</b>
        </p>
    </>
  )
}

export default App
