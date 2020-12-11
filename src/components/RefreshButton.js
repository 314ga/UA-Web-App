import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import UpdateIcon from '@material-ui/icons/Update'
import { retrieveData } from '../utils/StoreHandler'
const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  
const RefreshButton = (props) => 
{
    const classes = useStyles();
    const onClickBtnHandler = () =>{
        retrieveData(props.data,props.type);
        console.log(props.data + props.type);
  }
    return (
        <Button
        variant="contained"
        color="primary"
        onClick={onClickBtnHandler}
        className={classes.button}
        endIcon={<UpdateIcon/>}
      >
        Update data
      </Button>
    
    );
};

export default RefreshButton;