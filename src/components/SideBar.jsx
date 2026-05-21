import { HandCoins, LayoutDashboard, OptionIcon, TrendingUp } from "lucide-react";

export default function SideBar(){
    return(
        <div className="sideBar">
            <h2>The Ledger</h2>
            <p>Financial Atelier</p>
            <ul>
                <li> <LayoutDashboard/> Dashboard</li>
                <li><HandCoins/> Transactions</li>
                <li> <TrendingUp/> Insights</li>
            </ul>
        </div>
    )
}