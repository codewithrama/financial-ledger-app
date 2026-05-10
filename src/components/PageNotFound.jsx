import { useNavigate } from "react-router-dom"
import styles from "../components/PageNotFound.module.css";

export default function PageNotFound(){
const Navigate = useNavigate();
return(
    <div className={styles.container}>
        <h1 className={styles.title}>uh oh ! i think you missed the path</h1>
        <button className={styles.button} onClick={()=> Navigate('/')}>Login / Signup now </button>
        </div>
)

}

