import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import PhotosUseCases from "../use_cases/UseCasesConfig";
import NewEditPhotoDialog from "./NewEditPhotoDialog";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "55%",
    margin: 10,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Photo(props) {
  const classes = useStyles();
  const useCases = new PhotosUseCases();

  const handleDelete = () => {
    useCases.delete(props.photo._id).then(() => {
      props.onDelete();
    });
  };

  const updateOrCreate = () => {
    props.onUpdateOrCreate();
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title={props.photo.name}
        subheader={new Date(props.photo.creationDate).toLocaleDateString()}
      />
      <CardMedia
        className={classes.media}
        image={props.photo.url}
        title={props.photo.name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.photo.description}
        </Typography>
      </CardContent>
      <CardActions>
        <NewEditPhotoDialog onFinishCreate={updateOrCreate} type="edit" photo={props.photo} />
        <IconButton onClick={handleDelete} arial-label="delete">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
