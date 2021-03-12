import React from 'react';
import { Image, createEmptyImage } from './images-list.vm';
import { getImagesList } from './api';
import { mapImagesListFromApiToVm } from './images-list.mapper';
import * as classes from './images-list.component.styles';
import { SingleImageComponent } from './single-image.component';
import { AppContext } from '../context/appContextProvider';
import { findImageIndex } from '../../common/helpers/helpers';

export const ImagesListComponent: React.FC = () => {
  const [imagesList, setImagesList] = React.useState<Image[]>([
    createEmptyImage(),
  ]);
  const userContext = React.useContext(AppContext);
  const imagesListRef = React.useRef([]);
  imagesListRef.current = imagesList;

  const onLoadImagesList = async () => {
    const apiImagesList = await getImagesList();
    const mapImagesList = mapImagesListFromApiToVm(apiImagesList);
    setImagesList(mapImagesList);
    imagesListRef.current = mapImagesList;
  };

  React.useEffect(() => {
    onLoadImagesList();
  }, []);

  const setImage = (image, index, checked) => {
    const imagesListCopy = [...imagesList];
    imagesListCopy.splice(index, 1, { ...image, checked: checked });
    setImagesList([...imagesListCopy]);
    imagesListRef.current = imagesListCopy;
  };

  React.useEffect(() => {
    const deletedImage = userContext.deletedImage;

    const index = findImageIndex(userContext.deletedImage, imagesList);
    setImage(deletedImage, index, false);
  }, [userContext.deletedImage]);

  return (
    <>
      <main className={classes.ImagesList}>
        {imagesListRef.current.map((image, index) => (
          <SingleImageComponent
            image={image}
            key={index}
            index={index}
            setImage={setImage}
          />
        ))}
      </main>
    </>
  );
};
