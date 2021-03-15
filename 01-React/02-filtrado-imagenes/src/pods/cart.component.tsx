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
  const [empty, setEmpty] = React.useState(true);

  const updateCheckbox = (image) => {
    userContext.setDeletedImage(image);
  };

  React.useEffect(() => {
    if (userContext.imagesListChecked.length !== 0) setEmpty(false);
    else setEmpty(true);
  }, [userContext.imagesListChecked]);

  return (
    <div>
      <Typography
        variant="h6"
        color="textSecondary"
        style={{ textTransform: 'uppercase' }}
      >
        Cart
      </Typography>
      <div>
        {empty && (
          <Typography variant="body1" style={{ padding: '20px 10px' }}>
            You're cart is empty. Start shopping!
          </Typography>
        )}
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
