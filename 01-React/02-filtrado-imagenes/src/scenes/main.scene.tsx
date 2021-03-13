import React from 'react';
import {
  CartComponent,
  ImagesListComponent,
  NavigationComponent,
} from '../pods';
import { AppContextProvider } from '../pods/context/appContextProvider';

interface Props {
  categoryName?: string;
}

export const MainScene: React.FC<Props> = (props) => {
  const { categoryName } = props;

  return (
    <>
      <NavigationComponent />
      <AppContextProvider>
        <ImagesListComponent categoryName={categoryName} />
        <CartComponent />
      </AppContextProvider>
    </>
  );
};
