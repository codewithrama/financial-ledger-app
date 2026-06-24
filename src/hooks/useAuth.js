import {useContext} from 'react'
import {AuthContext} from '../context/AuthContextProvider'
export default function useAuth(){
    const context = useContext(AuthContext)

    // if(!context) throw new Error('Context is not available beyond the context tree')
    
    return context;

    
}