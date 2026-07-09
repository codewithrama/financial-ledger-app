import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import useLocalStorage from "../hooks/useLocalStorage";
const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [customers, setCustomers] = useState([]);
  const [transaction, setTransaction] = useState([]);
  const [currentCustomer, setCurrentCustomer] = useState(null);
  const [userTransaction, setUserTransaction] = useState([]);
  const [userId, setUserId] = useLocalStorage("userId", null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    passWord: "",
    terms: false,
    income: null,
  });

  const BASE_URL = "http://localhost:5001";

  //Inital Loading get All Users
  useEffect(function () {
    async function getUsers() {
      const res = await fetch(`${BASE_URL}/customers`);
      const data = await res.json();
      setCustomers(data);
    }
    getUsers();
  }, []);

  //get Current Customer Based on UserId :: browser refresh
  useEffect(
    function () {
      if (customers.length < 0) return;
      const matchedCustomer = customers.find((cus) => cus.userId === userId);
      setCurrentCustomer(matchedCustomer);
    },
    [customers, userId],
  );

  //Signup flow
  async function addUser(newCustomer) {
    //preventing duplicate signUp
    const hasCustomerDuplicate = customers.some(
      (customer) => customer.email === newCustomer.email,
    );

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
      setCustomers((prev) => [...prev, res]);
      setCurrentCustomer(res);
      setUserId(res.userId);
    } catch (error) {
      toast.error(error.message);
      return false;
    }
  }

  //sigin flow

  async function loginUser(emailid, passWord) {
    const loggingcustomer = customers.find(
      (customer) =>
        customer.email === emailid && customer.passWord === passWord,
    );

    console.log("loggingcustomer", loggingcustomer);

    if (loggingcustomer) {
      toast.success(`Welcome Back ${loggingcustomer.name}`);
      setCurrentCustomer(loggingcustomer);
      setUserId(loggingcustomer.userId);
      return true;
    } else {
      toast.error("Invalid Credentials");
      return false;
    }
  }

  //onBoarding flow

  async function updateUserOnBoarding(id, updatedFields) {
    try {
      const res = await fetch(`${BASE_URL}/customers/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFields),
      });
      const data = await res.json();
      setCurrentCustomer(data);
      setCustomers((prev) =>
        prev.map((c) => (c.id === id ? { ...c, updatedFields } : c)),
      );
    } catch (error) {
      throw new Error(error.message);
    }
  }

  //Add Transaction Flow

  async function addUserTransaction(transaction) {
    try {
      const res = await fetch(`${BASE_URL}/transactions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transaction),
      });
      const data = await res.json();
      setTransaction((prev) => [...prev, data]);
      toast.success("record added successfully");
    } catch (error) {
      throw new Error(error.message);
    }
  }

  //Initial Loading get Users Transactions

  async function fetchTransactionsByUserId(userId, signal) {
    const res = await fetch(`${BASE_URL}/transactions/?userId=${userId}`, {
      signal,
    });
    if (!res.ok) throw new Error("Api failed to fetch !");
    return res.json();
  }

  async function getUserTransaction(userID = userId) {
    if (!userID) return;

    try {
      const data = await fetchTransactionsByUserId(userID);
      setUserTransaction(data);
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(
    function () {
      if (!currentCustomer?.userId) return;

      const controller = new AbortController();
      const userId = currentCustomer.userId;

      async function loadUserTransactions() {
        try {
          const data = await fetchTransactionsByUserId(
            userId,
            controller.signal,
          );
          setUserTransaction(data);
        } catch (error) {
          if (controller.signal.aborted) return;
          toast.error(error.message);
        }
      }

      loadUserTransactions();

      return function () {
        controller.abort();
      };
    },
    [currentCustomer],
  );

  return (
    <AuthContext.Provider
      value={{
        userId,
        formData,
        setFormData,
        addUser,
        updateUserOnBoarding,
        currentCustomer,
        loginUser,
        addUserTransaction,
        getUserTransaction,
        transaction,
        userTransaction,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContextProvider, AuthContext };
