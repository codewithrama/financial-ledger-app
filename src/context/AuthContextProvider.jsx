import { createContext, useState,useEffect } from "react";
import { toast } from "react-toastify";
export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [customers, setCustomers] = useState([]);
  const [currentCustomer,setCurrentCustomer] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    passWord: "",
    id: null,
    isOnboardingDone: false,
    terms: false,
    income: null,
  });

  const BASE_URL = "http://localhost:5001";

  //Inital Loading get All Users
  useEffect(function(){
    async function getUsers(){
    const res = await fetch(`${BASE_URL}/customers`)
    const data = await res.json();
    setCustomers(data)
    }
    getUsers();

    return () => console.log('component unmounts')

  },[])


  //Signup flow
  async function addUser(newCustomer) {
    //preventing duplicate signUp
   const hasCustomerDuplicate = 
   customers.some((customer)=> customer.email=== newCustomer.email)


    if (hasCustomerDuplicate) {
      toast.info("Already account exists , Please Sign in");
      return true;
    }

    try {
      const data = await fetch(`${BASE_URL}/customers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCustomer),
      });

      const res = await data.json();
      setCustomers((prev) =>[...prev, res]);
      setCurrentCustomer(res)

    } catch (error) {
      toast.error(error.message);
    }
  }

  //sigin flow

  async function loginUser(emailid,passWord){
    const loggingcustomer = customers.find((customer)=> customer.email === emailid && customer.passWord === passWord)

    console.log('loggingcustomer',loggingcustomer)
    
    if(loggingcustomer){
        toast.success(`Welcome Back ${loggingcustomer.name}`)
        setCurrentCustomer(loggingcustomer)  
        return true
    }else{
        toast.error('Invalid Credentials');
        return false
    }

  }


  //onBoarding flow

  async function updateUserOnBoarding(id,updatedFields){
    try{
    const res = await fetch(`${BASE_URL}/customers/${id}`,{
        method:'PATCH',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(updatedFields)
    })
    const data = await res.json()
    console.log(data)
    setCustomers((prev)=> prev.map((c)=> c.id === id ? {...c,updatedFields}: c))

    }catch(error){
        throw new Error (error.message)
    }


  }

  return (
    <AuthContext.Provider
      value={{
        formData,
        setFormData,
        addUser,
        updateUserOnBoarding,
        currentCustomer,
        loginUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
