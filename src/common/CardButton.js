import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  Typography,
  Icon,
  Grid,
} from "@material-ui/core";
import ic_service_workshops from "./images/ic_services_workshops.svg";
import ic_arrow_small_blue from "./images/ic_arrow_small_blue.svg";
import { HeadsetMicRounded } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 850,
  },
  cardAction: {
    // width: 600,
    // height: 113,
  },
  mainIcon: {
    height: 60,
  },
  arrowIcon: {
    height: 25,
  },
}));

const CardButton = ({ icon, alt, headerText, bodyText, route }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea
        className={classes.cardAction}
        component={Link}
        to={route}
      >
        <CardContent>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={2}>
              <Icon>
                <img src={icon} alt={alt} className={classes.mainIcon} />
              </Icon>
            </Grid>
            <Grid items xs={8}>
              <Typography variant="h5" component="h5" color="inherit">
                {headerText}
              </Typography>
              <Typography vartiant="subtitle2" color="inherit">
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