import { Bell, SearchIcon } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.searchInput}>
        <SearchIcon />
        <input type="text" placeholder="Search transaction..." />
      </div>
      <div className={styles.notification}>
        <Bell />
      </div>
    </>
  );
}
