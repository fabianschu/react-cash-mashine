import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    width: "140px",
    display: "flex",
    justifyContent: "flex-start",
    // color: "white",
    // backgroundColor: "black",
    // height: "50px",
    // backgroundImage:
    //   "linear-gradient(to left bottom, #2d047a, #280672, #240869, #200861, #1c0959, #1c0954, #1b0a4e, #1b0a49, #1c0a45, #1d0b42, #1e0b3e, #1e0c3b)",
  },
}));

const ModalButton = (props) => {
  const { disabled, handleClick, currentState, type } = props;
  const classes = useStyles();

  const renderIcon = () => {
    switch (type) {
      case "create":
        return <AddIcon />;
      case "edit":
        return <EditIcon />;
      case "print":
        return <PictureAsPdfIcon />;
    }
  };

  const renderCaption = () => {
    switch (type) {
      case "create":
        return "Erstellen";
      case "edit":
        return "Bearbeiten";
      case "print":
        return "Rechnung";
    }
  };

  return (
    <Button
      // variant="contained"
      color="secondary"
      className={classes.root}
      variant="contained"
      // size="large"
      disabled={disabled}
      onClick={() => handleClick(!currentState)}
      startIcon={renderIcon()}
    >
      {renderCaption()}
    </Button>
  );
};

export default ModalButton;
