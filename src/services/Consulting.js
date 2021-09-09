import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Icon,
  ListItemIcon,
} from "@material-ui/core";
import ic_logomark from "../common/images/ic_logomark.svg";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";

// Workshops component
//
// Rendered by Services component
//
// Services -> Workshops

const useStyles = makeStyles((theme) => ({
  root: { padding: theme.spacing(4) },
  list: { padding: theme.spacing(4) },
  logoMark: { height: "14px", margin: "auto" },
  logoText: {
    fontWeight: "bold",
    fontSize: "20px",
    color: "#607494",
    margin: "2px",
  },
  title: {
    padding: theme.spacing(2),
  },
  subTitle: {
    padding: theme.spacing(2),
  },
}));

const Consulting = () => {
  console.debug("Workshops");

  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid
        container
        item
        xs={12}
        justifyContent="flex-start"
        className={classes.title}
      >
        <Typography>
          <Icon className={classes.logoMark}>
            <img
              src={ic_logomark}
              alt="logo mark"
              className={classes.logoMark}
            />
          </Icon>
          <Typography
            variant="subtitle1"
            className={classes.logoText}
            component="span"
          >
            CONSULTING SERVICES
          </Typography>
        </Typography>
      </Grid>
      <Grid container item justifyContent="center" alignItems="center">
        <Grid item xs={12} className={classes.title}>
          <Typography variant="h4" align="justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.subTitle}>
          <Typography variant="subtitle1" align="justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit.
          </Typography>
        </Grid>
      </Grid>
      <Grid container item className={classes.list}>
        <Grid item xs={12} md={6}>
          <div className={classes.demo}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <RadioButtonUncheckedIcon />
                </ListItemIcon>
                <ListItemText primary="Single-line item" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <RadioButtonUncheckedIcon />
                </ListItemIcon>
                <ListItemText primary="Single-line item" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <RadioButtonUncheckedIcon />
                </ListItemIcon>
                <ListItemText primary="Single-line item" />
              </ListItem>
            </List>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.demo}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <RadioButtonUncheckedIcon />
                </ListItemIcon>
                <ListItemText primary="Single-line item" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <RadioButtonUncheckedIcon />
                </ListItemIcon>
                <ListItemText primary="Single-line item" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <RadioButtonUncheckedIcon />
                </ListItemIcon>
                <ListItemText primary="Single-line item" />
              </ListItem>
            </List>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Consulting;
