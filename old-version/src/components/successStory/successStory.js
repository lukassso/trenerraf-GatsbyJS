import React from 'react';
import Slider from 'react-slick';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import clsx from 'clsx';
// import { dataStories } from './dataStories'
import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Collapse,
    Container,
    IconButton,
    Typography,
    withStyles,
} from '@material-ui/core';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { MoreVert as MoreVertIcon } from '@material-ui/icons'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { TramRounded } from '@material-ui/icons';
// import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
// import Pic1 from './images/3.png';

const useStyles = (theme) => ({
    root: {
        paddingTop: 80,
        marginBottom: -10,
        // paddingLeft: 30,
        // paddingRight: 30,
        backgroundColor: theme.palette.background.gray,
    },
    name: {
        padding: 10,
    },
    weight: {},
    expand: {
        display: 'block',
        margin: '0 auto',
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    cardWrapper: {
        marginTop: 40,
        marginBottom: 40,
    },

    // sliderWrapper: {
    //     position: 'relative',
    //     margin: 10,
    //     marginTop: 30,
    //     '& .slick-next': {
    //         // right: -10,
    //         top: 230,
    //     },
    //     '& .slick-prev': {
    //         // left: -10,
    //         top: 230,
    //     },
    //     '& .slick-next:before, .slick-prev:before': {
    //         color: theme.palette.gray[300],
    //         '&:hover': {
    //             color: theme.palette.gray[500],
    //         },
    //     },
    // },
});
const query = graphql`
    query {
        pic4: file(
            relativePath: { eq: "components/successStory/images/1.png" }
        ) {
            childImageSharp {
                fluid(maxWidth: 743, maxHeight: 533) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        pic5: file(
            relativePath: { eq: "components/successStory/images/2.png" }
        ) {
            childImageSharp {
                fluid(maxWidth: 743, maxHeight: 533) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        pic6: file(
            relativePath: { eq: "components/successStory/images/3.png" }
        ) {
            childImageSharp {
                fluid(maxWidth: 743, maxHeight: 533) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        pic7: file(
            relativePath: { eq: "components/successStory/images/4.png" }
        ) {
            childImageSharp {
                fluid(maxWidth: 743, maxHeight: 533) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        pic8: file(
            relativePath: { eq: "components/successStory/images/5.png" }
        ) {
            childImageSharp {
                fluid(maxWidth: 743, maxHeight: 533) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        pic9: file(
            relativePath: { eq: "components/successStory/images/6.png" }
        ) {
            childImageSharp {
                fluid(maxWidth: 743, maxHeight: 533) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        pic10: file(
            relativePath: { eq: "components/successStory/images/7.png" }
        ) {
            childImageSharp {
                fluid(maxWidth: 743, maxHeight: 533) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        pic11: file(
            relativePath: { eq: "components/successStory/images/8.png" }
        ) {
            childImageSharp {
                fluid(maxWidth: 743, maxHeight: 533) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        pic12: file(
            relativePath: { eq: "components/successStory/images/9.png" }
        ) {
            childImageSharp {
                fluid(maxWidth: 743, maxHeight: 533) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        pic13: file(
            relativePath: { eq: "components/successStory/images/10.png" }
        ) {
            childImageSharp {
                fluid(maxWidth: 743, maxHeight: 533) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        pic14: file(
            relativePath: { eq: "components/successStory/images/11.png" }
        ) {
            childImageSharp {
                fluid(maxWidth: 743, maxHeight: 533) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

function SuccessStory({ classes, id }) {
    const [expanded, setExpanded] = React.useState(false);
    const data = useStaticQuery(query);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const dataStories = [
        {
            id: '1',
            image: data.pic4.childImageSharp.fluid,
            name: 'Kasia',
            weight: '-50 kg',
            cardTeaser:
                'Kasia nigdy wcześniej nie ćwiczyła na siłowni. Kasia chciała poprostu schudnąć i poczuć się lepiej. Musieliśmy zacząć od podstaw..',
            text:
                'Kasia nigdy wcześniej nie ćwiczyła na siłowni. Kasia chciała poprostu schudnąć i poczuć się lepiej. Musieliśmy zacząć od podstaw treningu przy zwróceniu szczególnej uwagi na przepuchline w odcinku ledzwiowym. Cel był konkretny schudnąć maksymalnie w ciągu 12 miesięcy. Efekt jest bardzo zadowalający redukcja 50kg, poprawa sprawnośći, brak bólu w odcinku ledzwiowym- czas 12 miesięcy',
        },
        {
            id: '2',
            image: data.pic5.childImageSharp.fluid,
            name: 'Asia i Dominik',
            weight: '-20kg / -25kg',
            cardTeaser:
                'Asia i Dominik nie mieli do czynienia z siłownia wcześniej. Na początku musieliśmy popracować nad zmianą zasad żywienia...',
            text:
                'Asia i Dominik nie mieli do czynienia z siłownia wcześniej. Na początku musieliśmy popracować nad zmianą zasad żywienia i wprowadzeniu nowych zasad podczas zakupów. Racjonalne żywienie zawsze pomaga w budowie dobrego zdrowia i sprawności. Następnie zaczęliśmy pracować nad podstawami wzorców ruchowych. Nauczyliśmy się podstaw treningu i już po 12 miesiącach regularnych treningów 2-3 razy w tyg widać efekty:).',
        },
        {
            id: '3',
            image: data.pic6.childImageSharp.fluid,
            name: 'Filip',
            weight: '-30kg',
            cardTeaser:
                'Filip chciał lepiej się czuć, być sprawniejszy i zredukować tkankę tłuszczową. Regularne treningu były utrudnione...',
            text:
                'Filip chciał lepiej się czuć, być sprawniejszy i zredukować tkankę tłuszczową. Regularne treningu były utrudnione, gdyż Filip jest mocno zajętym człowiekiem. Staraliśmy się wplatać treningi w mocno zapchany grafik Filipa. Przy okazji zmienić źle przyzwyczajenia żywieniowe. Efekty ciężkiej pracy na siłowni widać na zdjęciu.',
        },
        {
            id: '4',
            image: data.pic7.childImageSharp.fluid,
            name: 'Mateusz',
            weight: '-24 kg',
            cardTeaser:
                'Mateusz chciał zrobić życiową formę. Ważne było poprawienie jego wydolności i praca nad techniką wykonywanych ćwiczeń.',
            text:
                'Mateusz chciał zrobić życiową formę. Ważne było poprawienie jego wydolności i praca nad techniką wykonywanych ćwiczeń. Cwiczylismy 2 x w tyg., a on sam przychodził 2x w tyg. Na cardio. Po 5 miesiącach efekty widać na zdjęciu, a sprawność i wydolność zmieniła się bardzo.',
        },
        {
            id: '5',
            image: data.pic8.childImageSharp.fluid,
            name: 'Eryk',
            weight: '-10kg',
            cardTeaser:
                'Eryk przyszedł do mnie z misją zrobienia six-packa na wakacje miał 6 miesięcy. Udało się! Na plaży mógł pokazać kaloryfer.',
            text:
                'Eryk przyszedł do mnie z misją zrobienia six-packa na wakacje miał 6 miesięcy. Udało się! Na plaży mógł pokazać kaloryfer.',
        },
        {
            id: '6',
            image: data.pic9.childImageSharp.fluid,
            name: 'Michał',
            weight: '-20kg',
            cardTeaser:
                'Głównym celem Michała była redukcja i poprawa sprawnośći. Cal osiągnęliśmy po 12 miesiącach wspólnej pracy 2 razy w tyg.',
            text:
                'Głównym celem Michała była redukcja i poprawa sprawnośći. Cal osiągnęliśmy po 12 miesiącach wspólnej pracy 2 razy w tyg. Dopasowalismy dietę do Michała',
        },
        {
            id: '7',
            image: data.pic10.childImageSharp.fluid,
            name: 'Dominik',
            weight: '-20kg',
            cardTeaser:
                'Dominik jest typowym biurkowcem. Praca 8-10 h bez ruchu powrót do domu i kanapa spowodowały nadwagę...',
            text:
                'Dominik jest typowym biurkowcem. Praca 8-10 h bez ruchu powrót do domu i kanapa spowodowały nadwagę. Cel był jasny redukcja tkanki tłuszczowej, poprawa sprawnośći i nauka techniki wykonywania ćwiczeń.',
        },
        {
            id: '8',
            image: data.pic11.childImageSharp.fluid,
            name: 'Igor',
            weight: '-20kg',
            cardTeaser:
                'Igor chciał wyglądać atrakcyjnie. W ciągu 2 lat wspólnej pracy ( 3 razy w tyg ) sylwetka znacznie ...',
            text:
                'Igor chciał wyglądać atrakcyjnie. W ciągu 2 lat wspólnej pracy ( 3 razy w tyg ) sylwetka znacznie się poprawiła. Dieta byla trzymana na 70%.',
        },
        {
            id: '9',
            image: data.pic12.childImageSharp.fluid,
            name: 'Ania',
            weight: '-20kg',
            cardTeaser:
                'Ania chciała się zmienić w ciągu 12 miesięcy, aby na następne wakacje wyglądać lepiej.',
            text: '',
        },
        {
            id: '10',
            image: data.pic13.childImageSharp.fluid,
            name: 'Joanna',
            weight: '-20kg',
            cardTeaser:
                'Joanna chciała poprawić swoja sylwetkę po ciąży. Poczatkowe treningi były delikatne i z czasem...',
            text:
                'Joanna chciała poprawić swoja sylwetkę po ciąży. Poczatkowe treningi były delikatne i z czasem zwiekszalismy poziom trudności.',
        },
        {
            id: '11',
            image: data.pic14.childImageSharp.fluid,
            name: 'Ania',
            weight: '-20kg',
            cardTeaser:
                'Ania potrzebowała przemiany, aby być gotowym na następne wakacje.',
            text: '',
        },
    ];

    function NextArrowBtn(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    // ...style,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#fdc100',
                    width: '40px',
                    height: '40px',
                    borderRadius: '20px',
                    zIndex: '1',
                }}
                onClick={onClick}
            />
        );
    }
    const settings = {
        className: 'center',
        // centerMode: false,
        infinite: false,
        // autoplay: true,
        // centerPadding: '50px',
        slidesToShow: 2,
        slidesToScroll: 1,
        // speed: 4500,
        // fade: true,
        // lazyLoad: true,

        // dots: true,
        // swipeToSlide: true,
        // dotsClass: 'slick-dots slick-thumb',
        //     customPaging: i => (
        //     <div
        //       style={{
        //         width: "30px",
        //         color: "blue",
        //         border: "1px blue solid"
        //       }}
        //     >
        //       {i + 1}
        //     </div>
        //   ),
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    // infinite: true,
                    arrows: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    nextArrow: <NextArrowBtn />,
                    prevArrow: <NextArrowBtn />,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    // infinite: false,
                    centerMode: true,
                    centerPadding: '15px',
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Box
            component="section"
            name="succesStories"
            id={id}
            className={classes.root}
        >
            <Container maxWidth="md">
                <Box pb={5}>
                    <Typography variant="h3" align="center">
                        Metamorfozy
                    </Typography>
                </Box>
                <Typography variant="h4" component='h2' align="center">
                   Sukcesy treningu osobistego
                </Typography>

                <div className={classes.sliderWrapper}>
                    <Slider {...settings}>
                        {dataStories.map((story) => 
                            <Box px={2}>
                                <Card className={classes.cardWrapper}>
                                    <CardMedia
                                        key={story.id}
                                        title={story.name}
                                        // image={story.image}
                                    >
                                        <Img
                                            className={classes.pictureHeader}
                                            // fluid={data.pic6.childImageSharp.fluid}
                                            fluid={story.image}
                                            component="img"
                                            alt={`Efekty treningu osobistego ` + story.name}
                                        />
                                        {/* <img className={classes.pictureStories} src={story.image} alt=""/> */}
                                    </CardMedia>
                                    <CardContent
                                        key={story.id}
                                        className={classes.cardTeaser}
                                    >
                                        <Typography
                                            className={classes.weight}
                                            align="center"
                                            key={story.id}
                                            variant="h2"
                                            component="p"
                                            color="initial"
                                        >
                                            {story.weight}
                                        </Typography>
                                        <Typography
                                            className={classes.name}
                                            align="center"
                                            key={story.name}
                                            variant="h5"
                                            component="p"
                                            color="initial"
                                        >
                                            {story.name}
                                        </Typography>
                                        <Typography
                                            style={{ marginTop: 10 }}
                                            variant="body1"
                                            color="initial"
                                        >
                                            {story.cardTeaser}
                                        </Typography>
                                    </CardContent>
                                    <CardActions key={story.id} disableSpacing>
                                        {/* <IconButton key={story.id} aria-label="add to favorites">
                      <FavoriteIcon key={story.id} />
                    </IconButton>
                    <IconButton key={story.id} aria-label="share">
                      <ShareIcon />
                    </IconButton> */}
                                        <IconButton
                                            // style={{ display: 'flex', justifyContent: 'center' }}
                                            key={story.id}
                                            className={clsx(classes.expand, {
                                                [classes.expandOpen]: expanded,
                                            })}
                                            onClick={handleExpandClick}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        >
                                            <ExpandMoreIcon key={story.id} />
                                        </IconButton>
                                    </CardActions>
                                    <Collapse
                                        key={story.id}
                                        in={expanded}
                                        timeout="auto"
                                        unmountOnExit
                                    >
                                        <CardContent key={story.id}>
                                            <Typography
                                                key={story.id}
                                                paragraph
                                            >
                                                {story.text}
                                            </Typography>
                                        </CardContent>
                                    </Collapse>
                                </Card>
                            </Box>
                        )}
                    </Slider>
                </div>
            </Container>
        </Box>
    );
}

export default withStyles(useStyles)(SuccessStory);
