import Footer from "../components/Footer";
import cardImage from "../assets/3dCard 2.png";
import { React, useState } from "react";
import styles from "./Signup.module.css";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const Navigate = useNavigate();
  return (
    <div className={styles.pageContainer}>
      <main className={styles.mainContent}>
        <div className={styles.signupCard}>
          <div className={styles.signupLeftSide}>
            <div className={styles.signupEthereal}>
              <h2>The Ethereal Ledger</h2>
              <p>
                Redefiing wealth management through the lens of architectural
                clarity and editorial person.{" "}
              </p>
            </div>
            <div className={styles.signupCardImg}>
              <img src={cardImage} alt="Expenss tracker image" />
            </div>
          </div>

          <div className={styles.signupRightSide}>
            <h3>Create Account</h3>
            <p>Begin your journey toward finanical clarity.</p>

            <form className={styles.signupForm}>
              <div className="fullname">
                <label>Full Name</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Julian Vellum"
                />
              </div>

              <div className="Email Address">
                <label>Email Address</label>
                <input
                  type="email"
                  className={styles.input}
                  placeholder="julian@ledger.com"
                />
              </div>
              <div className={styles.passwordField}>
                <label>Password</label>

                <div className={styles.inputWrapper}>
                  <input
                    type={showPassword ? "text" : "password"}
                    className={styles.input}
                    placeholder="******"
                  />

                  <span
                    className={styles.eyeIcon}
                    onClick={() => setShowPassword((p) => !p)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </span>
                </div>
              </div>

              <div className="checkbox">
                <p>
                  <input type="checkbox" />I agree to the{" "}
                  <span>Terms of Service</span> and <span>Privacy Policy.</span>
                </p>
              </div>

              <button type="submit" onClick={()=> Navigate('/onBoarding')}>Create Account</button>
            </form>
            <p>
              Already have an account ? <span onClick={()=> Navigate('/')}>Login</span>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
