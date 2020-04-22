import React, { Component } from "react";
import Slider from "react-slick";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import clsx from "clsx";
import { dataStories } from "./dataStories";
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
} from "@material-ui/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MoreVert as MoreVertIcon } from "@material-ui/icons";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = (theme) => ({
  root: {
    // display: "flex",
    // flexDirection: "column",
    backgroundColor: theme.palette.background.white,

    overflow: "hidden",
    "& h3": {
      paddingBottom: 10,
    },
    "& h4": {
      padding: "5px 0 20px",
    },
  },
  cardWrapper: {
    marginTop: 20,
    marginBottom: 40,
  },
  sliderWrapper: {
    // display: "flex",
    // margin: 0,
  },
  // container: {
  //   marginTop: theme.spacing(130),
  //   marginBottom: theme.spacing(135),
  //   position: "relative",
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  // },
  test: {
    position: "relative",
    color: "#5d5d5d",
    "& div": {
      // display: 'flex',
      // backgroundColor: theme.palette.primary.light,
    },
    "& h3": {
      color: "#5d5d5d",
    },
    "& button": {
      backgroundColor: "#5d5d",
    },
  },
});

function SuccessStory(props) {
  const { classes } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const data = useStaticQuery(graphql`
    query {
      pic5: file(relativePath: { eq: "components/successStory/images/1.png" }) {
        childImageSharp {
          fluid(maxWidth: 743, maxHeight: 533) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pic6: file(relativePath: { eq: "components/successStory/images/2.png" }) {
        childImageSharp {
          fluid(maxWidth: 743, maxHeight: 533) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const Test = () => {
    return (
      <Img
        className={classes.pictureHeader}
        fluid={data.pic5.childImageSharp.fluid}
        alt=""
      />
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <Box component="section" className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center">
          Metamorfozy
        </Typography>
        <Typography variant="h4" align="center">
          Oni odnieśli sukces
        </Typography>

        <div className={classes.test}>
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
                    <Typography key={story.id} variant="h2" color="initial">
                      {story.weight}
                    </Typography>
                    <Typography
                      key={story.name}
                      variant="body1"
                      color="initial"
                    >
                      {story.name}
                    </Typography>
                    {story.cardTeaser}
                  </CardContent>
                  <CardActions key={story.id} disableSpacing>
                    <IconButton key={story.id} aria-label="add to favorites">
                      <FavoriteIcon key={story.id} />
                    </IconButton>
                    <IconButton key={story.id} aria-label="share">
                      <ShareIcon />
                    </IconButton>
                    <IconButton
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
  );
}

export default withStyles(useStyles)(SuccessStory);
