import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <h2>Veg Shop</h2>
      <nav>
        <ul>
          <Link to="/">Home</Link>
        </ul>
      </nav>
    </header>
  );
};
