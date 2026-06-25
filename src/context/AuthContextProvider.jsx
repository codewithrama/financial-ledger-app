import { createContext, useState } from "react";
import { toast } from "react-toastify";
export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [customers, setCustomers] = useState([]);
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

  //Signup flow
  async function addUser(newCustomer) {
    //preventing duplicate signUp
    const hasCustomerDuplicate = customers.some(
      (customer) => customer.email === newCustomer.email,
    );

    if (hasCustomerDuplicate) {
      toast.info("Already account exists , Please Sign in");
      return;
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
      setCustomers((prev) => prev, res);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  //sigin flow

  return (
    <AuthContext.Provider
      value={{
        formData,
        setFormData,
        addUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
