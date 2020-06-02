import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import NavBar from '../components/navBar';
import About from '../components/about';
import Hero from '../components/hero';
import Experiences from '../components/experiences';
import Testimondials from '../components/testimondials';
import SuccessStory from '../components/successStory';
import AskYourself from '../components/askYourself';
import Footer from '../components/footer';

import {
    makeStyles,
    Box,
    useScrollTrigger,
    Container,
    Fab,
    Zoom,
    Button,
} from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

// import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

// const useStyles = (theme) => ({
//   root: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     //  backgroundColor: "#d4d4d4"
//   },
//   wrapper: {
//     height: 300,
//     display: "block",
//   },
// });
const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

function Index(props) {
    //  function scrollToTop() {
    //   scroll.scrollToTop();
    // }
    // function scrollTo() {
    //   scroller.scrollTo('scroll-to-element', {
    //     duration: 800,
    //     delay: 0,
    //     smooth: 'easeInOutQuart'
    //   })
    //   }

    // const { classes } = props;
    function ScrollTop(props) {
        const { children, window } = props;
        const classes = useStyles();
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
    const content = (
        <React.Fragment>
            <Hero />
            {/* <a >Doświadczenie</a> */}
            <Experiences id="experience" />
            <About />
            {/* <a id="testimondial">Opinie</a> */}
            <Testimondials id="testimondials" />
            <AskYourself />
            {/* <a id="success-story">Metamorfozy</a> */}
            <SuccessStory id="successStories" />
            <Footer id="contact" />
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
