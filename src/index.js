import React from "react";
import { render } from "react-dom";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    width: `100%`,
    height: `100vh`,
    backgroundColor: `red`
  },
  headerDiv: {
    backgroundColor: `blue`,
    width: `100%`,
    height: `15vh`,
    position: `relative`
  },
  logo: {
    backgroundColor: `green`,
    width: `10vh`,
    height: `10vh`,
    margin: `17px`,
    position: `absolute`
  },
  menu: {
    backgroundColor: `yellow`,
    width: `70vh`,
    height: `5vh`,
    top: `30px`,
    right: `20%`,
    position: `absolute`,
    float: `left`
  },
  helpButton: {
    backgroundColor: `black`,
    width: `20vh`,
    height: `5vh`,
    top: `30px`,
    right: `2%`,
    position: `absolute`
  }
}));

const Health = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainDiv}>
      <div className={classes.headerDiv}>
        <div className={classes.logo}></div>
        <div className={classes.menu}></div>
        <div className={classes.helpButton}></div>
      </div>
    </div>
  );
};

const App = () => {
  return <Health />;
};

render(<App />, document.getElementById("root"));
