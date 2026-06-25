import Footer from "../components/Footer";
import cardImage from "../assets/3dCard 2.png";
import { React, useState } from "react";
import styles from "./Signup.module.css";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { formData, setFormData, addUser } = useAuth();

  const handleChange = (e) => {
    console.log(e.target.checked);
    const { name, value, checked } = e.target;
    console.log(checked);
    setFormData((form) => ({
      ...form,
      [name]: value || checked,
    }));
  };

  async function handleSignup(e) {
    e.preventDefault();
    if (
      formData.name.trim() === "" ||
      formData.email.trim() === "" ||
      formData.passWord.trim() === ""
    ) {
      toast.error("Missing fields");
      return;
    }
    if (!formData.terms) {
      toast.error("Please accept Terms and Conditions");
      return;
    }

    const newData = {
      name: formData.name,
      email: formData.email,
      passWord: formData.passWord,
      id: `Led-${crypto.randomUUID().substring(0, 4)}`,
      isOnboardingDone: false,
      terms: true,
      income: null,
    };
    console.log(newData);

    await addUser(newData);
    toast.success("Account Created Successfully !");
    navigate("/onBoarding", { replace: true });
  }

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

            <form className={styles.signupForm} onSubmit={handleSignup}>
              <div className="fullname">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  className={styles.input}
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Julian Vellum"
                />
              </div>

              <div className="Email Address">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  className={styles.input}
                  placeholder="julian@ledger.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.passwordField}>
                <label>Password</label>

                <div className={styles.inputWrapper}>
                  <input
                    type={showPassword ? "text" : "password"}
                    className={styles.input}
                    placeholder="******"
                    name="passWord"
                    value={formData.password}
                    onChange={handleChange}
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
                  <input
                    type="checkbox"
                    value={formData.agree}
                    onChange={handleChange}
                    name="terms"
                  />
                  I agree to the <span>Terms of Service</span> and{" "}
                  <span>Privacy Policy.</span>
                </p>
              </div>

              <button type="submit">Create Account</button>
            </form>
            <p>
              Already have an account ?{" "}
              <span onClick={() => navigate("/")}>Login</span>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
