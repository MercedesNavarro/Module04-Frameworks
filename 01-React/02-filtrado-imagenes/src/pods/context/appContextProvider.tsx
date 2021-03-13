import React from 'react';
import { findImageIndex } from '../../common/helpers/helpers';
import { createEmptyImage } from '../images-list/images-list.vm';
import { AppLayout } from '../../layout/app.layout';

export const AppContext = React.createContext({
  imagesListChecked: [],
  updateCart: (checked, image) => {},
  deletedImage: {},
  setDeletedImage: (image) => {},
});

export const AppContextProvider: React.FC = (props) => {
  const [imagesListChecked, setImagesListChecked] = React.useState([]);
  const [deletedImage, setDeletedImage] = React.useState(createEmptyImage);

  const updateCart = (checked, image) => {
    if (checked === true) {
      setImagesListChecked([...imagesListChecked, image]);
    } else {
      const imageListCheckedCopy = [...imagesListChecked];
      const index = findImageIndex(image, imageListCheckedCopy);

      imageListCheckedCopy.splice(index, 1);
      setImagesListChecked([...imageListCheckedCopy]);
      console.log(imagesListChecked);
    }
  };

  return (
    <AppContext.Provider
      value={{ imagesListChecked, updateCart, deletedImage, setDeletedImage }}
    >
      <AppLayout>{props.children}</AppLayout>
    </AppContext.Provider>
  );
};
