import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import NewEditPhotoDialog from "./NewEditPhotoDialog.jsx";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function TopBar(props) {
  const classes = useStyles();

  const updateOrCreate = () => {
    props.onUpdateOrCreate();
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <NewEditPhotoDialog type="new" onFinishCreate={updateOrCreate}/>
          <Typography variant="h6" color="inherit">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
