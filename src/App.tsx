import React, {useState} from 'react';
import './App.css';
import {Table} from "./Table";
import {Button} from "./Button";

function App() {
    const [number, setNumber] = useState(0)
    const [disable, setDisable] = useState(false)
    const numberChange = () => {
        let newNumber = number + 1
        setNumber(newNumber)
        if (newNumber >= 5) {
            setDisable(true)
        }
    }
    const numberReset = () => {
        setDisable(false)
        setNumber(0)
    }

    return (
        <div className={"body"}>
            <div className="counter">
                <div className={number<5 ? "screen" : "screenDisable"}><Table number={number}/></div>
                <div className="buttons">
                    <div className="buttonINC">
                        <Button
                            name={"inc"}
                            callBack={numberChange}
                            disable={disable}
                        />
                    </div>
                    <div className="buttonRESET">
                        <Button
                            name={"reset"}
                            callBack={numberReset}
                            disable={!disable}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
