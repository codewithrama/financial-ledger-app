import {createContext,useState} from 'react'
export const AuthContext = createContext();

export default function AuthContextProvider({children}){
    const [customers,setCustomers] = useState([]);
    const [formData,setFormData] = useState({
        'name':'',
        'email':'',
        'passWord': '',
        'id': null,
        'isOnboardingDone':false,
        'terms':false,
        'income':null
        
    })

    //Signup flow

    function addUser(newCustomer){
        if(!customers.includes(newCustomer.email)){
            setCustomers((cus)=> [...cus,newCustomer])
        } else{
            toast.error('Already user exists')
        }

    }
    return(
        <AuthContext.Provider value ={{
            formData,
            setFormData,
            addUser
        }}>
            {children}

        </AuthContext.Provider>
    )
}