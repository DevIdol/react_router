import { getInvoices } from "../data";
import { Link, Outlet } from "react-router-dom";
import styles from "./Invoices.module.css";
const Invoices = () => {
  const invoices = getInvoices();
  return (
    <div className={styles.invoices}>
      <nav className={styles.nav}>
        {invoices.map((invoice) => {
          return (
            <Link
              className={styles.link}
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
              {invoice.name}
            </Link>
          );
        })}
      </nav>
        <Outlet/>
    </div>
  );
};

export default Invoices;
