import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

  const [value , setValue] = useState<number>(0)

  const incHandler = () => {
    setValue(value +1)
  }

  useEffect( () => {
    let valueAsString = localStorage.getItem("CounterValue")
    if (valueAsString) {
      let newValue = JSON.parse(valueAsString);
      setValue(newValue)
    }
  }, [] )

  useEffect( () => {
    localStorage.setItem("CounterValue", JSON.stringify(value))
  }, [value])


  // const clearFromLocalStorageHandler = () => {
  //   localStorage.clear()
  //   setValue(0)
  // }

  return (
    <div className="App">
      <h1> {value} </h1>
        <button onClick={incHandler}> Inc </button>
        {/*<button onClick={setFromLocalStorageHandler}> setFromLocalStorage </button>*/}
        {/*<button onClick={getFromLocalStorageHandler}> getFromLocalStorage </button>*/}
        {/*<button onClick={clearFromLocalStorageHandler}> clearFromLocalStorage </button>*/}


    </div>
  );
}

export default App;
