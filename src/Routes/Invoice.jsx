import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getInvoice, deleteInvoice } from "../data";
import styles from "./Invoice.module.css";
const Invoice = () => {
  let params = useParams();
  let navigate = useNavigate();
  let location = useLocation();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));
     console.log(params, navigate, location, invoice);


  const invoiceDelete = () => {
    deleteInvoice(invoice.number);
    navigate("/invoices" + location.search);
  };

  return (
    <main className={styles.invoice}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
      <p>
        <button onClick={invoiceDelete}>Delete</button>
      </p>
    </main>
  );
};

export default Invoice;
