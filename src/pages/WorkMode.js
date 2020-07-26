import React, { useContext, useEffect } from "react";
import axios from "axios";
import CustomerWidget from "../CustomerWidget";
import Modal from "../Modal";
import { CustomersContext } from "../context/CustomersContext";

const WorkMode = () => {
  const { customers, setCustomers } = useContext(CustomersContext);

  useEffect(() => {
    axios
      .get("http://localhost:5000/customers")
      .then((customers) => {
        setCustomers(customers.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {customers && <CustomerWidget />}
      <Modal />
    </>
  );
};

export default WorkMode;
