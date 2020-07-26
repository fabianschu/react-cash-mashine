import React, { useContext } from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { UiContext } from "../context/UiContext";

export default function SwitchModeToggle() {
  const { mode, setMode, setSelectedProjects } = useContext(UiContext);

  const handleAlignment = (event, newMode) => {
    setMode(newMode);
    if (newMode === "work") {
      setSelectedProjects([]);
    }
  };

  return (
    <ToggleButtonGroup
      value={mode}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="work" aria-label="left aligned">
        Work Mode
      </ToggleButton>
      <ToggleButton value="cash" aria-label="centered">
        Cash Mode
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
