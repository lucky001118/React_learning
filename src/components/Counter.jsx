import { useState } from "react";

export default function Counter(){
    const [count,setCount] = useState(0);
    const [increment,setIncrement] = useState(1)
    function handleClick(){
        setCount(count+increment);
    }
    function decrement(){
        setCount(count-increment);
    }

    //for the increase increment
    function increaseIncrement(){
        setIncrement(increment+1)
    }
    function decreaseIncrement(){
        setIncrement(increment-1)
    }
    return(
        <div>
            <h4>This is the conter component: {count}</h4>
            <button onClick={handleClick}>Increment</button>
            <button onClick={decrement}>Decrement</button>

            <h2>This is the increase the increament by: {increment}</h2>
            <button onClick={increaseIncrement}>IncreaseBy</button>
            <button onClick={decreaseIncrement}>DecrementedBy</button>
        </div>
    );
}