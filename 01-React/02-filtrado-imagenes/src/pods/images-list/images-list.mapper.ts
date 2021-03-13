import { Image as ImageApi } from './api/images-list/images-list.api-model';
import { Image as ImageVM } from './images-list.vm';

const mapImageFromApiToVm = (image: ImageApi): ImageVM => ({
  ...image,
  checked: false,
});

export const mapImagesListFromApiToVm = (imagesList: ImageApi[]): ImageVM[] =>
  imagesList.map((image) => mapImageFromApiToVm(image));
