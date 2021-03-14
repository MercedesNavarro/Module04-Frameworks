import { Image } from '../../pods/images-list/images-list.vm';

export const findImageIndex = (image: Image, imagesArray: Image[]): number =>
  imagesArray.findIndex((element) => element.id === image.id);
