import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "./Accordion";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
    display: "flex",
    alignItems: "center",
    // justifyContent: "space-evenly",
    backgroundColor: "white",
    // maxWidth: "80%",
    minWidth: "700px",
  },
}));

const GenericWidget = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.root} display="flex">
      {props.children}
    </Box>
  );
};

export default GenericWidget;
