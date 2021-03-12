import { Image } from './images-list.api-model';
import { mockImagesList } from './images-list.mock-data';

let imagesList = [...mockImagesList];

export const getImagesList = async (): Promise<Image[]> => {
  return imagesList;
};
