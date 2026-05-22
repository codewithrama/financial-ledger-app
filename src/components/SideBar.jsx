import { HandCoins, LayoutDashboard, TrendingUp } from "lucide-react";
import styles from "./SideBar.module.css";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <div className={styles.sideBar}>
      <h2>The Ledger</h2>
      <p>Financial Atelier</p>
      <ul>
        <li>
          {" "}
          <NavLink to={"/dashboard"}>
            <LayoutDashboard /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to={"/Transaction"}>
            {" "}
            <HandCoins /> Transactions
          </NavLink>
        </li>
        <li>
          <NavLink to={"/insights"}>
            {" "}
            <TrendingUp /> Insights
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
