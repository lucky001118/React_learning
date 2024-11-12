import { useLocation } from "react-router-dom";

export default function Profilepage(){
    const location = useLocation();
    const {userName} = location.state || {};
    return(
        <div>
            This is Profile page for {userName}
        </div>
    );
}