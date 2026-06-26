import Layout from "../../components/Layout";
import styles from "./Transaction.module.css";
import { FilterIcon, CalendarDays, PlusCircle, DownloadIcon } from "lucide-react";

export default function Transaction() {
  return (
    <Layout>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.headingSection}>
          <div className={styles.titleArea}>
            <h1>Transactions</h1>
            <p>Log and manage your financial movements with precision.</p>
          </div>
          <div className={styles.netFlowBadge}>
            <span className={styles.netFlowLabel}>NET FLOW</span>
            <span className={styles.netFlowAmount}>+$2,480.00</span>
          </div>
        </div>

        <div className={styles.contentGrid}>
          {/* Left Side: New Entry Form */}
          <div className={styles.newEntryCard}>
            <h3 className={styles.cardTitle}>
              <PlusCircle size={20} className={styles.iconPurple} /> New Entry
            </h3>
            <form className={styles.addTransactionForm} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formGroup}>
                <label>AMOUNT</label>
                <div className={styles.amountInputWrapper}>
                  <span>$</span>
                  <input type="number" defaultValue="0.00" step="0.01" />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>TYPE</label>
                  <select defaultValue="Expense">
                    <option value="Expense">Expense</option>
                    <option value="Income">Income</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label>CATEGORY</label>
                  <select defaultValue="Housing">
                    <option value="Housing">Housing</option>
                    <option value="Grocery">Grocery</option>
                    <option value="Salary">Salary</option>
                    <option value="Dining">Dining</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>DESCRIPTION</label>
                <textarea placeholder="What was this for?" rows={3} />
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
                <select className={styles.toolbarSelect}>
                  <option>All Types</option>
                </select>
                <select className={styles.toolbarSelect}>
                  <option>All Categories</option>
                   <option>Food</option>
                   <option>Billing and utilities</option>
                   <option>Travelling</option>


                </select>
              </div>

              <div className={styles.actionGroup}>
                <div className={styles.datePicker}>
                 <input type="date" className={styles.dateInput} />
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
                  <tr>
                    <td>
                      <div className={styles.descCell}>
                        <div className={styles.avatarBag}>🛍️</div>
                        <div>
                          <div className={styles.txName}>Whole Foods Market</div>
                          <div className={styles.txDate}>Oct 24, 2023 • 14:32</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className={`${styles.badge} ${styles.badgeGrocery}`}>GROCERY</span>
                    </td>
                    <td className={styles.typeText}>Expense</td>
                    <td className={`${styles.amountText} ${styles.negative}`}>-$142.50</td>
                  </tr>
                  <tr>
                    <td>
                      <div className={styles.descCell}>
                        <div className={styles.avatarSalary}>💵</div>
                        <div>
                          <div className={styles.txName}>Monthly Salary</div>
                          <div className={styles.txDate}>Oct 20, 2023 • 09:00</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className={`${styles.badge} ${styles.badgeSalary}`}>SALARY</span>
                    </td>
                    <td className={styles.typeText}>Income</td>
                    <td className={`${styles.amountText} ${styles.positive}`}>+$6,400.00</td>
                  </tr>
                </tbody>
              </table>

              {/* Table Footer / Pagination */}
              <div className={styles.tableFooter}>
                <span>Showing 1 to 2 of 2 entries</span>
                <div className={styles.pagination}>
                  <button className={styles.pagArrow} disabled>&lt;</button>
                  <button className={`${styles.pagNum} ${styles.pagActive}`}>1</button>
                  <button className={styles.pagArrow} disabled>&gt;</button>
                </div>
              </div>
            </div>

            {/* Micro KPI Cards Footer */}
            <div className={styles.kpiRow}>
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
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}