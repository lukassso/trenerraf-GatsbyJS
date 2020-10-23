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
root:{}
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
                    TransitionComponent={Transition}
                >
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleClose}
                                aria-label="close"
                            >
                                <CloseIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Box display="flex" justifyContent="center" mt={20}>
                        <Typography variant="p" color="initial">
                            {experienceName}
                        </Typography>
                    </Box>
                </Dialog>
        )
            
    }

    export default withStyles(styles)(DialogExpanded)