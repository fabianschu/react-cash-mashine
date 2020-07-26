import React, { useContext } from "react";
import CreateButton from "./CreateButton";
import { UiContext } from "./context/UiContext";
import GenericWidget from "./GenericWidget";
import Box from "@material-ui/core/Box";
import Accordion from "./Accordion";
import SelectOne from "./SelectOne";
import { CustomersContext } from "./context/CustomersContext";

const ProjectWidget = () => {
  const {
    creatingProject,
    selectedProject,
    setCreatingProject,
    setSelectedProject,
    selectedCustomer,
  } = useContext(UiContext);
  const { projects } = useContext(CustomersContext);

  return (
    <Box boxShadow={3} mb={4}>
      <GenericWidget>
        <SelectOne
          options={projects}
          handleSelection={setSelectedProject}
          selected={selectedProject}
          type="Projekte"
          display="name"
          disabled={!selectedCustomer}
        />
        <CreateButton
        // handleClick={setCreatingProject}
        // currentState={creatingProject}
        />
      </GenericWidget>
      <Accordion disabled={!selectedProject} />
    </Box>
  );
};

export default ProjectWidget;
