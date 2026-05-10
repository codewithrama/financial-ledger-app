import Layout from "../components/Layout"
import { ArrowBigDown, ArrowBigUp, CookingPot, PiggyBankIcon, Plane, Plus, Receipt } from "lucide-react"
import useData from "../hooks/useData"
export default function Dashboard(){
    const {income} = useData();
    return(
        <Layout>
        <>
        <div className="dashboardTopActions">
            <div className="dashboardHeadings">
                <h2>Dashboard Overview</h2>
                <p>Welcome back ! Here's whats happening to your wealth today !</p>
            </div>

            <div className="exportReport" >
                <button>Export Report</button>
            </div>

            <div className="addTransaction" >
                <button><Plus/> Add Transaction</button>
            </div>

        </div>

        <div className="kpiCards">
            <div className="walletCard">
                <div className="walletCardTop">
                    <PiggyBankIcon/>
                    <span>Primary Wallet</span>
                </div>
                <div className="walletAmount">
                    <h2>{income}</h2>
                </div>
            </div>

            <div className="totalIncomeCard">
               <ArrowBigDown/>
                <h3>{income}</h3>
            </div>

            <div className="totalExpenses">
                <ArrowBigUp/>
                <h3>60</h3>
                <input type="progress" max={income} value={60}/>
                <p>Well , within ${60} your limit</p>
            </div>
        </div>

        <div className="spendingByCategoryCard">
            <div className="viewAll"> viewAll</div>
            <div className="cardItem">
            <label><CookingPot/> Food</label>
            <progress  max={income} value={30} />            
            </div>
            <div className="cardItem">
            <label><Plane/> Travelling</label>
            <progress  max={income} value={20} />            
            </div>
            <div className="cardItem">
            <label><Receipt/> Food</label>
            <progress  max={income} value={200} />
            </div>
        </div>

        <div className="recentTransactionsCard">
            <div className="topActions">
                <div className="Icons">

                </div>
            </div>
        </div>



        </>



            
        </Layout>
        
    )
}