import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useAuthContext } from "../../contexts/AuthContext";

export const Header = () => {
  const { authData } = useAuthContext();

  return (
    <header className={styles["site-header"]}>
      <h2>Veg Shop</h2>
      <nav className={styles["main-nav"]}>
        <ul className={styles["main-nav-ul"]}>
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
          {authData.email ? (
            <Link to="/logout">Logout</Link>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};
