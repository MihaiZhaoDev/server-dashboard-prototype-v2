import React, {Component, useState} from 'react';

import moment from 'moment-timezone'

import {Snackbar} from '@material-ui/core';

import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginTop: 20,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    btnAction: {
        margin: 'auto'
    }
});

const Timezone = ({timezone, timezoneDisplay, changeTimezone}) => {
    const classes = useStyles();


    const [newTimezone, setNewTimezone] = useState(timezone);
    const [openDialogTimezoneSettings, setOpenDialogTimezoneSettings] = React.useState(false);

    const handleClickOpenDialogTimezoneSettings = () => {
        setOpenDialogTimezoneSettings(true);
    };
    const handleCloseDialogTimezoneSettings = () => {
        setOpenDialogTimezoneSettings(false);

    };
    const handleTimezoneChange = (e) => {
        setNewTimezone(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        changeTimezone(newTimezone);
    };

    return (
        <Container>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Current Timezone: {timezone}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {timezoneDisplay}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="large" className={classes.btnAction} onClick={handleClickOpenDialogTimezoneSettings}>Change
                        timezone</Button>
                </CardActions>
            </Card>

            <Dialog open={openDialogTimezoneSettings} onClose={handleCloseDialogTimezoneSettings} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Change Timezone</DialogTitle>
                <form onSubmit={onSubmit}>
                    <DialogContent>
                        <DialogContentText>
                            Please insert a new timezone using this format: Region/City
                        </DialogContentText>

                        <TextField
                            autoFocus
                            name="timezone"
                            margin="dense"
                            id="timezone"
                            label="Timezone"
                            type="text"
                            defaultValue={timezone}
                            onChange={handleTimezoneChange}
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDialogTimezoneSettings} color="primary">
                            Cancel
                        </Button>
                        <Button type="submit" color="primary">
                            Change
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>

        </Container>
    );

}

export default Timezone;
