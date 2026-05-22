import Layout from "../components/Layout";
import {
  ArrowBigDown,
  ArrowBigUp,
  CookingPot,
  PiggyBankIcon,
  Plane,
  Plus,
  Receipt,
} from "lucide-react";
import useData from "../hooks/useData";
import styles from "./Dashboard.module.css";
export default function Dashboard() {
  const { income } = useData();
  return (
    <Layout>
      <>
        <div className={styles.dashboardTopActions}>
          <div className={styles.dashboardHeadings}>
            <h2>Dashboard Overview</h2>
            <p>Welcome back ! Here's whats happening to your wealth today !</p>
          </div>

          <div className={styles.exportReport}>
            <button>Export Report</button>
          </div>

          <div className={styles.addTransaction}>
            <button>
              <Plus /> Add Transaction
            </button>
          </div>
        </div>

        <div className={styles.kpiCards}>
          <div className={styles.walletCard}>
            <div className={styles.walletCardTop}>
              <PiggyBankIcon />
              <span>Primary Wallet</span>
            </div>
            <div className={styles.walletAmount}>
              <h1>Target income</h1>
              <h2>${2600}</h2>
            </div>
          </div>

          <div className={styles.totalIncomeCard}>
            <ArrowBigDown />
            <h3>{income}</h3>
          </div>

          <div className={styles.totalExpenses}>
            <ArrowBigUp />
            <h3>60</h3>
            <input type="progress" max={income} value={60} />
            <p>Well , within ${60} your limit</p>
          </div>
        </div>

        <div className={styles.spendingByCategoryCard}>
          <div className={styles.viewAll}> viewAll</div>
          <div className={styles.cardItem}>
            <label>
              <CookingPot /> Food
            </label>
            <progress max={income} value={30} />
          </div>
          <div className={styles.cardItem}>
            <label>
              <Plane /> Travelling
            </label>
            <progress max={income} value={20} />
          </div>
          <div className={styles.cardItem}>
            <label>
              <Receipt /> Food
            </label>
            <progress max={income} value={200} />
          </div>
        </div>

        <div className={styles.recentTransactionsCard}>
          <div className={styles.topActions}>
            <div className={styles.Icons}></div>
          </div>
        </div>
      </>
    </Layout>
  );
}
