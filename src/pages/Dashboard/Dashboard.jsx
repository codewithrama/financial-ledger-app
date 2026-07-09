import Layout from "../../components/Layout";
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
import styles from "./Dashboard.module.css";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { calculatePercentage } from "../../utilities/utilities";
import Loader from "../../components/Loader";

export default function Dashboard() {
  const { currentCustomer, userTransaction } = useAuth();
  const navigate = useNavigate();

  if (!currentCustomer) return <Loader />;

  const recentTransactions = userTransaction
    .sort((a, b) => new Date(b.lastupdatedAt) - new Date(a.lastupdatedAt))
    .slice(0, 3);

  const breakDown = userTransaction.reduce(
    (acc, user) => {
      if (user.TransactionType === "Expense") {
        acc.totalExpense = acc.totalExpense + Number(user.TransactionAmount);
      }
      if (user.TransactionType === "Income") {
        acc.totalAmount = acc.totalAmount + Number(user.TransactionAmount);
      }

      if (user.TransactionCategory === "Dining") {
        acc.foodExpense = acc.foodExpense + Number(user.TransactionAmount);
      }

      if (user.TransactionCategory === "travelling") {
        acc.travellingExpense =
          acc.travellingExpense + Number(user.TransactionAmount);
      }

      if (
        !(user.TransactionCategory === "travelling") ||
        !(user.TransactionCategory === "Dining")
      ) {
        acc.MiscExpense = acc.MiscExpense + Number(user.TransactionAmount);
      }
      return acc;
    },
    {
      totalExpense: 0,
      totalAmount: 0,
      foodExpense: 0,
      travellingExpense: 0,
      MiscExpense: 0,
    },
  );

  console.log(breakDown);

  const {
    totalExpense,
    totalAmount,
    foodExpense,
    travellingExpense,
    MiscExpense,
  } = breakDown;

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
            <button onClick={() => navigate("/transaction")}>
              <Plus /> Add Transaction
            </button>
          </div>
        </div>

        <div className={styles.kpiCards}>
          <div className={styles.walletCard}>
            <div className={styles.walletCardTop}>
              <PiggyBankIcon />
            </div>
            <div className={styles.walletAmount}>
              <h1>Monthly income</h1>
              <h2>${currentCustomer.income}</h2>
            </div>
          </div>

          <div className={styles.totalIncomeCard}>
            <ArrowBigDown />
            <h3>Remaining Balance</h3>

            <progress
              value={totalAmount - totalExpense}
              max={totalAmount || currentCustomer.income}
              className={styles.totalIncome}
            />
            <p>{`${calculatePercentage(totalAmount - totalExpense, totalAmount)} % Money Remaining`}</p>
          </div>

          <div className={styles.totalExpenses}>
            <ArrowBigUp />
            <h3>Total expense</h3>
            <progress
              max={currentCustomer.income}
              value={totalExpense}
              className={styles.totalExpense}
            ></progress>{" "}
            <p>
              {totalExpense
                ? "Make sure your expense is worth"
                : "well, no expense"}
            </p>
            <span>
              {totalExpense +
                "(" +
                calculatePercentage(totalExpense, totalAmount) +
                "%)"}
            </span>
          </div>
        </div>

        <div className={styles.spendingByCategoryCard}>
          <div className={styles.viewAll}> View All</div>
          <div className={styles.cardItem}>
            <label>
              <CookingPot /> Food
            </label>
            <progress
              max={totalAmount || currentCustomer.income}
              value={foodExpense}
              className={styles.progressFood}
            />
          </div>
          <div className={styles.cardItem}>
            <label>
              <Plane /> Travelling
            </label>
            <progress
              max={totalAmount || currentCustomer.income}
              value={travellingExpense}
              className={styles.progressTravelling}
            />
          </div>
          <div className={styles.cardItem}>
            <label>
              <Receipt /> Bills and Utilities
            </label>
            <progress
              max={totalAmount || currentCustomer.income}
              value={MiscExpense}
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
              {recentTransactions.map((recent) => (
                <tr key={recent.id}>
                  <td>{recent.TransactionDescription}</td>
                  <td>{recent.TransactionAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
