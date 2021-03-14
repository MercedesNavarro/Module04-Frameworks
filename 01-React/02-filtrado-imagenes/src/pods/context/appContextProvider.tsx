import React from 'react';
import { Image } from '../images-list/images-list.vm';
import { findImageIndex } from '../../common/helpers/helpers';
import { createEmptyImage } from '../images-list/images-list.vm';
import { AppLayout } from '../../layout/app.layout';

export const AppContext = React.createContext({
  imagesListChecked: [],
  setImagesListChecked: (imageList: Image[]): void => {},
  updateCart: (checked: boolean, image: Image): void => {},
  deletedImage: createEmptyImage(),
  setDeletedImage: (image: Image): void => {},
});

export const AppContextProvider: React.FC = (props) => {
  const [imagesListChecked, setImagesListChecked] = React.useState([]);
  const [deletedImage, setDeletedImage] = React.useState(createEmptyImage);

  const updateCart = (checked, image) => {
    if (checked === true) {
      setImagesListChecked([...imagesListChecked, image]);
    } else {
      const imagesListCheckedCopy = [...imagesListChecked];
      const index = findImageIndex(image, imagesListCheckedCopy);

      imagesListCheckedCopy.splice(index, 1);
      setImagesListChecked([...imagesListCheckedCopy]);
    }
  };

  return (
    <AppContext.Provider
      value={{
        imagesListChecked,
        updateCart,
        deletedImage,
        setDeletedImage,
        setImagesListChecked,
      }}
    >
      <AppLayout>{props.children}</AppLayout>
    </AppContext.Provider>
  );
};
