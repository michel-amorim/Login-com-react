import { useContext } from "react";
import { Route, Routes, Link } from "react-router-dom";

import "./App.css";
import logo from "./assets/img/logo.svg";

import { Home } from "./pages/Home";
import { Private } from "./pages/Private";

import { RequireAuth } from "./contexts/Auth/RequireAuth";
import { AuthContext } from "./contexts/Auth/AuthContext";

function App() {
  const auth = useContext(AuthContext);

  const handleLogout = async () => {
    await auth.signout();
    window.location.href = window.location.href;
  };

  return (
    <div className="App">
      <header>
        <Link to="/">
          <img src={logo} alt="INSURE" />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/private">private</Link>
            </li>

            {auth.user && <button onClick={handleLogout}>Sair</button>}
          </ul>
        </nav>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/private"
          element={
            <RequireAuth>
              <Private />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
