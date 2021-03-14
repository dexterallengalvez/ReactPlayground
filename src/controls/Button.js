import React from "react";
import { Button as MuiButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    "& .MuiButton-label": {
      textTransform: "none",
    },
  },
}));

const Button = (props) => {
  //Get the details of the props
  const { children, color, variant, onClick, className, ...other } = props;

  //Get the styles defined for the component
  const classes = useStyles();

  return (
    <MuiButton
      className={classes.root + " " + (className || "")}
      variant={variant || "contained"}
      onClick={onClick}
      {...other}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
