import React, { createContext, useState, useEffect } from "react";

const UiContext = createContext();

const UiContextProvider = ({ children }) => {
  const [mode, setMode] = useState("work");

  const [creatingCustomer, setCreatingCustomer] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState("");

  const [accordionExpanded, setAccordionExpanded] = useState(false);

  const closeModal = () => {
    setCreatingCustomer(false);
    setEditingCustomer(false);
  };

  const defaultContext = {
    creatingCustomer,
    editingCustomer,
    selectedCustomer,
    accordionExpanded,
    mode,
    setCreatingCustomer,
    setEditingCustomer,
    setSelectedCustomer,
    closeModal,
    setAccordionExpanded,
    setMode,
  };
  return (
    <UiContext.Provider value={defaultContext}>{children}</UiContext.Provider>
  );
};

export { UiContext, UiContextProvider };
