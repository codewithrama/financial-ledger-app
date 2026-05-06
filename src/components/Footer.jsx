import styles from "./Footer.module.css";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className={styles.footer}>
      <div className={styles.copyRight}>
        @{year} The Ethereal Ledger . Locked Discipline By design.
      </div>
      <div className={styles.footerMenus}>
        <nav>
          <ul>
            <li>Security</li>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
