import React, {Component, useState} from 'react';

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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
    },
});

const Timezone = ({logger, changeLogger}) => {
    const classes = useStyles();

    const [newLogger, setNewLogger] = React.useState(logger);
    const [openDialogLoggerSettings, setOpenDialogLoggerSettings] = React.useState(false);

    const handleClickOpenDialogLoggerSettings = () => {
        setOpenDialogLoggerSettings(true);
    };
    const handleCloseDialogLoggerSettings = () => {
        setOpenDialogLoggerSettings(false);

    };

    const handleLoggerChange = (e) => {
        setNewLogger(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        changeLogger(newLogger);
    };

    return (
        <Container>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Current logger: {logger}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="large" className={classes.btnAction} onClick={handleClickOpenDialogLoggerSettings}>Change
                        timezone</Button>
                </CardActions>
            </Card>

            <Dialog open={openDialogLoggerSettings} onClose={handleCloseDialogLoggerSettings} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Change Logger</DialogTitle>
                <form onSubmit={onSubmit}>
                    <DialogContent>
                        <DialogContentText>
                            Please select the logger from the list
                        </DialogContentText>

                        <FormControl fullWidth={true}>
                            <InputLabel id="select-logger-label">Logger</InputLabel>
                            <Select
                                labelId="select-logger-label"
                                id="select-logger"
                                value={newLogger}
                                onChange={handleLoggerChange}
                            >
                                <MenuItem value="error">Error</MenuItem>
                                <MenuItem value="debug">Debug</MenuItem>
                                <MenuItem value="info">Info</MenuItem>
                            </Select>
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDialogLoggerSettings} color="primary">
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
