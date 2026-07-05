import { MoveLeft, MoveRight } from "lucide-react";
import { useState } from "react";
import Footer from "../components/Footer";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Login() {
  const [emailid, setEmailId] = useState("");
  const [passWord, setPassWord] = useState("");

  const navigate = useNavigate();

  const { loginUser } = useAuth();

  const handleLogin = async function (e) {
    e.preventDefault();
    const login = await loginUser(emailid, passWord);
    if (login) {
      navigate("/dashboard");
    }
    setEmailId("");
    setPassWord("");
  };

  return (
    <>
      <div className={styles.loginCard}>
        <div className="cardLeftSide">
          <div className="contentHeading">
            <h1>The Etheral Ledger</h1>
          </div>

          <div className={styles.contentDescription}>
            <h3>Financial discipline eleveted to an art</h3>
            <p>
              Experience the next generation of the wealth management where
              precision meets elegance
            </p>
          </div>
        </div>
        <div className={styles.cardRightSide}>
          <h3>Welcome Back</h3>
          <p>Please Enter your details to access your ledger</p>

          <form className={styles.LoginForm} onSubmit={handleLogin}>
            <div>
              <label>Email Address</label>
              <input
                type="email"
                placeholder="julian@ledger.com"
                value={emailid}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                placeholder="*****"
                value={passWord}
                onChange={(e) => setPassWord(e.target.value)}
              />
            </div>

            <div>
              <p>
                <input type="checkbox" />
                Keep me Logged in for a 30 Days
              </p>
            </div>
            <button type="submit">
              Signin <MoveRight />
            </button>
          </form>
        </div>
        <hr />
        <div className={styles.createAccount}>
          <p>
            New to the ledger ?{" "}
            <span onClick={() => navigate("/")}>create an account</span>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
