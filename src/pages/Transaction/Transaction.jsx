import Layout from "../../components/Layout";
import styles from "./Transaction.module.css";
import {
  FilterIcon,
  CalendarDays,
  PlusCircle,
  DownloadIcon,
} from "lucide-react";
import useAuth from "../../hooks/useAuth";
import { useState, useEffect } from "react";
import formatDate from "../../utilities/utilities";

export default function Transaction() {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Expense");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Housing");
  const [currentPage, setCurrentPage] = useState(1);
  const [filterObj, setFilterObj] = useState({
    type: "All",
    category: "All",
    date: "",
  });

  function handleFilterChange(e) {
    const { value, name } = e.target;
    setFilterObj((prev) => ({ ...prev, [name]: value }));
  }

  console.log(filterObj);
  const {
    currentCustomer,
    addUserTransaction,
    userTransaction,
    getUserTransaction,
  } = useAuth();

  const avatarMap = {
    Housing: "🏚️",
    Grocery: "🛍️",
    Salary: "💵",
    Dining: "🛎️",
  };

  async function handleAddTransaction(e) {
    e.preventDefault();
    console.log(currentCustomer);

    const addNewTransaction = {
      userId: currentCustomer.userId,
      TransactionAmount: amount,
      TransactionType: type,
      TransactionCategory: category,
      TransactionDescription: description,
      createdAt: new Date(),
      lastupdatedAt: new Date(),
      active: true,
    };
    await addUserTransaction(addNewTransaction);

    //get Transaction

    await getUserTransaction();

    //Resetting states
    setAmount("");
    setType("");
    setCategory("");
    setDescription("");
  }

  useEffect(function () {
    getUserTransaction();
  }, []);

  //filter method

  const filterUserTransactions = userTransaction.filter((user) => {
    const filterType =
      filterObj.type === "All" || user.TransactionType === filterObj.type;

    const filterCategories =
      filterObj.category === "All" ||
      user.TransactionCategory === filterObj.category;

    const filterDate =
      filterObj.date === "" ||
      formatDate(user.lastupdatedAt) === formatDate(filterObj.date);

    return filterType && filterCategories && filterDate;
  });

  //For learnning reduce method

  // const filterCategoriesByReduce = userTransaction.reduce((acc, user) => {
  //   const filterType =
  //     filterObj.type === "All" || user.TransactionType === filterObj.type;

  //   const filterCategories =
  //     filterObj.category === "All" ||
  //     user.TransactionCategory === filterObj.category;

  //   const filterDate =
  //     filterObj.date === "" ||
  //     formatDate(user.lastupdatedAt) === formatDate(filterObj.date);

  //   if (filterType && filterCategories && filterDate) {
  //     acc.push(user);
  //   }

  //   return acc;
  // }, []);

  const PAGE_PER_ITEMS = window.innerWidth <= 1400 ? 5 : 8;

  const totalPages = Math.ceil(filterUserTransactions.length / PAGE_PER_ITEMS);

  //step 3 : slicing

  const endIndex = currentPage * PAGE_PER_ITEMS;
  const startIndex = endIndex - PAGE_PER_ITEMS;

  const visibleTransaction = filterUserTransactions.slice(startIndex, endIndex);

  return (
    <Layout>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.headingSection}>
          <div className={styles.titleArea}>
            <h1>Transactions</h1>
            <p>Log and manage your financial movements with precision.</p>
          </div>
        </div>

        <div className={styles.contentGrid}>
          {/* Left Side: New Entry Form */}
          <div className={styles.newEntryCard}>
            <h3 className={styles.cardTitle}>
              <PlusCircle size={20} className={styles.iconPurple} /> New Entry
            </h3>
            <form
              className={styles.addTransactionForm}
              onSubmit={handleAddTransaction}
            >
              <div className={styles.formGroup}>
                <label>AMOUNT</label>
                <div className={styles.amountInputWrapper}>
                  <span>$</span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    step="0.01"
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>TYPE</label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="Expense">Expense</option>
                    <option value="Income">Income</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label>CATEGORY</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="Housing">Housing</option>
                    <option value="Grocery">Grocery</option>
                    <option value="Salary">Salary</option>
                    <option value="Dining">Dining</option>
                    <option value="Travelling">Travelling</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>DESCRIPTION</label>
                <textarea
                  placeholder="What was this for?"
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                Add Transaction
              </button>
            </form>
          </div>

          {/* Right Side: Filters and Table */}
          <div className={styles.rightSide}>
            {/* Toolbar */}
            <div className={styles.toolbar}>
              <div className={styles.filterGroup}>
                <button className={styles.filterBtn}>
                  <FilterIcon size={16} /> FILTER BY
                </button>
                <select
                  className={styles.toolbarSelect}
                  name="type"
                  onChange={handleFilterChange}
                  value={filterObj.type}
                >
                  <option value="All">All Types</option>
                  <option value="Expense">Expense</option>
                  <option value="Income">Income</option>
                </select>
                <select
                  className={styles.toolbarSelect}
                  name="category"
                  onChange={handleFilterChange}
                  value={filterObj.category}
                >
                  <option value="All">All Categories</option>
                  <option value="Housing">Housing</option>
                  <option value="Grocery">Grocery</option>
                  <option value="Salary">Salary</option>
                  <option value="Dining">Dining</option>
                  <option value="Travelling">Travelling</option>
                </select>
              </div>

              <div className={styles.actionGroup}>
                <div className={styles.datePicker}>
                  <input
                    type="date"
                    className={styles.dateInput}
                    name="date"
                    onChange={handleFilterChange}
                    value={filterObj.date}
                  />
                  <CalendarDays size={16} className={styles.calendarIcon} />
                </div>
                <button className={styles.iconBtn}>
                  <DownloadIcon size={16} />
                </button>
              </div>
            </div>

            {/* Table Card */}
            <div className={styles.tableCard}>
              <table className={styles.transactionTable}>
                <thead>
                  <tr>
                    <th>DESCRIPTION</th>
                    <th>CATEGORY</th>
                    <th>TYPE</th>
                    <th>AMOUNT</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleTransaction.map((tran) => (
                    <tr key={tran.id}>
                      <td>
                        <div className={styles.descCell}>
                          <div className={styles.avatarBag}>
                            {avatarMap[tran.TransactionCategory]}
                          </div>
                          <div>
                            <div className={styles.txName}>
                              {tran.TransactionDescription}
                            </div>
                            <div className={styles.txDate}>
                              {formatDate(tran.lastupdatedAt)}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span
                          className={`${styles.badge} ${styles["badge" + tran.TransactionCategory] || styles.badgeDefault}`}
                        >
                          {tran.TransactionCategory}
                        </span>
                      </td>
                      <td className={styles.typeText}>
                        <span
                          className={`${styles.typeBadge} ${tran.TransactionType === "Expense" ? styles.typeExpense : styles.typeIncome}`}
                        >
                          {tran.TransactionType}
                        </span>
                      </td>
                      <td
                        className={`${styles.amountText} ${tran.TransactionType === "Expense" ? styles.negative : styles.positive}`}
                      >
                        {tran.TransactionType === "Expense" ? "-" : "+"}$
                        {parseFloat(tran.TransactionAmount).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Table Footer / Pagination */}
              <div className={styles.tableFooter}>
                <span>{`Showing ${visibleTransaction.length} out of ${filterUserTransactions.length} entries`}</span>
                <span>{`Showing ${startIndex} to ${Math.min(endIndex, filterUserTransactions.length)} of ${userTransaction.length || 0} entries`}</span>
                <div className={styles.pagination}>
                  <button
                    className={styles.pagArrow}
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                  >
                    &lt;
                  </button>
                  <button className={`${styles.pagNum} ${styles.pagActive}`}>
                    {currentPage}
                  </button>
                  <button
                    className={styles.pagArrow}
                    disabled={currentPage >= totalPages}
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                  >
                    &gt;
                  </button>
                </div>
              </div>
            </div>

            {/* Micro KPI Cards Footer */}
            {/* <div className={styles.kpiRow}>
              <div className={styles.kpiCard}>
                <div className={styles.kpiIconTrend}>📈</div>
                <div className={styles.kpiContent}>
                  <span className={styles.kpiLabel}>SAVINGS RATE</span>
                  <div className={styles.kpiValue}>
                    34.2% <span className={styles.trendUp}>↑ 2%</span>
                  </div>
                </div>
              </div>

              <div className={styles.kpiCard}>
                <div className={styles.kpiIconAlert}>⚠️</div>
                <div className={styles.kpiContent}>
                  <span className={styles.kpiLabel}>BUDGET ALERT</span>
                  <div className={styles.kpiValue}>
                    Dining <span className={styles.alertPct}>85% limit</span>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
