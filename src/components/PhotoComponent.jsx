import React from "react";
import PhotosuseCases from "../use_cases/UseCasesConfig";

class Photo extends React.Component {
  useCases = new PhotosuseCases();
  state = {
    renderPhotos: [],
  };
  //for (const [index, value] of photos.entries()) {
  //renderPhotos.push(<p key={index}>{value.name}</p>);
  //}

  componentDidMount() {
    this.useCases.getAll().then((val) => {
      const renderPhotos = val;
      this.setState({ renderPhotos });
    });
  }

  render() {
    return (
      <div>
        <h1>Componente de fotos</h1>
        {this.state.renderPhotos.map((photo) => (
          <p key={photo.id}>{photo.description}</p>
        ))}
      </div>
    );
  }
}

export default Photo;
