import React from 'react';
import clsx from 'clsx';
import logo from '../../pages/images/logoYellow.svg';

import {
    Box,
    Container,
    Divider,
    Grid,
    Link,
    Typography,
    withStyles,
    IconButton,
} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = (theme) => ({
    root: {
        // backgroundColor: theme.palette.primary.light,
        // overflow: 'hidden',
        // '& p': {
        //     fontSize: '1rem',
        //     paddingLeft: 15,
        // },
    },
    yellowWrapper: {
        backgroundColor: theme.palette.background.yellow,
        height: 180,
    },
    blackWrapper: {
        padding: '30px 0 20px',
        backgroundColor: theme.palette.background.dark,
        color: theme.palette.text.yellow,
    },
    // contactPhone: {
    //     display: 'block',
    //     width: 200,
    //     margin: '0 auto',
    //     [theme.breakpoints.down('sm')]: {},
    //     '& div': {
    //         paddingTop: 10,
    //         paddingBottom: 5,
    //     },
    // },
    // placeBox: {
    //     display: 'block',
    //     textAlign: 'left',
    //     width: 200,
    //     [theme.breakpoints.down('sm')]: {},
    // },
    // adressFooter: {
    //     [theme.breakpoints.down('sm')]: {
    //         display: 'block',
    //         width: 200,
    //         margin: '0 auto',
    //         '& p': {
    //             // fontSize: '0.8rem',
    //             // paddingBottom:15,
    //         },
    //     },
    // },
    // mapFooter: {
    //     '& p': {
    //         fontSize: '0.8rem',
    //         paddingLeft: 40,
    //     },
    // },
    logoNavBar: {
        maxWidth: 180,
    },
    footerDivider: {
        backgroundColor: theme.palette.secondary.main,
        marginTop: theme.spacing(7),
        marginBottom: theme.spacing(4),
        [theme.breakpoints.down('sm')]: {
            paddingTop: 0,
        },
    },
});


function Footer({ classes, id }) {
    const Logo = () => {
        return (
            <Link
                underline="none"
                color="inherit"
                className={classes.titleLink}
                href="/"
            >
                <img alt="Trener osobisty Warszawa Mokotów" src={logo} className={classes.logoNavBar} />
            </Link>
        );
    };
    return (
        <React.Fragment>
            {/* <section  className={classes.root}> */}
            <Box id={id} name="contact" className={classes.yellowWrapper} />

            <Box
                component="footer"
                className={clsx(classes.root, classes.blackWrapper)}
            >
                <Container maxWidth="md">
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={3}>
                            <Box py={4} display="flex" justifyContent="center">
                                <Logo />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box
                                m={2}
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Typography
                                    // component="Link"
                                    href="0048608472294"
                                    variant="body1"
                                    color="secondary"
                                >
                                    + 48 608 472 294
                                </Typography>
                            </Box>
                            <Box m={2} display="flex" justifyContent="center">
                                <Typography variant="body1" color="initial">
                                    anubias19@op.pl
                                </Typography>
                            </Box>
                            <Box m={2} display="flex" justifyContent="center">
                                <Typography variant="body1" color="initial">
                                    ul. Józefa Piusa Dziekońskiego 1, 00-728 Warszawa
                                </Typography>
                            </Box>
                            <Box m={2} display="flex" justifyContent="center">
                                <Link
                                    href="https://g.page/trenerrafal?share"
                                    color="secondary"
                                    variant="body2"
                                >
                                    Sprawdź na mapie
                                </Link>
                                <OpenInNewIcon fontSize="small" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Box py={5} display="flex" justifyContent="center">
                                <IconButton
                                    href="https://www.youtube.com/channel/UCV70wJdF3cotToSLfV0gO8w"
                                    aria-label="facebook"
                                    color="secondary"
                                >
                                    <YouTubeIcon
                                        style={{ fontSize: '3.5rem' }}
                                        title="YouTube logo"
                                    />
                                </IconButton>
                                <IconButton
                                    href="https://www.facebook.com/trenerrafalkiszlo/"
                                    aria-label="facebook"
                                    color="secondary"
                                >
                                    <FacebookIcon
                                        style={{ fontSize: '3.5rem' }}
                                        title="facebook logo"
                                    />
                                </IconButton>

                                <IconButton
                                    href="https://www.instagram.com/trener_rafal_kiszlo"
                                    aria-label="Instagram"
                                    color="secondary"
                                >
                                    <InstagramIcon
                                        style={{ fontSize: '3.5rem' }}
                                        title="Instagram logo"
                                    />
                                </IconButton>
                            </Box>
                        </Grid>
                    </Grid>
                    {/* <Divider color="initial" />
                    <Box textAlign="center">
                        <Typography variant="body2" color="initial">
                            2020 Copyright
                        </Typography>
                    </Box> */}
                </Container>

                <Divider className={classes.footerDivider} />
                <Box textAlign="center">
                    <Typography variant="body2" color="initial">
                        2020 Copyright
                    </Typography>
                </Box>
            </Box>
           
        </React.Fragment>
    );
}

export default withStyles(useStyles)(Footer);
