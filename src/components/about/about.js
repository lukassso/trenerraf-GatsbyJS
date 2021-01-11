import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Box, Container, Typography, withStyles } from '@material-ui/core';

const useStyles = (theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        color: theme.palette.text.secondary,
        position: 'relative',
        paddingBottom: -180,
        minHeight: '100%',
        // maxHeight: 800,
        [theme.breakpoints.down('sm')]: {
            // maxHeight: 1000,
        },
    },
    pictureHeader: {
        position: 'relative',
        top: 120,
        left: 0,
        right: 0,
        [theme.breakpoints.down('sm')]: {
            // top: 150,
        },
    },
    headerName: {
        paddingTop: 240,
        paddingBottom: 40,
        [theme.breakpoints.down('sm')]: {
            paddingTop: 150,
        },
    },
    aboutPragraph: {
        paddingTop: 20,
    },
    aboutPragraphLast: {
        paddingTop: 30,
        fontSize: '1.2rem',
    },
});

const query = graphql`
    query {
        pic3: file(relativePath: { eq: "pages/images/trener-rafal-bcg3.png" }) {
            childImageSharp {
                fluid(maxWidth: 570, maxHeight: 360) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

function About(props) {
    const { classes } = props;
    const data = useStaticQuery(query);

    return (
        <Box position="relative" component="section">
            <Box className={classes.root}>
                <Container maxWidth="md">
                    <Box className={classes.headerName} align="center">
                        <Typography variant="h3" component='h1'>Trener personalny Rafał Kiszło</Typography>
                    </Box>
                    <Box p={8} pb={0} pt={0}>
                        <Typography>
                            Nazywam się Rafał Kiszło i jestem wykwalifikowanym
                            trenerem personalnym. Pracuje wiele lat nad formą
                            swoich podopiecznych. Pomagam w uzyskaniu wymarzonej
                            sylwetki, poprawie sprawności, motoryki,
                            przygotowaniu się do różnych dyscyplin sportu,
                            wyjściu z kontuzji, czyli byciu lepszą wersją
                            siebie. Swoją wiedzy zdobywałem między innymi w
                            Wyższej Szkole Wychowania Fizycznego i Turystyki w
                            Białymstoku ( wychowanie fizyczne ) czy podczas
                            wieloletnich treningi w klubie sportowym. Od ponad
                            14 lat pomagam podopiecznym w osiąganiu ich
                            zamierzonych celów.
                        </Typography>
                        <Typography className={classes.aboutPragraph}>
                            W mojej pracy najważniejszy jest Ty i z Twojego
                            sukcesu czerpie energię do pracy. Cały czas się
                            rozwijam, aby moje szkolenia i kwalifikacje pomogły
                            w osiągnięciu Twojego sukcesu. Wiele lat pracy w
                            zawodzie trenera i tysiące przeprowadzonych
                            treningów sprawiają, że moje doświadczenie przyczyni
                            się w osiągnięciu zamierzonego celu.
                        </Typography>
                        <Typography className={classes.aboutPragraph}>
                            Najważniejszy jesteś Ty i podczas wspólnej pracy
                            sprawimy, abyś wracał na treningi z radością i
                            uśmiechem! W 2017 roku wygrałem konkurs Fitness
                            Motywatory w kat. Trener personalny. Postaram się
                            również ułożyć ci zbilansowaną dietę, która również
                            przyczyni się do osiągnięcia celu sportowego. Każdy
                            trening jest indywidualny, personalny i dostosowany
                            pod twoich celów. Podczas treningów używam
                            zróżnicowanych metod treningu, aby trening był
                            atrakcyjny dla Ciebie.
                        </Typography>
                        <Typography
                            variant="body1"
                            component="h2"
                            className={classes.aboutPragraphLast}
                            align="center"
                        >
                            Bądź lepszą wersją siebie! Zapraszam do współpracy!
                        </Typography>
                    </Box>
                </Container>
                <Container className={classes.pictureHeader} maxWidth="sm">
                    <Img fluid={data.pic3.childImageSharp.fluid} alt="" />
                </Container>
            </Box>
        </Box>
    );
}

export default withStyles(useStyles)(About);
