import React, { useState, useEffect } from "react";
import ContactElement from "../contact/ContactElement";
import AycApi from "../api/api";
import TeamCard from "./TeamCard";
import LoadingSpinner from "../common/LoadingSpinner";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Icon,
} from "@material-ui/core";
import ic_about_curiosity from "../common/images/ic_about_curiosity.svg";
import ic_about_positivity from "../common/images/ic_about_positivity.svg";
import ic_about_sharing from "../common/images/ic_about_sharing.svg";
import ic_about_simplicity from "../common/images/ic_about_simplicity.svg";

// Show page with list of team members
//
// On Mount, loads team members from API.
//
// This is routed at /team
//
// Routes -> { TeamCard }
//

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1 },
  upper: {
    backgroundImage: `url('${process.env.PUBLIC_URL}/images/about/about01.png')`,
    backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    backgroundPosition: "center bottom",
    paddingTop: "21%",
    width: "100%",
    height: "100%",
  },
  logo: {
    maxHeight: 40,
    margin: theme.spacing(2),
  },
  mainIcon: {
    height: 100,
  },
  forgeBox: {
    padding: theme.spacing(4),
  },
  forgeItem: {
    padding: theme.spacing(2),
  },
}));

function TeamList() {
  console.debug("TeamList");

  const classes = useStyles();

  const [team, setTeam] = useState(null);

  //   useEffect(async function getTeamOnMount() {
  //     console.debug("TeamList useEffect getTeamOnMount");
  //     let team = await AycApi.getTeam();
  //     setTeam(team);
  //   }, []);

  useEffect(() => {
    async function getTeamOnMount() {
      console.debug("TeamList useEffect getTeamOnMount");
      let team = await AycApi.getTeam();
      setTeam(team);
    }
    getTeamOnMount();
  }, []);
  if (!team) return <LoadingSpinner />;
  console.debug(team);

  return (
    <div>
      <div className={classes.upper}></div>
      <Grid container justifyContent="center" className={classes.forgeBox}>
        <Grid item xs={12}>
          <Typography align="center">
            <img
              src={process.env.PUBLIC_URL + "/images/logos/Logo03a.png"}
              alt="AYC Logo"
              className={classes.logo}
            ></img>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            Forging Our Own Path
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Typography variant="subtitle1" align="center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Libero at
            voluptate officiis sed atque, ipsam quod est dicta veritatis eaque
            aut, sequi sapiente veniam eveniet aliquid totam? Labore, hic!
            Laboriosam!
          </Typography>
        </Grid>
      </Grid>
      <div className={classes.forgeBox}>
        <Grid container justifyContent="space-around" alignItems="center">
          <Grid container items lg={3} sm={6} className={classes.forgeItem}>
            <Grid item xs={12}>
              <Typography align="center">
                <Icon>
                  <img
                    src={ic_about_sharing}
                    alt="sharing icon"
                    className={classes.mainIcon}
                  />
                </Icon>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" align="center">
                Sharing knowledge
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" align="center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quidem, perspiciatis.
              </Typography>
            </Grid>
          </Grid>
          <Grid container items lg={3} sm={6} className={classes.forgeItem}>
            <Grid item xs={12}>
              <Typography align="center">
                <Icon>
                  <img
                    src={ic_about_curiosity}
                    alt="curiosity icon"
                    className={classes.mainIcon}
                  />
                </Icon>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" align="center">
                Curiosity
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" align="center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quidem, perspiciatis.
              </Typography>
            </Grid>
          </Grid>
          <Grid container items lg={3} sm={6} className={classes.forgeItem}>
            <Grid item xs={12}>
              <Typography align="center">
                <Icon>
                  <img
                    src={ic_about_simplicity}
                    alt="simplicity icon"
                    className={classes.mainIcon}
                  />
                </Icon>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" align="center">
                Simplicity
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" align="center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quidem, perspiciatis.
              </Typography>
            </Grid>
          </Grid>
          <Grid container items lg={3} sm={6} className={classes.forgeItem}>
            <Grid item xs={12}>
              <Typography align="center">
                <Icon>
                  <img
                    src={ic_about_positivity}
                    alt="positivity icon"
                    className={classes.mainIcon}
                  />
                </Icon>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" align="center">
                Positivity
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" align="center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quidem, perspiciatis.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <div>
        <h5>Who We Are</h5>
        <h3>The Team Behind AlignYourCulture</h3>
        {team.map((m) => (
          <TeamCard
            id={m.id}
            key={m.name}
            name={m.name}
            title={m.title}
            bio={m.bio}
            img={m.img}
          />
        ))}
      </div>
      <ContactElement />
    </div>
  );
}

export default TeamList;
