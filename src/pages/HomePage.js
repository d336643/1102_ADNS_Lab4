import React from "react";
import {Grid, Typography} from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import imgSrc from "../image/me.jpeg";
import { createTheme } from '@mui/material/styles';

const theme = createTheme();
const useStyle = makeStyles({
  root: {
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1,
    minHeight: "100vh",
  },
  imageDiv: {
    display: "flex",
    justifyContent: "center",

    [theme.breakpoints.down('sm')]: {
      paddingTop: "96px",
      marginBottom: theme.spacing(5)
    },
    "& img": {
      transition: "transform .1s", /* Animation */
      "&:hover": {
        transform: "scale(1.1)"
      }
    }
  },
  aboutTxt: {
    color: theme.palette.primary.main,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: theme.typography.pxToRem(16),
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.pxToRem(16),
      padding: theme.spacing(5)
    },
    textAlign: "justify"
  },
  centerCropped: {
    objectFit: "scale-down",/* Do not scale the image */
    objectPosition: "center", /* Center the image within the element */
    height: theme.typography.pxToRem(250),
    width: theme.typography.pxToRem(250),
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.pxToRem(50),
      lineHeight: theme.typography.pxToRem(50),
    },
    display: "block"
  },
});

function HomePage() {
  const classes = useStyle();

  console.log("rerendering");
  return (
    <div className={classes.root}>
        <Grid container direction="row" justify="space-between" alignItems="center" style={{minHeight: "100vh"}}>
          <Grid item xs={6} md={5}>
              <div className={classes.imageDiv}>
                <img className={classes.centerCropped} src={imgSrc} alt="thumbnail"/>
              </div>
          </Grid>
          <Grid item xs={6} md={7}>
              <Typography gutterBottom className={classes.heading}>
                  About Me
              </Typography>
              <Typography paragraph className={classes.aboutTxt}>
                  我是資管所碩一的 Euni。
              </Typography>
          </Grid>
        </Grid>
    </div>
  )
}

export default HomePage;
