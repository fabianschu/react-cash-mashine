import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { UiContext } from "../context/UiContext";
import CustomerForm from "./CustomerForm";

const Modal = (props) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const {
    closeModal,
    creatingCustomer,
    editingCustomer,
    creatingInvoice,
  } = useContext(UiContext);

  const renderModalContent = () => {
    if (creatingCustomer || editingCustomer) {
      return <CustomerForm />;
    }
    if (creatingInvoice) {
      return <div>hi</div>;
    }
  };
  console.log(creatingInvoice);
  console.log(creatingCustomer);
  console.log(editingCustomer);
  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        maxWidth={"md"}
        fullWidth={true}
        open={creatingCustomer || editingCustomer || creatingInvoice}
        onClose={closeModal}
        aria-labelledby="responsive-dialog-title"
      >
        {renderModalContent()}
      </Dialog>
    </div>
  );
};

export default Modal;
