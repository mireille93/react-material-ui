import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Header = () => {
    return(
        <div>
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="title" color="default">
                        React JS- Material-UI - TVMAZE Films Application
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default Header;


