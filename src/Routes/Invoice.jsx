import { useParams } from "react-router-dom";
import { getInvoice } from "../data";
import styles from "./Invoice.module.css";
const Invoice = () => {
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));
  //   console.log(invoice);
  return (
    <main className={styles.invoice}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
    </main>
  );
};

export default Invoice;
