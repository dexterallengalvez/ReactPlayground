import React from 'react'
import {makeStyles} from "@material-ui/core"

//Create the style that will be used as the class of the form component
const useStyles = makeStyles(theme => ({
    root:{
        '& .MuiFormControl-root':{
            width: '90%',
            margin: theme.spacing(1)
        }
    }
}))

export default function Form(props){
    const classes = useStyles();

    //assign the const children if passed via the props
    const {children, ...other} = props;

    return(
        <form className={classes.root} noValidate autoComplete="off" {...other}>
            {props.children}
        </form>
    )
}