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
} from '@material-ui/core';
import LaunchIcon from '@material-ui/icons/Launch';
import CloseIcon from '@material-ui/icons/Close';
import CallMade from '@material-ui/icons/CallMade';

import DialogExpanded from './components/DialogExpanded';
import { experiencesList } from './components/experiencesList';

const useStyles = (theme) => ({
    root: {
        position: 'relative',
        backgroundColor: theme.palette.background.gray,
        // paddingTop: 50,
        maxHeight: 1750,
        [theme.breakpoints.down('sm')]: {
            maxHeight: 2250,
        },
    },
    expHeader: {
        textAlign: 'center',
    },
    expPaper: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderColor: theme.palette.primary.main,
        minHeight: 120,
        margin: 10,
        padding: 25,
        [theme.breakpoints.down('sm')]: {
            minHeight: 120,
            margin: 10,
            padding: 25,
        },
        '& h2': {
            fontSize: '1.2rem',
            fontWeight: 600,
            lineHeight: 1.2,
            textAlign: 'center',
            [theme.breakpoints.down('sm')]: {
                fontSize: '1rem',
                lineHeight: 1.1,
            },
        },
        '& p': {
            position: 'absolute',
            bottom: 20,
            [theme.breakpoints.down('sm')]: {
                fontSize: '0.8rem',
            },
        },
    },

    expWrapper: {
        // paddingBottom: 120,
    },
    expFooterImage: {
        zIndex: 1,
        position: 'absolute',
        top: 20,
        [theme.breakpoints.down('sm')]: {},
    },
    prizesText: {
        paddingLeft: 20,
        lineHeight: '1.4',
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.9rem',
            // lineHeight: '1.4',
            fontWeight: '600',
        },
    },
    priceWrapper: {
        padding: '60px 20px',
        [theme.breakpoints.down('sm')]: {
            padding: '50px 20px ',
        },
    },
    priceHeader: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 40,
        borderBottom: '1px solid black',
        borderTop: '1px solid black',
    },
    btnCallMade: {
        position: 'absolute',
        top: '0',
        right: '0',
    },
});

const query = graphql`
    query {
        pic1: file(relativePath: { eq: "pages/images/superfm-1.png" }) {
            childImageSharp {
                fluid(maxWidth: 216, maxHeight: 120) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        pic2: file(relativePath: { eq: "pages/images/trener-rafal-bcg2.png" }) {
            childImageSharp {
                fluid(maxWidth: 620, maxHeight: 517) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

function Experienses({ classes, id }) {
    const data = useStaticQuery(query);

    const experienceMap = () => {
        const [open, setOpen] = React.useState(false);
        const [experience, setExperience] = React.useState(null);

        function handleClickOpen(event, item) {
            event.persist();
            setOpen(true);
            setExperience(item);
            console.log(item);
        }

        const handleClose = () => {
            setOpen(false);
        };

        return (
            <div style={{ margin: 0, padding: 0 }}>
                <Grid container spacing={1} justify="center">
                    {experiencesList.map((experience) => (
                        <Grid
                            key={experience.id}
                            // className={classes.expItem}
                            item
                            xs={6}
                            sm={4}
                        >
                            <Paper
                                className={classes.expPaper}
                                elevation={0}
                                variant="outlined"
                                 onClick={(event) =>
                                        handleClickOpen(event, experience)
                                    }
                            >
                                <Typography key={experience.name} variant="h5" component='h2'>
                                    {experience.name}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    key={experience.area}
                                >
                                    {experience.area}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
                {open && experience && (
                    <DialogExpanded
                        handleClose={handleClose}
                        open={open}
                        experienceName={experience.content}
                    />
                )}
            </div>
        );
    };

    return (
        <section id={id} className={classes.root}>
            <Container className={classes.priceWrapper} maxWidth="sm">
                <Box className={classes.priceHeader}>
                    <Box style={{ width: '30%' }}>
                        <Img fluid={data.pic1.childImageSharp.fluid} alt="" />
                    </Box>
                    <Box>
                        <Typography className={classes.prizesText} variant="h4">
                            Zwycięzca konkursu Fitness Motywatory 2017 w
                            kategorii Trener Personalny
                        </Typography>
                    </Box>
                </Box>

                <Box pt={12} pb={1}>
                    <Typography className={classes.expHeader} variant="h3">
                        Przebyte kursy i szkolenia
                    </Typography>
                </Box>
            </Container>

            <Container className={classes.expWrapper} maxWidth="md">
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    {experienceMap()}
                </Grid>
            </Container>

            <Container style={{ position: 'relative' }} maxWidth="sm">
                <Img
                    className={classes.expFooterImage}
                    fluid={data.pic2.childImageSharp.fluid}
                    alt="trening personalny w Warszawie"
                />
            </Container>
        </section>
    );
}

export default withStyles(useStyles)(Experienses);
