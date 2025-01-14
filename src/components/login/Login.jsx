import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import { useForm } from "../../hooks/useForm";
import { useAuthContext } from "../../contexts/AuthContext";

export const Login = () => {
  const { onLogin } = useAuthContext();
  const [values, onChangeHandler, onSubmitHandler] = useForm(
    {
      email: "",
      password: "",
    },
    onLogin
  );

  return (
    <section className={styles["login-section"]}>
      <header className={styles["login-section-header"]}>
        <h2>Login Form</h2>
      </header>

      <section>
        <form className={styles["login-form"]} onSubmit={onSubmitHandler}>
          <label htmlFor="email" className={styles["form-label"]}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              value={values.email}
              onChange={onChangeHandler}
              className={styles["form-input"]}
            />
          </label>
          <label htmlFor="password" className={styles["form-label"]}>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              value={values.password}
              onChange={onChangeHandler}
              className={styles["form-input"]}
            />
          </label>
          <button className={styles["form-button"]}>Login</button>
        </form>
      </section>

      <footer className={styles["login-section-footer"]}>
        <p>
          If you don't have account please register{" "}
          <Link to="/register">here</Link>.
        </p>
      </footer>
    </section>
  );
};
