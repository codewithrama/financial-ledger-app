import { createContext, useState } from "react";

export const AppContext =  createContext()

export default function AppContextProvider({children}){
    const [income,setIncome] = useState('')

    return(
        <AppContext.Provider value={{
            income,setIncome
        }}>
            {children}

    </AppContext.Provider>

    

       
    )

}