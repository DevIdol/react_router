import { Outlet, Link } from "react-router-dom";

import styles from "./App.module.css";

const App = () => {
  return (
    <div>
      <h1 className={styles.app}>Welcome From React Router</h1>
      <nav className={styles.nav}>
        <Link to="/invoices">Invoices</Link>
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
