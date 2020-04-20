import React, { Component } from "react";
import {
  withStyles,
  Container,
  Typography,
  Grid,
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Button,
} from "@material-ui/core";

const useStyles = (theme) => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.background.default,
  },
  testimondialWrapper: {
    padding: 10,
  },
  small: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
});
const testimondials = [
  {
    id: 1,
    text:
      "Pełen profesjonalizm i zaangażowanie pracą z klientem. Przemiłe usposobienie i świetne podejście do treningu. Gorąco polecam.",
    name: "name name",
    position: "position",
    picture: "../../pages/images/1.jpeg",
    date: "styczeń, 2020",
  },
  {
    id: 2,
    text:
      'Rafała lubię i polecam każdemu leniwcowi. Wcześniej nie rozumiałam, po co ludzie chodzą do trenerów personalnych, wydawało mi się, że można ćwiczyć samemu przecież. No nie można, bo po pierwsze nie znamy się na tych wszystkich mięśniach, przeciążeniach itp., a po drugie nie ma nic lepszego jak ,,żywy bat" nad ćwiczącym. A jeśli ten ,,żywy bat" jest jeszcze miły, uśmiechnięty i ma ogromne poczucie humoru, to ćwiczenia są przyjemnością. Rafał jest też po prostu fajnym kolegą. Polecam!',
    name: "name name",
    position: "position",
    picture: "../../pages/images/2.jpeg",
    date: "styczeń, 2020",
  },
  {
    id: 3,
    text:
      "Jako nieaktywna fizycznie 28 latka, pracująca przy biurku i z dużą nadwagą, postanowiłam wziąć się za siebie i zacząć trenować na siłowni. Zależało mi na tym, żeby schudnąć, ale jednocześnie chciałam ćwiczyć bezpiecznie i prawidłowo technicznie. Oczywistą sprawą było, że potrzebuje pomocy profesjonalisty - internet i dobre opinie skierowały mnie do Rafała. Ćwiczyliśmy razem rok. Po tym czasie mogę stwierdzić z pełnym przekonaniem, że Rafał nie tylko bardzo dobrze zna się na tym, co robi, ale treningi z nim to czysta przyjemność. Potrafi bardzo dobrze zmotywować do wysiłku, ale też zarazić tą pasją. Każdemu kto zastanawia się czy warto - gorąco polecam.",
    name: "name name",
    position: "position",
    picture: "../../pages/images/3.jpeg",
    date: "styczeń, 2020",
  },
];
class Testimondials extends Component {
  render() {
    const { classes } = this.props;

    const Opinion = (props) => {
      return testimondials.map((testimondial, index) => (
        <Grid container spacing={1} className={classes.testimondialWrapper}>
          <Typography key={testimondial.id}>{testimondial.text}</Typography>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  alt={testimondial.name}
                  src={require("../../pages/images/trener-rafal-tlo-hero.png")}
                  className={classes.small}
                />
              </ListItemAvatar>
              <ListItemText
                primary={testimondial.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      color="primary"
                    >
                      {testimondial.date}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Grid>
      ));
    };

    return (
        <Container component="section" className={classes.root} maxWidth="lg">
          <Typography variant="h3" align="center">
            Opinie Klientów
          </Typography>
          <Opinion />
          <Box textAlign="center">
            <Button variant="contained" color="primary">
              Wyświetl więcej
            </Button>
          </Box>
        </Container>
    );
  }
}

export default withStyles(useStyles)(Testimondials);
