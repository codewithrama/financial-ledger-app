import { Bell, SearchIcon } from "lucide-react";

export default function Header(){
    return(
        <>
        <div className="searchInput">
            <SearchIcon/> 
            <input type='text' placeholder= "Search transaction..."/>   
        </div>
        <div className="notification">
            <Bell/>
        </div>
        </>
    )
}