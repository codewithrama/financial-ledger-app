import { MoveLeft, MoveRight } from "lucide-react";
import Footer from "../components/Footer";
import styles from "./Login.module.css";

export default function Login() {
  return (
    <>
      <div className={styles.loginCard}>
        <div className="cardLeftSide">
          <div className="contentHeading">
            <h1>The Etheral Ledger</h1>
          </div>

          <div className="contentDescription">
            <h3>Financial discipline eleveted to an art</h3>
            <p>
              Experience the next generation of the wealth management where
              precision meets elegance
            </p>
          </div>
        </div>
        <div className="cardRightSide">
          <h3>Welcome Back</h3>
          <p>Please Enter your details to access your ledger</p>

          <form className="LoginForm">
            <div>
              <label>Email Address</label>
              <input type="email" placeholder="julian@ledger.com" />
            </div>
            <div>
              <label>Password</label>
              <input type="password" placeholder="*****" />
            </div>

            <div>
              <p>
                <input type="checkbox" />
                Keep me Logged in for a 30 Days
              </p>
            </div>
          </form>
          <button>
            Signin <MoveRight />
          </button>
        </div>
        <hr />
        <div className="createAccount">
          <p>
            New to the ledger ? <span>create an account</span>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
