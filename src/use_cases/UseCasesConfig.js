import PhotoServices from "../services/PhotoServices";
import getAllPhotosUseCase from "./GetAllPhotosUseCase";
import API_URL from "../services/PhotoServicesConfig";

class PhotosUseCases {
  photoService = new PhotoServices(API_URL);

  async getAll() {
    return await getAllPhotosUseCase(this.photoService);
  }
}

export default PhotosUseCases;
