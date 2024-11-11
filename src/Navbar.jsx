import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
export default function Navbar(){
    return(
        <div className={styles.navbar}>
            <button className={styles.navButtons}><Link to="/">Home </Link></button>
            <button className={styles.navButtons}><Link to="/dashboard">Dashboard</Link></button>
            <button className={styles.navButtons}><Link to="/contains">Contain</Link></button>
        </div>
    );
}