import React from 'react';
import {
    withStyles,
    Grid,
    Box,
    Container,
    Typography,
    Fab,
    Fade,
} from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
// import { getCorrectEventName } from '@material/animation'
import { useRef } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const useStyles = (theme) => ({
    root: {
        backgroundColor: theme.palette.background.white,
        overflow: 'hidden',
    },

    heroClaim: {
        padding: theme.spacing(40),
        paddingTop: theme.spacing(25),
        paddingBottom: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        lineHeight: theme.spacing(1),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(10),
            paddingTop: theme.spacing(7),
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(5),
            paddingTop: theme.spacing(7),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            lineHeight: theme.spacing(1),
        },

        '& h1': {
            fontSize: '3rem',
            textAlign: 'left',
            paddingBottom: theme.spacing(8),
            paddingTop: theme.spacing(5),
            // transform: '',
            // opacity: 1,
            // transition: 'opacity 4.75s ease-in-out',
            [theme.breakpoints.down('sm')]: {
                textAlign: 'center',
                fontSize: '2rem',
            },
        },
        '& h2': {
            fontSize: '1.3rem',
            fontWeight: 200,
            textAlign: 'left',
            paddingBottom: theme.spacing(20),
            lineHeight: 2,
            // transform: 'translateX(12.5em)',
            // transition: 'transform 2s ease-in-out',
            [theme.breakpoints.down('md')]: {
                fontSize: '1.1rem',
            },
            [theme.breakpoints.down('sm')]: {
                paddingTop: theme.spacing(5),
                paddingBottom: theme.spacing(10),
                textAlign: 'center',
                fontSize: '1rem',
            },
        },
    },
    heroPicturesWrapper: {
        padding: 0,
        [theme.breakpoints.down('sm')]: {},
    },
    heroPictures1: {
        position: 'relative',
        padding: 0,
    },
    heroPictures2: {
        position: 'absolute !important',
        width: '40%',
        top: theme.spacing(50),
        zIndex: -1,
        [theme.breakpoints.down('sm')]: {
            width: '80%',
            top: theme.spacing(138),
            left: theme.spacing(8),
        },
    },
    phonePulse: {
        width: theme.spacing(30),
        height: theme.spacing(30),
        borderRadius: '50%',
        background: theme.palette.primary.main,
        animation: `$pulse 2.5s linear infinite`,
        '&:hover': {
            animation: 'none',
        },
        [theme.breakpoints.down('sm')]: {
            width: theme.spacing(22),
            height: theme.spacing(22),
        },
    },
    '@keyframes pulse': {
        '0%': {
            boxShadow: '0 0 0 0 rgba(204,169,44, 0.8)',
        },
        '20%': {
            boxShadow: '0 0 0 18px rgba(204,169,44, 0)',
        },
        '100%': {
            boxShadow: '0 0 0 0 rgba(204,169,44, 0)',
        },
    },
});

const query = graphql`
    query {
        picHero1: file(
            relativePath: { eq: "pages/images/trener-rafal-tlo-hero.png" }
        ) {
            childImageSharp {
                fluid(maxWidth: 695, maxHeight: 858) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        picHero2: file(relativePath: { eq: "pages/images/bcg1-hero.png" }) {
            childImageSharp {
                fluid(maxWidth: 899, maxHeight: 814) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

function Hero(props) {

    const { classes } = props;

    const data = useStaticQuery(query);

    return (
        <section className={classes.root}>
            <Grid container className={classes.container}>
                <Grid item xs={12} md={7}>
                    <Box className={classes.heroClaim}>
                        <Box>
                            <Typography variant="h1">
                                Stań się lepszą wersją siebie!
                            </Typography>

                            <Typography variant="h3" component="h2">
                                Rafał Kiszło - Trener Personalny i najlepszy
                                motywator w mieście! Zapraszam na wspólne
                                treningi na Mokotowie.
                            </Typography>
                        </Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            className={classes.iconPhoneWrapper}
                        >
                            <Fade in appear={false} timeout={1500}>
                                <Fab
                                    className={classes.phonePulse}
                                    color="primary"
                                    aria-label="call"
                                    href="tel:+48608472294"
                                >
                                    <PhoneIcon
                                        color="secondary"
                                        style={{ fontSize: 57 }}
                                    />
                                </Fab>
                            </Fade>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Box p={4} className={classes.heroPicturesWrapper}>
                        <Box>
                            <Img
                                className={classes.heroPictures1}
                                fluid={data.picHero1.childImageSharp.fluid}
                                alt=""
                            />
                            <Img
                                className={classes.heroPictures2}
                                fluid={data.picHero2.childImageSharp.fluid}
                                alt=""
                            />
                        </Box>
                        <Box></Box>
                    </Box>
                </Grid>
            </Grid>
        </section>
    );
}

export default withStyles(useStyles)(Hero);
