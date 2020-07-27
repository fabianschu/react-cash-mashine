import React, { useContext } from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { UiContext } from "../context/UiContext";
import { CustomersContext } from "../context/CustomersContext";
import { useTheme } from "@material-ui/core/styles";

const InvoiceOverview = () => {
  const theme = useTheme();
  const { closeModal, selectedCustomer } = useContext(UiContext);
  const {
    firm,
    street,
    zip,
    city,
    country,
    firstName,
    lastName,
    hourlyRate,
  } = selectedCustomer;

  return (
    <>
      <DialogTitle id="responsive-dialog-title">Rechnung erstellen</DialogTitle>
      <DialogContent>
        <Box variant="h2" fontWeight="fontWeightBold">
          Kundendetails
        </Box>
        <Box>{firm}</Box>
        <Box>{street}</Box>
        <Box>
          {zip} {city}
        </Box>
        <Box>{country}</Box>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={closeModal} color="primary">
          Abbrechen
        </Button>
        <Button
          color="primary"
          autoFocus
          variant="contained"
          type="submit"
          // onClick={handleSubmit(props.values)}
        >
          PDF
        </Button>
      </DialogActions>
    </>
  );
};

export default InvoiceOverview;
