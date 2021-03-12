import React from 'react';
import { AppContext } from './context/appContextProvider';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

export const CartComponent: React.FC = () => {
  const userContext = React.useContext(AppContext);
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      })
    );
  }
  const updateCheckbox = (image) => {
    userContext.setDeletedImage(image);
  };

  return (
    <div>
      <Typography variant="h6">Cart</Typography>
      <div>
        <List dense={dense}>
          {userContext.imagesListChecked.map((imageChecked) => (
            <ListItem key={imageChecked.id}>
              <ListItemIcon>
                <DeleteIcon
                  onClick={() => {
                    userContext.updateCart(false, imageChecked);
                    updateCheckbox(imageChecked);
                  }}
                />
              </ListItemIcon>
              <ListItemText primary={imageChecked.title} />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};
