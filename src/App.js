import React, {useState} from 'react';
import axios from 'axios';
import api from './Config/api';
import './App.css';

import Timezone from './Component/Timezone';
import Header from "./Component/Header";
import LoggerSettings from "./Component/LoggerSettings";

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import moment from "moment-timezone";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function App() {
    // API

    // STATES
    const [timezone, setTimezone] = useState('Europe/Paris');
    const [clock, setClock] = useState( moment().tz(timezone).format('LL LT') );
    const [logger, setLogger] = useState('error');
    const [snackbar, setSnackbar] = React.useState({open: false, message: '', severity: ''});

    // TIMEZONE
    const changeTimezone = (newTimezone) => {

        axios.put(api.updateTimezone, {
            timezone: newTimezone
        })
            .then(res => {
                let data = res.data;

                if(data.success) {
                    setTimezone(data.timezone);
                    setClock( moment().tz(data.timezone).format('LL LT') );
                    handleOpenSnackbar(data.success.message, 'success');
                }

            })
            .catch( (e) => {
                if(e.response.data) {
                    handleOpenSnackbar(e.response.data.message, 'error');
                }
            });

    };

    // Logger
    const changeLogger = (newLogger) => {
        axios.put(api.updateLogger, {
            loggerLevel: newLogger
        })
            .then(res => {
                let data = res.data;

                if(data.success) {
                    setLogger(data.level);
                    handleOpenSnackbar(data.success.message, 'success');
                }

            })
            .catch( (e) => {
                if (e.response) {
                    if(e.response.data) {
                        handleOpenSnackbar(e.response.data.message, 'error');
                    }
                }

                else {
                    handleOpenSnackbar('No response from server.', 'error');
                }

            });
    }

    // SNACKBAR
    const handleOpenSnackbar = (message, severity) => {
        setSnackbar({...snackbar, open: true, message: message, severity: severity});
    };
    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbar({...snackbar, open: false});
    };

    // UPDATING CLOCK
    const updateTime = () => {
        setClock( moment().tz(timezone).format('LL LT') );
    }
    setInterval(() => {
        updateTime();
    }, 60000);

    return (
        <div className="App">
            <Header/>
            <Timezone timezone={timezone} timezoneDisplay={clock} changeTimezone={changeTimezone}/>
            <LoggerSettings logger={logger} changeLogger={changeLogger} />

            <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </div>
    );




}

export default App;
