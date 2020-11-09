import PhotoServices from "../services/PhotoServices";
import getAllPhotosUseCase from "./GetAllPhotosUseCase";
import deletePhotoUseCase from "./DeletePhotosUseCase";
import updatePhotoUseCase from "./UpdatePhotoUseCase";
import savePhotoUseCase from "./SavePhotoUseCase";
import API_URL from "../services/PhotoServicesConfig";

class PhotosUseCases {
  photoService = new PhotoServices(API_URL); // This must be in the constructor

  async getAll() {
    return await getAllPhotosUseCase(this.photoService);
  }

  async delete(id) {
    return await deletePhotoUseCase(this.photoService, id);
  }

  async update(photo) {
    return await updatePhotoUseCase(this.photoService, photo);
  }

  async save(photo) {
    return await savePhotoUseCase(this.photoService, photo);
  }
}

export default PhotosUseCases;
