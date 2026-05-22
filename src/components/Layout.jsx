import SideBar from "./SideBar";
import Header from "./Header";
import styles from "./Layout.module.css";
export default function Layout({ children }) {
  return (
    <div className={styles.appContainer}>
      <div className={styles.appSideBar}>
        <SideBar />
      </div>
      <div className={styles.appHeader}>
        <Header />
      </div>

      <main className={styles.appPages}>{children}</main>
    </div>
  );
}
