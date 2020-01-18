import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Footer = () => {
    return(
        <div>
            <AppBar position="default">
                <Toolbar>
                    <Typography variant="title" color="secondary">
                        NOBO experience the good. life
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default Footer;


