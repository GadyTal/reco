import { Navbar } from "./app/components/common/Navbar/Navbar";
import React from "react";
import "./App.css";
import { OrderPage } from "./app/pages/Orders/OrdersPage/OrdersPage";

const App = () => {
  return (
    <>
      <Navbar />
      <OrderPage />
    </>
  );
};

export default App;
