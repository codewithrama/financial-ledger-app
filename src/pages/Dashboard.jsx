import Layout from "../components/Layout";
import {
  ArrowBigDown,
  ArrowBigUp,
  Calendar,
  CookingPot,
  ListFilterPlus,
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
      <div>
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
            <h3>Total Income</h3>
            <progress value={550} max={2600} className={styles.totalIncome} />
            <p>30% Target Reached</p>
          </div>

          <div className={styles.totalExpenses}>
            <ArrowBigUp />
            <h3>Total expense</h3>
            <progress
              max={2600}
              value={60}
              className={styles.totalExpense}
            ></progress>{" "}
            <p>Well , within ${2600} your limit</p>
          </div>
        </div>

        <div className={styles.spendingByCategoryCard}>
          <div className={styles.viewAll}> View All</div>
          <div className={styles.cardItem}>
            <label>
              <CookingPot /> Food
            </label>
            <progress max={income} value={30} className={styles.progressFood} />
          </div>
          <div className={styles.cardItem}>
            <label>
              <Plane /> Travelling
            </label>
            <progress
              max={income}
              value={20}
              className={styles.progressTravelling}
            />
          </div>
          <div className={styles.cardItem}>
            <label>
              <Receipt /> Bills and Utilities
            </label>
            <progress
              max={income}
              value={200}
              className={styles.progressRecipt}
            />
          </div>
        </div>

        <div className={styles.recentTransactionsCard}>
          <div className={styles.topActions}>
            <div className={styles.Icons}>
              <h3>Recent Transactions</h3>
            </div>
            <ListFilterPlus />
            <Calendar />
          </div>

          <table>
            <thead>
              <tr>
                <th>Transcations</th>
                <th>Amount </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Apple Store Soho</td>
                <td>2000</td>
              </tr>
              <tr>
                <td>Stripe Payout</td>
                <td>8500</td>
              </tr>

              <tr>
                <td>Blue Hill Restaurent</td>
                <td>-342</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
