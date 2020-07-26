import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { UiContext } from "./context/UiContext";
import { CustomersContext } from "./context/CustomersContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import InputField from "./InputField";
import axios from "axios";

const Modal = (props) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const {
    closeModal,
    creatingCustomer,
    setSelectedCustomer,
    selectedCustomer,
  } = useContext(UiContext);
  const { customers, setCustomers } = useContext(CustomersContext);

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={creatingCustomer}
        onClose={closeModal}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Neuen Kunden Erstellen"}
        </DialogTitle>
        <DialogContent>
          <div>
            <Formik
              initialValues={{
                firm: "",
                firstName: "",
                lastName: "",
                street: "",
                zip: "",
                city: "",
                country: "",
                taxId: "",
                hourlyRate: "",
              }}
              validate={(values) => {
                // const errors = {};
                // if (!values.email) {
                //   errors.email = "Required";
                // } else if (
                //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                // ) {
                //   errors.email = "Invalid email address";
                // }
                // return errors;
              }}
              onSubmit={async (values, { setSubmitting }) => {
                console.log(values);
                try {
                  const newCustomer = await axios.post(
                    `http://localhost:5000/customers`,
                    values
                  );
                  const allCustomers = await axios.get(
                    "http://localhost:5000/customers"
                  );
                  setCustomers(allCustomers.data);
                  setSelectedCustomer(newCustomer.data);
                  closeModal();
                } catch (error) {
                  console.log(error);
                }
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Field component={InputField} name="firm" />
                  <Field component={InputField} name="firstName" />
                  <Field component={InputField} name="lastName" />
                  <Field component={InputField} name="street" />
                  <Field component={InputField} name="zip" />
                  <Field component={InputField} name="city" />
                  <Field component={InputField} name="country" />
                  <Field component={InputField} name="hourlyRate" />
                  <ErrorMessage name="email" component="div" />
                  <button type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={closeModal} color="primary">
            Abbrechen
          </Button>
          <Button
            onClick={closeModal}
            color="primary"
            autoFocus
            variant="contained"
          >
            Erstellen
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Modal;
