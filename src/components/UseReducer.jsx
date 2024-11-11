import { useReducer } from "react";
import { useState } from "react";

export default function UseReducer(){
    const [count,setCount]=useState(0);
    const [state,dispatcher]=useReducer(reducer,0);
    function reducer(state,action){
        if(action.type=="increment"){
            return state+action.payload;
        }
        if(action.type=="decrement"){
            return state-action.payload;
        }
    }

    // how the useReduser works on the object form
    const [state2,dispatcher2]=useReducer(reducer2,{count2:0})
    function reducer2(state2,action2){
        if(action2.type=="increment"){
            return {...state2, count2: state2.count2 + action2.payload}
        }
        if(action2.type=="decrement"){
            return {...state2, count2: state2.count2 - action2.payload}
        }
    }

    // how the useReduser works on the object form
    const [state3,dispatcher3]=useReducer(reducer3,{count3:0,incrementedBy:1})
    function reducer3(state3,action3){
        if(action3.type=="increment"){
            return {...state3, count3: state3.count3 + state3.incrementedBy}
        }
        if(action3.type=="decrement"){
            return {...state3, count3: state3.count3 - state3.incrementedBy}
        }
        if(action3.type=="setIncrement"){
            return {...state3, incrementedBy: action3.payload}
        }
    }
    return(
        <div> 
            <h1>useState v/s useReducer</h1>
            <div className="for_useState">
                <h3>The Count for useState: {count}</h3>
                <button onClick={()=>setCount(count+1)}>Increse</button> 
                <button onClick={()=>setCount(count-1)}>Decrese</button>
            </div>

            <div className="for_useReducer">
            <h3>The Count for useReducer: {state}</h3>
                <button onClick={()=>dispatcher({type:"increment",payload:2})}>Increse</button> 
                <button onClick={()=>dispatcher({type:"decrement",payload:1})}>Decrese</button>
            </div>

            <div>
                <h3>The Count for object form useReducer: {state2.count2}</h3>
                <button onClick={()=>dispatcher2({type:"increment",payload:3})}>increase</button>
                <button onClick={()=>dispatcher2({type:"decrement",payload:1})}>decrease</button>
            </div>

            <div>
                <h3>The Count for object form useReducer with input: {state3.count3}</h3>
                <input type="text" name="" value={state3.incrementedBy} id="" onChange={(e)=>dispatcher3({type:"setIncrement",payload: Number(e.target.value)})} />
                <button onClick={()=>dispatcher3({type:"increment",payload:3})}>increase</button>
                <button onClick={()=>dispatcher3({type:"decrement",payload:1})}>decrease</button>
            </div>
        </div>
    );
}