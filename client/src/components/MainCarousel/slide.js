import React from "react";

import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import Box from "@material-ui/core/Box";

import useStyles from "./useStyles";

const Slide = ({ image, title, subTitle }) => {
  const classes = useStyles();

  return (
    <div className={classes.slider}>
      <img className={classes.slider} src={image} alt="slide" />
      <Grid
        xs={6}
        justify="center"
        alignItems="center"
        className={classes.block}
      >
        <Box justify="center" alignItems="center" className={classes.paragraph}>
          <p>{title}</p>
          <h1 className={classes.title}>{subTitle}</h1>
          <Button className={classes.actionButton}>shop now</Button>
        </Box>
      </Grid>
    </div>
  );
};

export default Slide;