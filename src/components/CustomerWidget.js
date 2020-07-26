import React, { useContext } from "react";
import ModalButton from "./ModalButton";
import Accordion from "./Accordion";
import Box from "@material-ui/core/Box";
import { UiContext } from "../context/UiContext";
import { CustomersContext } from "../context/CustomersContext";
import SelectOne from "./SelectOne";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    minWidth: "700px",
  },
}));

const CustomerWidget = (props) => {
  const {
    creatingCustomer,
    editingCustomer,
    selectedCustomer,
    setCreatingCustomer,
    setSelectedCustomer,
    setEditingCustomer,
  } = useContext(UiContext);
  const { customers, projects } = useContext(CustomersContext);
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <SelectOne
          options={customers}
          handleSelection={setSelectedCustomer}
          selected={selectedCustomer}
          type="Kunden"
          display="firm"
        />
        <ModalButton
          handleClick={setCreatingCustomer}
          currentState={creatingCustomer}
          type="create"
        />
        <ModalButton
          handleClick={setEditingCustomer}
          currentState={editingCustomer}
          type="edit"
          disabled={!selectedCustomer}
        />
      </Box>
      <Accordion
        disabled={!selectedCustomer}
        data={projects}
        title={selectedCustomer && selectedCustomer.firm}
      />
    </>
  );
};

export default CustomerWidget;
