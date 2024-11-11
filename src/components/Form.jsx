import { useState } from "react";

export default function Form(){
  //here we are handling the multiple fields data
  const [yourName,setYourName] = useState({firstName:"",lastName:""})
  function submitInfo(e){
    e.preventDefault();
    console.log(yourName)
    console.log(yourName.firstName," ",yourName.lastName)
  }
    const [name,setName]=useState("Lucky");

    // no need to make this function and handle the events
    function handleChange(e){
        // console.log(e.target.value);
        setName(e.target.value);
        console.log(name)
    }
    return(
        <div>
           <form action="">
             {/* This is by using the function but it is not the good practice to do that, let's done by another method */}
          {/* <input onChange={function demo(e){
            return handleChange(e);
          }} type="text" 
          value={name} /> */}
          
          {/* This is also not the prefered way to do that */}
          {/* <input onChange={(e)=>handleChange(e)} type="text" value={name}/> */}

          {/* Let's see the another method to handle the user form over here */}
          <input onChange={(e)=>setName(e.target.value)} type="text" value={name}/>
          <br /> <p>This form fiend is: {name}</p>
          <hr />
          <h3>The multiple inputes fields handling..</h3>
          <p>First Name: {yourName.firstName} and Last Name: {yourName.lastName}</p>
          <input type="text" value={yourName.firstName} onChange={(e)=>setYourName({...yourName,firstName:e.target.value})} />
          <input type="text" value={yourName.lastName} onChange={(e)=>setYourName({...yourName,lastName:e.target.value})} />
          <button onClick={(e)=>submitInfo(e)}>Submit!</button>
           </form>
        </div>
    );
}