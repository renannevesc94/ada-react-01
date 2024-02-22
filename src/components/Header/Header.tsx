import { Link } from "react-router-dom";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <div>Home</div>
      </Link>
      <h1>Ada Receitas</h1>
      <div>
        <Link to={"/search"}>
          <button>BUSCAR</button>
        </Link>
      </div>
    </header>
  );
}
