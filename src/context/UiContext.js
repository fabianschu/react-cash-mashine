import React, { createContext, useState, useEffect } from "react";

const UiContext = createContext();

const UiContextProvider = ({ children }) => {
  const [creatingCustomer, setCreatingCustomer] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState("");

  const [selectedProject, setSelectedProject] = useState("");

  const [accordionExpanded, setAccordionExpanded] = useState(false);

  const closeModal = () => {
    setCreatingCustomer(false);
  };

  const defaultContext = {
    creatingCustomer,
    selectedCustomer,
    selectedProject,
    accordionExpanded,
    setCreatingCustomer,
    setSelectedCustomer,
    setSelectedProject,
    closeModal,
    setAccordionExpanded,
  };
  return (
    <UiContext.Provider value={defaultContext}>{children}</UiContext.Provider>
  );
};

export { UiContext, UiContextProvider };
