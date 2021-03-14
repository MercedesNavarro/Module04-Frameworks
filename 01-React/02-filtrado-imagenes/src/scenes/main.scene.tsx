import React from 'react';
import { CartComponent, NavigationComponent } from '../pods';
import { AppContextProvider } from '../pods/context/appContextProvider';
import { RouterComponent } from '../core/router/router.component';

export const MainScene: React.FC = () => {
  return (
    <>
      <NavigationComponent />
      <AppContextProvider>
        <RouterComponent />
        <CartComponent />
      </AppContextProvider>
    </>
  );
};
