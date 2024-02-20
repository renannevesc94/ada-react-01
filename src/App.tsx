import { Link } from "react-router-dom";
import "./App.css";
import RoutesApp from "./components/RoutesApp";

function App() {
  return (
    <>
      <header>
        <Link to="/">
          <div className="logo-top">Home</div>
        </Link>
        <h1>Ada Receitas</h1>
      </header>
      <RoutesApp />
    </>
  );
}

export default App;
