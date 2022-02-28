import React from "react";
import { render } from "react-dom";
import { BrowserRouter as MainRoute, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Invoices from "./Routes/Invoices";
import Expenses from "./Routes/Expenses";
import Invoice from "./Routes/Invoice";
const rootElement = document.getElementById("root");

render(
  <MainRoute>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an invoice</p>
              </main>
            }
          />
          <Route path=":invoiceId" element={<Invoice />} />{" "}
        </Route>
        <Route
          path="*"
          element={
            <main>
              <h2>404 No Found!</h2>
            </main>
          }
        />
      </Route>
    </Routes>
  </MainRoute>,
  rootElement
);
