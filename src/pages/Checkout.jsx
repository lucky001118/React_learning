import { useContext } from "react";
import { userContext } from "../App";

export default function Checkout(){
    // stap 3) Consuming context, use the context that is passed by the other components
    const {user} = useContext(userContext);
    return(
        <div>
            <hr />
            <h1>Checkout Component: {user}</h1>
        </div>
    );
}