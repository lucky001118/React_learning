import { Link, Outlet } from "react-router-dom";

export default function Homepage(){
    return(
        <div>
            <ul>
                <li>
                <Link to="settings" >Settings</Link>
                </li>
                <li>
                <Link to="profile" >Profile</Link>
                </li>
            </ul>
            This is a Homepage...
            <Outlet/>
        </div>
    );
}