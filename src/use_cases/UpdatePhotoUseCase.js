export default async function updatePhotoUseCase(service, photo) {
    return service.update(photo, photo.id);
}