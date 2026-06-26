import { Lock, MoveRight } from "lucide-react";
import styles from "./OnBoarding.module.css";
// import useData from "../hooks/useData";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import { useState } from "react";

export default function OnBoarding() {
  const { updateUserOnBoarding, currentCustomer } = useAuth();
  const [income, setIncome] = useState("");
  const navigate = useNavigate();

  const handleOnBoarding = async function () {
    const fieldsToBeUpdated = {
      isOnboardingDone: true,
      income: income,
    };

    console.log("currentCustomer", currentCustomer);

    await updateUserOnBoarding(currentCustomer.id, fieldsToBeUpdated);
    toast.success("redirecting to Dashboard");
    navigate("/dashboard");
  };

  return (
    <div className={styles.onBoardingContainer}>
      <div className={styles.lockLogo}>
        <Lock />
      </div>

      <div className={styles.onBoardingText}>
        <h3>Set Your Monthly Income Limit</h3>

        <p>
          Define Your finanical boundaries. This anchor points creates the
          structure for your ethereal discipline
        </p>
      </div>

      <div className={styles.onBoardingCard}>
        <div className={styles.incomeSection}>
          <p className={styles.incomeTitle}>Monthly Income (USD)</p>

          <div className={styles.incomeDisplay}>
            <span className={styles.dollar}>$</span>

            <input
              type="number"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              placeholder="0"
              className={styles.incomeInput}
            />
          </div>
        </div>

        <div className={styles.infoBadge}>
          <h3>Discipline Protocol Active</h3>

          <p>
            Note : once set the limit is locked for 3 months to ensure accurate
            financial insights and discipline
          </p>
        </div>

        <div className={styles.onBoardingButton}>
          <button onClick={handleOnBoarding}>
            Confirm and Start <MoveRight />
          </button>
        </div>
      </div>
    </div>
  );
}
