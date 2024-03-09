import React, {useState} from 'react';
import './App.css';
import {Table} from "./Table";
import {Button} from "./Button";

function App() {
    const [number, setNumber] = useState(0)
    const [disable, setDisable] = useState(false)
    const numberChange = () => {
        let numberC = number + 1
        setNumber(numberC)
        if (numberC>= 5) {
            setDisable(true)
        }
    }
    const numberReset = () => {
        setDisable(false)
        setNumber(0)
    }

    return (
        <div>
            <Table number={number}/>
            <Button name={"inc"}
                    callBack={numberChange}
                    disable={disable}
            />
            <Button name={"reset"}
                    callBack={numberReset}
                    disable={!disable}
            />
        </div>
    );
}

export default App;
