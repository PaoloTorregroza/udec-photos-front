export default async function savePhotoUseCase(service, photo) {
    return service.save(photo);
}