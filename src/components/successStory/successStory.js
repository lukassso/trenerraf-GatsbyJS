import React, { Component } from 'react'
import Slider from 'react-slick'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import clsx from 'clsx'
import { dataStories } from './dataStories'
import {
  withStyles,
  Container,
  Box,
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Collapse,
} from '@material-ui/core'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// import { MoreVert as MoreVertIcon } from '@material-ui/icons'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
// import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'

const useStyles = (theme) => ({
  root: {
    paddingTop: 300,
    marginBottom: 100,
    paddingLeft: 30,
    paddingRight: 30,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 240,
      marginBottom: 60,
    },
    '& .slick-next': {
      // backgroundColor: theme.palette.background.dark,
      // backgroundImage: PlayCircleOutlineIcon,
    },
    '& .slick-slide': {
      textAlign: 'center',
    },
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
    marginTop: 20,
    marginBottom: 40,
  },

  sliderWrapper: {
    position: 'relative',
    margin: 10,
    '& .slick-next': {
      // right: -10,
      top: 230,
    },
    '& .slick-prev': {
      // left: -10,
      top: 230,
    },
    '& .slick-next:before, .slick-prev:before': {
      color: theme.palette.gray[300],
      '&:hover': {
        color: theme.palette.gray[500],
      },
    },
  },
})

function SuccessStory({classes, id}) {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  const data = useStaticQuery(graphql`
    query {
      pic4: file(relativePath: { eq: "components/successStory/images/1.png" }) {
        childImageSharp {
          fluid(maxWidth: 743, maxHeight: 533) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pic5: file(relativePath: { eq: "components/successStory/images/2.png" }) {
        childImageSharp {
          fluid(maxWidth: 743, maxHeight: 533) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pic6: file(relativePath: { eq: "components/successStory/images/3.png" }) {
        childImageSharp {
          fluid(maxWidth: 743, maxHeight: 533) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 1,
      //     infinite: true,
      //     dots: true,
      //   },
      // },
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  }

  return (
    <Box component="section" name="succesStories" id={id} className={classes.root}>
      <Container maxWidth="md">
        <Box pb={5}>
          <Typography variant="h3" align="center">
            Metamorfozy
          </Typography>
        </Box>
        <Typography variant="h4" align="center">
          Oni odnieśli sukces
        </Typography>

        <div className={classes.sliderWrapper}>
          <Slider {...settings}>
            {dataStories.map((story) => (
              <Container maxWidth="xs">
                <Card className={classes.cardWrapper}>
                  <CardMedia
                    key={story.id}
                    title={story.name}
                    // image={story.image}
                  >
                    <Img
                      className={classes.pictureHeader}
                      fluid={data.pic6.childImageSharp.fluid}
                      component="img"
                      alt="Contemplative Reptile"
                    />
                  </CardMedia>
                  <CardContent key={story.id} className={classes.cardTeaser}>
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
                      <Typography key={story.id} paragraph>
                        {story.text}
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Container>
            ))}
          </Slider>
        </div>
      </Container>
    </Box>
  )
}

export default withStyles(useStyles)(SuccessStory)
