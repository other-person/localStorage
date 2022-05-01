import React, {useEffect, useState} from 'react';
import './App2.css';

// При помощи хука UseEffect мы можем выводить сохранённые данные сразу же при загрузке страницы, а не при помощи функции GET

const App2 = () => {

    const [value, setValue] = useState<number>(0);

    useEffect(() => {
        let valueAsString = localStorage.getItem("counterValue")
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString);
            setValue(newValue)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("counterValue", JSON.stringify(value))
    }, [value]);

    const incHandler = () => {
        setValue(value + 1)
    };

    return (
        <div className="App2">
            <h1> {value} </h1>
            <button onClick={incHandler}> Inc</button>
        </div>
    );
};

export default App2;