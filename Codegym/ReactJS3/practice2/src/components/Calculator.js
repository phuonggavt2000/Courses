import { useState } from "react";

function Calculator() {
    const [selectNumber, setSelectNumber] = useState(0);
    const [number, setNumber] = useState(0);
    const [result, setResult] = useState(0);

    const handleMult = () => {
        const result = number * selectNumber;
        setResult(result);
        setNumber(0);
        setSelectNumber(0);
    };

    return (
        <div>
            <h1>Calculator</h1>
            <input
                type="number"
                value={selectNumber}
                onChange={(e) => {
                    setSelectNumber(e.target.value);
                }}
            ></input>
            <br></br>
            <input
                value={number}
                onChange={(e) => {
                    setNumber(e.target.value);
                }}
            ></input>
            <br></br>
            <h3>
                Results: <span>{result}</span>
            </h3>
            <button onClick={handleMult}>X</button>
        </div>
    );
}

export default Calculator;
