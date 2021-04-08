import React from "react";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SnackbarUI = ({openSnackbar, messageSnackbar, severitySnackbar}) => {

    const handleClose = () => {
        openSnackbar.setState(false);
    }

    return(
        <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleClose}>
            <Alert severity={messageSnackbar}>
                {severitySnackbar}
            </Alert>
        </Snackbar>
    )
}

export default SnackbarUI;
