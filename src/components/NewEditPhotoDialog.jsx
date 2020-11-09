import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import PhotosUseCases from "../use_cases/UseCasesConfig";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "55%",
    },
  },
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
    textTransform: "capitalize",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function NewEditPhotoDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const useCases = new PhotosUseCases();

  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
    if (props.photo) {
      setDescription(props.photo.description);
      setName(props.photo.name);
      setUrl(props.photo.url);
    }
  };

  const clearData = () => {
    setUrl("");
    setName("");
    setDescription("");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    let newPhoto = {
      url: url,
      name: name,
      description: description
    };
    useCases.save(newPhoto).then(() => {
      props.onFinishCreate();
      setOpen(false);
      clearData();
    });
  };

  const handleUpdate = () => {
    let updatedPhoto = {
      id: props.photo._id,
      url: url,
      description: description,
      name: name
    };
    useCases.update(updatedPhoto).then(() => {
      props.onFinishCreate();
      setOpen(false);
      clearData();
    });
  };

  const handleDescriptionChange = event => {
    setDescription(event.target.value);
  };

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleUrlChange = event => {
    setUrl(event.target.value);
  };

  return (
    <div>
      {props.type === "edit" && (
        <IconButton onClick={handleClickOpen} arial-label="edit">
          <EditIcon />
        </IconButton>
      )}

      {props.type === "new" && (
        <IconButton
          className={classes.menuButton}
          onClick={handleClickOpen}
          arial-label="new"
          color="inherit"
        >
          <AddIcon />
        </IconButton>
      )}

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {props.type}
            </Typography>
          </Toolbar>
        </AppBar>
        <form className={classes.root} noValidate autoComplete="off">
          {props.photo ? (
            <>
              <TextField
                id="standard-basic"
                label="Name"
                onChange={handleNameChange}
                defaultValue={name}
              />
              <TextField
                id="standard-basic"
                label="Url"
                onChange={handleUrlChange}
                defaultValue={url}
              />
              <TextField
                id="standard-basic"
                label="Description"
                onChange={handleDescriptionChange}
                value={description}
              />
              <Button onClick={handleUpdate}variant="contained" color="primary">Update</Button>
            </>
          ) : (
            <>
              <TextField value={name} id="standard-basic" onChange={handleNameChange} label="Name" />
              <TextField value={url} id="standard-basic" onChange={handleUrlChange} label="Url" />
              <TextField value={description} id="standard-basic" onChange={handleDescriptionChange} label="Description" />
              <Button onClick={handleSave}variant="contained" color="primary">Save</Button>
            </>
          )}
        </form>
      </Dialog>
    </div>
  );
}
