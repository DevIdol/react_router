import { getInvoices } from "../data";
import { Outlet, NavLink, useSearchParams } from "react-router-dom";
import styles from "./Invoices.module.css";
const Invoices = () => {
  const invoices = getInvoices();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchInputHandler = (event) => {
    let filter = event.target.value;
    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  };
  return (
    <div className={styles.invoices}>
      <nav className={styles.nav}>
        <label htmlFor="">Search: </label>
        <input
          value={searchParams.get("filter") || ""}
          onChange={searchInputHandler}
        />
        {invoices
          .filter((invoice) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((invoice) => (
            <NavLink
              style={({ isActive }) => ({
                display: "block",
                margin: "1rem 0",
                textDecoration: "none",
                color: isActive ? "red" : "blue",
                background: isActive ? "black" : "",
                padding: "12px",
                transition: "ease 0.6s",
              })}
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
              {invoice.name}
            </NavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
};

export default Invoices;
