import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Icon,
  Grid,
} from "@material-ui/core";
import ic_arrow_small_blue from "./images/ic_arrow_small_blue.svg";

// Reusable card button component, will make a card button which accepts an icon, header text, bodytext a route and an onClick function
//

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 850,
  },
  cardAction: {},
  mainIcon: {
    height: 60,
  },
  arrowIcon: {
    height: 25,
  },
}));

const CardButton = ({ icon, alt, headerText, bodyText, route, onClick }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea
        className={classes.cardAction}
        component={Link}
        to={route}
        onClick={onClick}
      >
        <CardContent>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={2}>
              <Icon>
                <img src={icon} alt={alt} className={classes.mainIcon} />
              </Icon>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h5" component="h5" color="inherit">
                {headerText}
              </Typography>
              <Typography variant="body2" color="inherit">
                {bodyText}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Icon>
                <img
                  src={ic_arrow_small_blue}
                  alt=""
                  className={classes.arrowIcon}
                />
              </Icon>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardButton;
