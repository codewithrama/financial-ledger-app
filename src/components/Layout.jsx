import SideBar from "./SideBar"
import Header from './Header'
export default function Layout({children}){
    return(
      <div className="appContainer">
        <div className="appSideBar">
            <SideBar/>
        </div>
        <div className="appHeader">
            <Header/>
        </div>

        <main className="appPages">
            {children}
        </main>

      </div>

    )
}