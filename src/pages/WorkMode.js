import React, { useContext, useEffect } from "react";
import axios from "axios";
import CustomerWidget from "../CustomerWidget";
import ProjectWidget from "../ProjectWidget";
import Modal from "../Modal";
import { UiContext } from "../context/UiContext";
import { CustomersContext } from "../context/CustomersContext";
import Table from "../Table";

const WorkMode = () => {
  const { customers, projects, setCustomers, setProjects } = useContext(
    CustomersContext
  );

  useEffect(() => {
    axios
      .get("http://localhost:5000/customers")
      .then((customers) => {
        setCustomers(customers.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // if (customers.length === 0) return null;

  return (
    <>
      {customers && <CustomerWidget />}
      {/* <ProjectWidget /> */}
      <Modal />
      {/* <Table /> */}
    </>
  );
};

export default WorkMode;
