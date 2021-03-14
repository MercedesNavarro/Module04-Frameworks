import React from 'react';
import { AppContext } from '../context/appContextProvider';
import { Image } from './images-list.vm';
import { getImagesList } from './api/images-list/images-list.api';
import { mapImagesListFromApiToVm } from './images-list.mapper';
import { createEmptyImage } from './images-list.vm';
import { SingleImageComponent } from './single-image.component';
import * as classes from './images-list.component.styles';
import { findImageIndex } from '../../common/helpers/helpers';

interface Props {
  categoryName?: string;
}

export const ImagesListComponent: React.FC<Props> = (props) => {
  const { categoryName } = props;
  const userContext = React.useContext(AppContext);
  const [imagesList, setImagesList] = React.useState<Image[]>([
    createEmptyImage(),
  ]);

  const updateImagesList = () => {
    const imagesListCopy = [...imagesList];
    userContext.imagesListChecked.map((image) => {
      const index = findImageIndex(image, imagesListCopy);

      if (index !== -1) imagesListCopy.splice(index, 1, image);
    });

    setImagesList([...imagesListCopy]);
  };

  const onLoadImagesList = async () => {
    const apiImagesList = await getImagesList(categoryName);
    const mapImagesList = mapImagesListFromApiToVm(apiImagesList);

    userContext.imagesListChecked.map((image) => {
      const index = findImageIndex(image, mapImagesList);

      if (index !== -1) mapImagesList.splice(index, 1, image);
    });

    setImagesList([...mapImagesList]);
  };

  React.useEffect(() => {
    onLoadImagesList();
  }, []);

  const setImage = (image, index, checked) => {
    const imagesListCopy = [...imagesList];
    imagesListCopy.splice(index, 1, { ...image, checked: checked });
    setImagesList([...imagesListCopy]);
  };

  React.useEffect(() => {
    updateImagesList();
  }, [userContext.imagesListChecked]);

  React.useEffect(() => {
    updateImagesList();
  }, [categoryName]);

  React.useEffect(() => {
    const index = findImageIndex(userContext.deletedImage, imagesList);
    if (index !== -1) setImage(userContext.deletedImage, index, false);
  }, [userContext.deletedImage]);

  return (
    <>
      <main className={classes.ImagesList}>
        {imagesList.map((image, index) => (
          <SingleImageComponent image={image} key={index} />
        ))}
      </main>
    </>
  );
};
