import { Link } from "react-router-dom";
import styles from "./Register.module.css";

export const Register = () => {
  return (
    <section>
      <header>
        <h2>Register form</h2>
      </header>
      <form>
        <label htmlFor="email" className={styles["register-form-label"]}>
          Email: <input type="email" name="email" id="email" />
        </label>
        <label htmlFor="username" className={styles["register-form-label"]}>
          Username: <input type="text" name="username" id="username" />
        </label>
        <label htmlFor="password" className={styles["register-form-label"]}>
          Password: <input type="password" name="password" id="password" />
        </label>
        <label htmlFor="rePass" className={styles["register-form-label"]}>
          Repeat password: <input type="password" name="rePass" id="rePass" />
        </label>
        <button>Register</button>
      </form>
      <footer>
        <p>
          If you have account already login <Link to="/login">here</Link>.
        </p>
      </footer>
    </section>
  );
};
