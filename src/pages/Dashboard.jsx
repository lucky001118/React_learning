import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard(){
    const [userName,setUsername] = useState("");
    // this is useNavigate Hooke
    const navigate = useNavigate();
    function handleClick(){
        // this navigate will forword use to /profile page as we click the button..
            navigate("/profile",{state:{userName}})
    }
    return(
        <div>
            This is a Dashboard..
            <input type="text" value={userName} onChange={(e)=>setUsername(e.target.value)} />
            {/* learning about the useNavigate Hook in react */}
            <button onClick={handleClick}>Go to profile</button>
        </div>
    );
}