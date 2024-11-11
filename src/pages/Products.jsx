import { useParams } from "react-router-dom";

export default function Products(){
    const {id} = useParams();
    return(
        <div>
            <h1>The Product is this and the prodect is: {id}</h1> 
        </div>
    );
}