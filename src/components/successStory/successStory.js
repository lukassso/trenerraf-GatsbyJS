import React, { Component } from "react";
import Slider from "react-slick";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import clsx from "clsx";
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
    display: "flex",
    flexDirection: "column",
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
  container: {
    marginTop: theme.spacing(130),
    marginBottom: theme.spacing(135),
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
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
      pic5: file(relativePath: { eq: "pages/images/successStory1.png" }) {
        childImageSharp {
          fluid(maxWidth: 570, maxHeight: 398) {
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
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
   const settings = {
      // className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      
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
          <h2> Single Item</h2>
          <Slider 
          dots={false}
        slidesToShow={3}
        // slidesToScroll={2}
        // autoplay={true}
        // autoplaySpeed={3000}
      speed={500}
      centerMode= {true}
      infinite= {true}
          >
            <Card className={classes.cardWrapper}>
              <CardHeader
                avatar={<Avatar aria-label=""></Avatar>}
                action={
                  <IconButton aria-label="">
                    <MoreVertIcon />
                  </IconButton>
                }
                title=""
                subheader=""
              />
              <CardMedia
                title=""
                // image={<Img
                // className={classes.pictureHeader}
                // fluid={data.pic5.childImageSharp.fluid}
                // component="img"
                // alt="Contemplative Reptile"
                // />}
              >
                <Img
                  className={classes.pictureHeader}
                  fluid={data.pic5.childImageSharp.fluid}
                  component="img"
                  alt="Contemplative Reptile"
                />
              </CardMedia>
              <CardContent>dfdf</CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add
                    saffron and set aside for 10 minutes.
                  </Typography>
                  <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep
                    skillet over medium-high heat. Add chicken, shrimp and
                    chorizo, and cook, stirring occasionally until lightly
                    browned, 6 to 8 minutes. Transfer shrimp to a large plate
                    and set aside, leaving chicken and chorizo in the pan. Add
                    pimentón, bay leaves, garlic, tomatoes, onion, salt and
                    pepper, and cook, stirring often until thickened and
                    fragrant, about 10 minutes. Add saffron broth and remaining
                    4 1/2 cups chicken broth; bring to a boil.
                  </Typography>
                  <Typography paragraph>
                    Add rice and stir very gently to distribute. Top with
                    artichokes and peppers, and cook without stirring, until
                    most of the liquid is absorbed, 15 to 18 minutes. Reduce
                    heat to medium-low, add reserved shrimp and mussels, tucking
                    them down into the rice, and cook again without stirring,
                    until mussels have opened and rice is just tender, 5 to 7
                    minutes more. (Discard any mussels that don’t open.)
                  </Typography>
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and
                    then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
            <Card className={classes.cardWrapper}>
              <CardHeader
                avatar={<Avatar aria-label=""></Avatar>}
                action={
                  <IconButton aria-label="">
                    <MoreVertIcon />
                  </IconButton>
                }
                title=""
                subheader=""
              />
              <CardMedia
                title=""
                // image={<Img
                // className={classes.pictureHeader}
                // fluid={data.pic5.childImageSharp.fluid}
                // component="img"
                // alt="Contemplative Reptile"
                // />}
              >
                <Img
                  className={classes.pictureHeader}
                  fluid={data.pic5.childImageSharp.fluid}
                  component="img"
                  alt="Contemplative Reptile"
                />
              </CardMedia>
              <CardContent>dfdf</CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add
                    saffron and set aside for 10 minutes.
                  </Typography>
                  <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep
                    skillet over medium-high heat. Add chicken, shrimp and
                    chorizo, and cook, stirring occasionally until lightly
                    browned, 6 to 8 minutes. Transfer shrimp to a large plate
                    and set aside, leaving chicken and chorizo in the pan. Add
                    pimentón, bay leaves, garlic, tomatoes, onion, salt and
                    pepper, and cook, stirring often until thickened and
                    fragrant, about 10 minutes. Add saffron broth and remaining
                    4 1/2 cups chicken broth; bring to a boil.
                  </Typography>
                  <Typography paragraph>
                    Add rice and stir very gently to distribute. Top with
                    artichokes and peppers, and cook without stirring, until
                    most of the liquid is absorbed, 15 to 18 minutes. Reduce
                    heat to medium-low, add reserved shrimp and mussels, tucking
                    them down into the rice, and cook again without stirring,
                    until mussels have opened and rice is just tender, 5 to 7
                    minutes more. (Discard any mussels that don’t open.)
                  </Typography>
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and
                    then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
            <Card className={classes.cardWrapper}>
              <CardHeader
                avatar={<Avatar aria-label=""></Avatar>}
                action={
                  <IconButton aria-label="">
                    <MoreVertIcon />
                  </IconButton>
                }
                title=""
                subheader=""
              />
              <CardMedia
                title=""
                // image={<Img
                // className={classes.pictureHeader}
                // fluid={data.pic5.childImageSharp.fluid}
                // component="img"
                // alt="Contemplative Reptile"
                // />}
              >
                <Img
                  className={classes.pictureHeader}
                  fluid={data.pic5.childImageSharp.fluid}
                  component="img"
                  alt="Contemplative Reptile"
                />
              </CardMedia>
              <CardContent>dfdf</CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add
                    saffron and set aside for 10 minutes.
                  </Typography>
                  <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep
                    skillet over medium-high heat. Add chicken, shrimp and
                    chorizo, and cook, stirring occasionally until lightly
                    browned, 6 to 8 minutes. Transfer shrimp to a large plate
                    and set aside, leaving chicken and chorizo in the pan. Add
                    pimentón, bay leaves, garlic, tomatoes, onion, salt and
                    pepper, and cook, stirring often until thickened and
                    fragrant, about 10 minutes. Add saffron broth and remaining
                    4 1/2 cups chicken broth; bring to a boil.
                  </Typography>
                  <Typography paragraph>
                    Add rice and stir very gently to distribute. Top with
                    artichokes and peppers, and cook without stirring, until
                    most of the liquid is absorbed, 15 to 18 minutes. Reduce
                    heat to medium-low, add reserved shrimp and mussels, tucking
                    them down into the rice, and cook again without stirring,
                    until mussels have opened and rice is just tender, 5 to 7
                    minutes more. (Discard any mussels that don’t open.)
                  </Typography>
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and
                    then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
            <Card className={classes.cardWrapper}>
              <CardHeader
                avatar={<Avatar aria-label=""></Avatar>}
                action={
                  <IconButton aria-label="">
                    <MoreVertIcon />
                  </IconButton>
                }
                title=""
                subheader=""
              />
              <CardMedia
                title=""
                // image={<Img
                // className={classes.pictureHeader}
                // fluid={data.pic5.childImageSharp.fluid}
                // component="img"
                // alt="Contemplative Reptile"
                // />}
              >
                <Img
                  className={classes.pictureHeader}
                  fluid={data.pic5.childImageSharp.fluid}
                  component="img"
                  alt="Contemplative Reptile"
                />
              </CardMedia>
              <CardContent>dfdf</CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add
                    saffron and set aside for 10 minutes.
                  </Typography>
                  <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep
                    skillet over medium-high heat. Add chicken, shrimp and
                    chorizo, and cook, stirring occasionally until lightly
                    browned, 6 to 8 minutes. Transfer shrimp to a large plate
                    and set aside, leaving chicken and chorizo in the pan. Add
                    pimentón, bay leaves, garlic, tomatoes, onion, salt and
                    pepper, and cook, stirring often until thickened and
                    fragrant, about 10 minutes. Add saffron broth and remaining
                    4 1/2 cups chicken broth; bring to a boil.
                  </Typography>
                  <Typography paragraph>
                    Add rice and stir very gently to distribute. Top with
                    artichokes and peppers, and cook without stirring, until
                    most of the liquid is absorbed, 15 to 18 minutes. Reduce
                    heat to medium-low, add reserved shrimp and mussels, tucking
                    them down into the rice, and cook again without stirring,
                    until mussels have opened and rice is just tender, 5 to 7
                    minutes more. (Discard any mussels that don’t open.)
                  </Typography>
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and
                    then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Slider>
        </div>

        {/* 
      <Card className={classes.cardWrapper}>
        <CardHeader
          avatar={<Avatar aria-label=""></Avatar>}
          action={
            <IconButton aria-label="">
              <MoreVertIcon />
            </IconButton>
          }
          title=""
          subheader=""
        />
        <CardMedia 
          title="" 
          // image={<Img
          // className={classes.pictureHeader}
          // fluid={data.pic5.childImageSharp.fluid}
          // component="img"
          // alt="Contemplative Reptile"
          // />}
        >
        <Img
          className={classes.pictureHeader}
          fluid={data.pic5.childImageSharp.fluid}
          component="img"
          alt="Contemplative Reptile"
          />
          </CardMedia>
        <CardContent>dfdf</CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes
              and peppers, and cook without stirring, until most of the liquid
              is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
              reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is
              just tender, 5 to 7 minutes more. (Discard any mussels that don’t
              open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card> */}
      </Container>
    </Box>
  );
}

export default withStyles(useStyles)(SuccessStory);
