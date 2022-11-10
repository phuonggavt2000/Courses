import { useState } from "react";

function Todo() {
    const [value, setValue] = useState("");
    const [valuelist, setValueList] = useState([]);

    const handleClick = () => {
        if (!valuelist.includes(value) && value.trim()) {
            setValueList((prev) => {
                return [...prev, value];
            });
        }

        setValue("");
    };
    return (
        <div>
            <h1>Todo List</h1>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
            ></input>
            <button onClick={handleClick}>ADD</button>
            <ul>
                {valuelist.map((value, index) => {
                    return <li key={index}>{value}</li>;
                })}
            </ul>
        </div>
    );
}

export default Todo;
