import { useReducer, useState } from "react";

export default function Bank(){

    const [amount,setAmount]=useState(0);
    const [state,dispatcher]=useReducer(reducer,{balance:0});
    function reducer(state,action){
        if(action.type=="add"){
            return {...state,balance:state.balance+action.payload}
        }
        if(action.type=="withdraw"){
            return {...state,balance:state.balance-action.payload}
        }
    }
    return(
        <div>
            <h2>The bank account functionality using the useReducer hook</h2>
            <h3>Your current balance is: {state.balance} rupees</h3>
            <input type="text" name="" id="" value={amount} onChange={(e)=>setAmount(e.target.value)} />
            <button onClick={()=>dispatcher({type:"add",payload:Number(amount)})}>Diposite</button>
            <button onClick={()=>dispatcher({type:"withdraw",payload:Number(amount)})}>withdraw</button>
        </div>
    );
}