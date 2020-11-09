import React from "react";
import PhotosuseCases from "../use_cases/UseCasesConfig";
import Photo from "../components/PhotoComponent";
import TopBar from "../components/TopBar";
import "./main.css";

class Main extends React.Component {
   useCases = new PhotosuseCases();
  state = {
    renderPhotos: [],
  };

  loadAll = () => {
    this.useCases.getAll().then((val) => {
      const renderPhotos = val;
      this.setState({ renderPhotos });
    });
  };

  componentDidMount() {
    this.loadAll();
  }

  render() {
    return (
      <div>
        <TopBar onUpdateOrCreate={this.loadAll} />
        <div className="photo-container">
          {this.state.renderPhotos.map((photo) => (
            <Photo key={photo._id} photo={photo} onDelete={this.loadAll} onUpdateOrCreate={this.loadAll} />
          ))}
        </div>
      </div>
    );
  }
}

export default Main;
