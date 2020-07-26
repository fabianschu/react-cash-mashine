import React, { useContext } from "react";
import SelectOne from "./SelectOne";
import { UiContext } from "./context/UiContext";
import { CustomersContext } from "./context/CustomersContext";

const SelectProject = () => {
  const { selectedProject, setSelectedProject, selectedCustomer } = useContext(
    UiContext
  );
  const { projects } = useContext(CustomersContext);

  return (
    <SelectOne
      options={projects}
      handleSelection={setSelectedProject}
      selected={selectedProject}
      type="Projekte"
      display="name"
      disabled={!selectedCustomer}
    />
  );
};

export default SelectProject;
