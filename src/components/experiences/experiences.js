import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';
// import { motion } from 'framer-motion';
import {Box, Container, Grid, Paper, Typography, withStyles,} from '@material-ui/core';

const useStyles = (theme) => ({
    root: {
        position: 'relative',
        backgroundColor: theme.palette.background.gray,
        // paddingTop: 50,
        maxHeight: 1550,
        [theme.breakpoints.down('sm')]: {
            maxHeight: 1950,
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
        '& h5': {
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
        padding: '60px 20px 0',
        [theme.breakpoints.down('sm')]: {
            padding: '0px 20px ',
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

function Experienses({classes, id}) {
    const data = useStaticQuery(query);

    const experiencesList = [
        {id: 1, name: 'Trener personalny', area: 'Instruktor'},
        {id: 2, name: 'Nurek CMASS', area: 'Instruktor'},
        {id: 3, name: 'Kettlebells', area: 'Instruktor'},
        {id: 4, name: 'Kulturystyka', area: 'Instruktor'},
        {id: 5, name: 'Trening funkcjonalny', area: 'Instruktor'},
        {id: 7, name: 'Trójbój siłowy', area: 'Instruktor'},
        {id: 8, name: 'Samoobrona', area: 'Instruktor'},
        {id: 9, name: 'Indoor cycling', area: 'Instruktor'},
        {id: 10, name: 'Speening star', area: 'Instruktor'},
        {id: 11, name: 'Zdrowy kręgosłup', area: 'Certyfikat IFAA'},
        {id: 12, name: 'Patologie kręgosłupa', area: 'Certyfikat IFAA'},
        {id: 13, name: 'Biodro staw życia', area: 'Biernat'},
        {id: 14, name: 'Kolano - biodra i stopy', area: 'Biernat'},
        {id: 15, name: 'Stopa - nasza podpora', area: 'Biernat'},
        {id: 16, name: 'Bark nie musi być skomplikowany', area: 'Biernat'},
        {id: 17, name: 'Kształtowanie kobiecej sylwetki ', area: 'CSS'},
        {id: 18, name: 'Redukacja bez liczenia kalorii', area: 'Tadeusz Sowinski'},
        {id: 19, name: 'Tułów - baza do ruchu ', area: 'Biernat'},
        {id: 20, name: 'Kończyna dolna', area: 'Movement strategy'},
        {id: 21, name: 'Trening TRX ', area: 'Certyfikat'},
        {id: 22, name: 'Functional and core work shop ', area: 'Certyfikat IFAA'},
    ];
    const ExperienceMap = (props) => {
        return experiencesList.map((experience) => (
            <React.Fragment>
                {/* <ScrollAnimation animateIn="flipInY" animateOut="flipOutY"> */}
                <Grid
                    key={experience.id}
                    className={classes.expItem}
                    item
                    xs={6}
                    sm={4}
                >
                    {/* <motion.div
                        // className={classes.expPaper}
                        animate={{ scale: 0.5 }}
                        transition={{ duration: 2 }}
                    > */}
                    <Paper
                        className={classes.expPaper}
                        elevation={0}
                        variant="outlined"
                    >
                        <Typography key={experience.name} variant="h5">
                            {experience.name}
                        </Typography>
                        <Typography variant="body1" key={experience.area}>
                            {experience.area}
                        </Typography>
                    </Paper>
                    {/* </motion.div> */}
                </Grid>
            </React.Fragment>
        ));
    };

    return (
        <section id={id} className={classes.root}>
            <Container className={classes.priceWrapper} maxWidth="sm">
                <Box className={classes.priceHeader}>
                    <Box style={{width: '30%'}}>
                        <Img fluid={data.pic1.childImageSharp.fluid} alt=""/>
                    </Box>
                    <Box>
                        <Typography className={classes.prizesText} variant="h4">
                            Zwycięzca konkursu fitness motywatory
                        </Typography>
                    </Box>
                </Box>

                <Box pt={12} pb={10}>
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
                    <ExperienceMap/>
                </Grid>
            </Container>
            <Container style={{position: 'relative'}} maxWidth="sm">
                <Img
                    className={classes.expFooterImage}
                    fluid={data.pic2.childImageSharp.fluid}
                    alt=""
                />
            </Container>
        </section>
    );
}

export default withStyles(useStyles)(Experienses);
