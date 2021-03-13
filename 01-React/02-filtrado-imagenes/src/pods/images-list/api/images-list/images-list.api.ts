import { Image } from './images-list.api-model';
import { mockImagesList } from './images-list.mock-data';

let imagesList = [...mockImagesList];

export const getImagesList = async (category): Promise<Image[]> => {
  if (category !== null && category !== undefined) {
    return imagesList.filter((image) => image.category === category);
  } else {
    return imagesList;
  }
};
