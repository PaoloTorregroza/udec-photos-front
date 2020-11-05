export async function getAllPhotosUseCase(service) {
  return service.all();
}

export async function deletePhotoUseCase(service, id) {
  return service.delete(id);
}
