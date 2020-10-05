import React from 'react';
import Layout from '../layout';
import NavBar from '../components/navBar';
import About from '../components/about';
import Hero from '../components/hero';
import Experiences from '../components/experiences';
import Testimondials from '../components/testimondials';
import SuccessStory from '../components/successStory';
import AskYourself from '../components/askYourself';
import Footer from '../components/footer';
import 'animate.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { Fab, makeStyles, useScrollTrigger, Zoom } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        zIndex: 2,
    },
}));

function Index(props) {
    const classes = useStyles();
    function ScrollTop(props) {
        const { children, window } = props;
        // Note that you normally won't need to set the window ref as useScrollTrigger
        // will default to window.
        // This is only being set here because the demo is in an iframe.
        const trigger = useScrollTrigger({
            target: window ? window() : undefined,
            disableHysteresis: true,
            threshold: 100,
        });

        const handleClick = (event) => {
            const anchor = (
                event.target.ownerDocument || document
            ).querySelector('#back-to-top-anchor');

            if (anchor) {
                anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        };

        return (
            <Zoom in={trigger}>
                <div
                    onClick={handleClick}
                    role="presentation"
                    className={classes.root}
                >
                    {children}
                </div>
            </Zoom>
        );
    }

    const timeout = {
        enter: 800,
        exit: 400,
    };

    const content = (
        <React.Fragment>
            <TransitionGroup component="div" className={classes.app}>
                {/* <CSSTransition
                    timeout={timeout}
                    mountOnEnter={false}
                    unmountOnExit={true}
                > */}
                    <Hero />
                    {/* <a >Doświadczenie</a> */}
                    <SuccessStory id="successStories" />
                    <Experiences id="experience" />
                    <About />
                    {/* <a id="testimondial">Opinie</a> */}
                    <Testimondials id="testimondials" />
                    <AskYourself />
                    {/* <a id="success-story">Metamorfozy</a> */}

                    <Footer id="contact" />
                {/* </CSSTransition> */}
                <ScrollTop {...props}>
                    <Fab
                        color="secondary"
                        size="small"
                        aria-label="scroll back to top"
                    >
                        <KeyboardArrowUpIcon />
                    </Fab>
                </ScrollTop>
                {/* <a onClick={scrollToTop}>To the top!</a> */}
            </TransitionGroup>
        </React.Fragment>
    );
    return (
        <Layout>
            <NavBar />
            {content}
        </Layout>
    );
}

// export default withStyles(useStyles)(Index);
export default Index;
