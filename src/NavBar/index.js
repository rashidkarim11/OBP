import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import GTranslateIcon from "@material-ui/icons/GTranslate";

import GoogleAuth from "../GoogleAuth";
import useStyles from "./styles";

const NavBar = () => {
  const classes = useStyles();
  const [useraction, setUserAction] = useState("login");

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <div className={classes.linkcont}>
            <Link to="" className={classes.linktag}>
              <Typography variant="h6" className={classes.title}>
                STREAMERS
              </Typography>
            </Link>
            <Link to="" className={classes.linktag}>
              <Typography variant="h6" className={classes.title}>
                STREAMING
              </Typography>
            </Link>
          </div>

          <GoogleAuth useraction={useraction} />
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
