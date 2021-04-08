import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appbar: {
        alignItems: 'center',
    }
}));

const Header = () => {
    const classes = useStyles();

    return(
        <AppBar position="static" className={classes.appbar}>
            <Toolbar>
                <Typography variant="h6">
                    Server Dashboard
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
