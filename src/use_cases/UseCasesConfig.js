import PhotoServices from "../services/PhotoServices";
import { getAllPhotosUseCase, deletePhotoUseCase } from "./GetAllPhotosUseCase";
import API_URL from "../services/PhotoServicesConfig";

class PhotosUseCases {
  photoService = new PhotoServices(API_URL);

  async getAll() {
    return await getAllPhotosUseCase(this.photoService);
  }

  async delete(id) {
    return await deletePhotoUseCase(this.photoService, id);
  }
}

export default PhotosUseCases;
