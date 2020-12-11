import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import UpdateIcon from '@material-ui/icons/Update'
import { retrieveData } from '../utils/StoreHandler';
import {useSelector} from 'react-redux'
const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));


const RefreshButton = (props) => 
{

  const modificationDates = useSelector(state => state.modificationData)
  const classes = useStyles();
    const onClickBtnHandler = () =>{
        retrieveData(modificationDates,props.data,props.type);
  }
    return (
      <div style={{display: "inline-block", margin: "auto",
      width: "100%",
      padding: "10px",
      textAlign: "center"}}>
        <Button
        variant="contained"
        color="primary"
        onClick={onClickBtnHandler}
        className={classes.button}
        endIcon={<UpdateIcon/>}
      >
        Update data
      </Button>
      <p>{modificationDates[props.typeNumber]}</p>
      </div>
       
    
    );
};

export default RefreshButton;