// Fichero src/components/App.jsx

import { Link, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import '../scss/App.scss'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/overview" element={<h2> Overview </h2>}/>
      </Routes>
      <Header />
      <Main />
      {/* <h2>Este título aparece siempre</h2>

      <Routes>
        <Route
          path="/contacto"
          element={
            <h2>
              Este título solo aparece cuando la usuaria entra en la página de
              contacto
            </h2>
          }
        />
      </Routes>

      <nav>
        <ul>
          <li>
            <Link to="/">Ir al inicio</Link>
          </li>
          <li>
            <Link to="/contacto">Ir a contacto</Link>
          </li>
        </ul>
      </nav> */}
    </div>
  );
};

export default App;