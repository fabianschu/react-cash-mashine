import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Table from "./Table";
import { UiContext } from "./context/UiContext";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: "80%",
    // minWidth: "740px",
    // width: "90%",
    // borderRadius: "0px",
    // marginBottom: "30px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  container: {
    // marginBottom: "40px",
  },
  swoot: {},
}));

export default function ControlledAccordions(props) {
  const classes = useStyles();
  const { accordionExpanded, setAccordionExpanded } = useContext(UiContext);
  const { disabled, data, title } = props;

  const handleChange = () => (event, isExpanded) => {
    console.log(isExpanded);
    setAccordionExpanded(isExpanded ? true : false);
  };

  console.log(accordionExpanded);
  return (
    <div className={classes.container}>
      <Accordion
        expanded={accordionExpanded}
        onChange={handleChange(true)}
        classes={{ root: classes.root }}
        elevation={0}
        square
        disabled={disabled}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Show Details</Typography>
          <Typography className={classes.secondaryHeading}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails p={0} className={classes.swoot}>
          <Table rows={data} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
