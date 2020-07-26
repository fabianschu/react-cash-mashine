import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";

const useStyles = makeStyles((theme) => ({
  button: {
    // margin: theme.spacing(1),
    width: "50px",
    color: "white",
    height: "50px",
    backgroundImage:
      "linear-gradient(to left bottom, #2d047a, #280672, #240869, #200861, #1c0959, #1c0954, #1b0a4e, #1b0a49, #1c0a45, #1d0b42, #1e0b3e, #1e0c3b)",
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

  return (
    <IconButton
      // variant="contained"
      color="secondary"
      className={classes.button}
      // size="large"
      disabled={disabled}
      onClick={() => handleClick(!currentState)}
    >
      {renderIcon()}
    </IconButton>
  );
};

export default ModalButton;
