import { createContext, useState } from "react";
import useLocalStorage from '../hooks/useLocalStorage';

export const AppContext =  createContext()

export default function AppContextProvider({children}){
    const [income,setIncome] = useLocalStorage('income','')

    return(
        <AppContext.Provider value={{
            income,setIncome
        }}>
            {children}"editor.suggestOnTriggerCharacters": true

    </AppContext.Provider>

    

       
    )

}