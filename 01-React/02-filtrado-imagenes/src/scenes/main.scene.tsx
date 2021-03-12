import React from 'react';
import {
  CartComponent,
  ImagesListComponent,
  NavigationComponent,
} from '../pods';
import { AppContextProvider } from '../pods/context/appContextProvider';

export const MainScene: React.FC = () => {
  return (
    <>
      <NavigationComponent />
      <AppContextProvider>
        <ImagesListComponent />
        <CartComponent />
      </AppContextProvider>
    </>
  );
};
