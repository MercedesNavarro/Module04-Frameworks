import React from 'react';
import { Image } from './images-list.vm';
import { AppContext } from '../context/appContextProvider';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from '@material-ui/core';

interface Props {
  image: Image;
}

export const SingleImageComponent: React.FC<Props> = (props) => {
  const { image } = props;
  const userContext = React.useContext(AppContext);

  const handleImageChecked = (e) => {
    const checked = e.target.checked;
    const imageChecked = {
      ...image,
      checked: checked,
    };

    userContext.updateCart(checked, imageChecked);
  };

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          image={`/src/assets/images/${image.fileName}`}
          alt={image.title}
          height="140"
        />
      </CardActionArea>
      <CardContent>
        <input
          type="checkbox"
          onChange={handleImageChecked}
          checked={image.checked}
        />
        {image.title}
      </CardContent>
    </Card>
  );
};
