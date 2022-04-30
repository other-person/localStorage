import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

    const [value, setValue] = useState<number>(0)

    const incHandler = () => {
        setValue(value + 1)
    }

    //Функция запоминания данных

    const setFromLocalStorageHandler = () => {
        // вводим local storage, выбираем получить и водим в скобках по типу ключ-значение.
        // значения должны быть только строковые, поэтому value мы преобразуем к строке при помощи toString или stringify
        localStorage.setItem("counterValue", JSON.stringify(value))
        localStorage.setItem("counterValue+1", JSON.stringify(value +1)) // прибавление на 1
    };

    //Функция получения данных

    const getFromLocalStorageHandler = () => {
        // кладём тот кей, который нужно получить. В нашем случае "counterValue"
        let valueAsString = localStorage.getItem("counterValue")
        // JSON.parse - строку парсит в объект или массив
        // Что бы всё работало нормально нужно сделать проверку на null условным оператором
        if(valueAsString){
        let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    };
    // функция очищения localStorage
    const clearFromLocalStorageHandler = () => {
    localStorage.clear()
        setValue(0)
    };
    // функция зачищения "counterValue+1"
    const removeItemFromLocalStorageHandler = () => {
        localStorage.removeItem("counterValue+1")
    };
//---------------------------------------------------------------------------------------------------------------
// Можно использовать sessionStorage, меняем localStorage на sessionStorage.
// sessionStorage пропадает после закрытия браузера.
// localStorage живёт пока мы его не удалим сами или не перезагрузим систему
//________________________________________________________________________________________________________________

    return (
        <div className="App">
            <h1> {value} </h1>
            <button onClick={incHandler}> Inc</button>
            <button onClick={setFromLocalStorageHandler}> setFromLocalStorage</button>
            <button onClick={getFromLocalStorageHandler}> getFromLocalStorage</button>
            <button onClick={clearFromLocalStorageHandler}> clearFromLocalStorage </button>
           <button onClick={removeItemFromLocalStorageHandler}>clearFromLocalStorage </button>


        </div>
    );
}

export default App;
