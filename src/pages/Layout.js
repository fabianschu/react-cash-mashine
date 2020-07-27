import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwitchModeToggle from "../components/SwitchModeToggle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    padding: (mobile) => {
      if (mobile) {
        return "0";
      }
      return "50px";
    },
    // width: "100vw",
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
    backgroundImage:
      "linear-gradient(to right top, #f7f7f7, #eff3fa, #dff0fc, #cceff8, #bceeec)",
  },
}));

const Layout = (props) => {
  const theme = useTheme();
  const classes = useStyles(useMediaQuery(theme.breakpoints.down("sm")));

  return <div className={classes.root}>{props.children}</div>;
};

export default Layout;
