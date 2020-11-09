export default async function deletePhotoUseCase(service, id) {
    return service.delete(id);
}
  