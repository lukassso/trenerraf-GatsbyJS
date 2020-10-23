import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import {
    Box,
    Container,
    Grid,
    Paper,
    Typography,
    withStyles,
    IconButton,
    Toolbar,
    Button,
    Dialog,
    AppBar,
    Slide,
} from '@material-ui/core';
import LaunchIcon from '@material-ui/icons/Launch';
import CloseIcon from '@material-ui/icons/Close';
import CallMade from '@material-ui/icons/CallMade';
import { experiencesList } from './experiencesList'

const styles = (theme) => ({
root:{},
dialog:{
    transform: "translateZ(0)"
},
appBar: {
    transform: "translateZ(0)"
},
iconButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexGrow: 1
},
containerWrapper: {
    padding: theme.spacing(4)
}
})


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const DialogExpanded = ({classes, handleClose, open, experienceName  }) => {
        return (
                <Dialog
                    fullScreen
                    open={open}
                    onClose={handleClose}
                    className={classes.dialog}
                    TransitionComponent={Transition}
                >
                    <AppBar position="sticky" className={classes.appBar}>
                        <Toolbar>
                            <IconButton
                                className={classes.iconButton}
                                edge="start"
                                color="inherit"
                                onClick={handleClose}
                                aria-label="close"
                            >
                                <CloseIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Box className={classes.containerWrapper} >
                        <Typography variant="p" color="initial">
                            {experienceName}
                        </Typography>
                    </Box>
                </Dialog>
        )
            
    }

    export default withStyles(styles)(DialogExpanded)