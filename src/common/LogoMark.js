import React from "react";
import { SvgIcon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Custom icon for the logomark slash

const useStyles = makeStyles((theme) => ({
  root: {
    fill: "#2ec1d2",
    fillRule: "evenodd",
  },
}));

const LogoMark = () => {
  const classes = useStyles();
  return (
    <SvgIcon>
      <path
        className={classes.root}
        d="M267.734,980.441h6.323l5.172-12.485h-6.322Z"
      />
    </SvgIcon>
  );
};

export default LogoMark;
