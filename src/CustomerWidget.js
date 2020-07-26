import React, { useContext } from "react";
import CreateButton from "./CreateButton";
import GenericWidget from "./GenericWidget";
import Accordion from "./Accordion";
import Box from "@material-ui/core/Box";
import { UiContext } from "./context/UiContext";
import { CustomersContext } from "./context/CustomersContext";
import SelectOne from "./SelectOne";

const CustomerWidget = (props) => {
  const {
    creatingCustomer,
    selectedCustomer,
    setCreatingCustomer,
    setSelectedCustomer,
  } = useContext(UiContext);
  const { customers, projects } = useContext(CustomersContext);

  return (
    <Box boxShadow={3} mb={4}>
      <GenericWidget>
        <SelectOne
          options={customers}
          handleSelection={setSelectedCustomer}
          selected={selectedCustomer}
          type="Kunden"
          display="firm"
        />
        <CreateButton
          handleClick={setCreatingCustomer}
          currentState={creatingCustomer}
        />
      </GenericWidget>
      <Accordion
        disabled={!selectedCustomer}
        data={projects}
        title={selectedCustomer && selectedCustomer.firm}
      />
    </Box>
  );
};

export default CustomerWidget;
