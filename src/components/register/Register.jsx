import { Link } from "react-router-dom";
import styles from "./Register.module.css";
import { useForm } from "../../hooks/useForm";
import { useAuthContext } from "../../contexts/AuthContext";

export const Register = () => {
  const { onRegister } = useAuthContext();
  const [values, onChangeHandler, onSubmitHandler] = useForm(
    { email: "", username: "", password: "", rePass: "" },
    onRegister
  );

  return (
    <section>
      <header>
        <h2>Register form</h2>
      </header>

      <form onSubmit={onSubmitHandler}>
        <label htmlFor="email" className={styles["register-form-label"]}>
          Email:{" "}
          <input
            type="email"
            name="email"
            id="email"
            value={values.email}
            onChange={onChangeHandler}
          />
        </label>
        <label htmlFor="username" className={styles["register-form-label"]}>
          Username:{" "}
          <input
            type="text"
            name="username"
            id="username"
            value={values.username}
            onChange={onChangeHandler}
          />
        </label>
        <label htmlFor="password" className={styles["register-form-label"]}>
          Password:{" "}
          <input
            type="password"
            name="password"
            id="password"
            value={values.password}
            onChange={onChangeHandler}
          />
        </label>
        <label htmlFor="rePass" className={styles["register-form-label"]}>
          Repeat password:{" "}
          <input
            type="password"
            name="rePass"
            id="rePass"
            value={values.rePass}
            onChange={onChangeHandler}
          />
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
