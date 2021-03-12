import React from 'react';
import { Button } from '@material-ui/core';
import * as classes from './navigation.component.styles';

export const NavigationComponent: React.FC = () => {
  return (
    /*     <nav>
      <ul className={classes.menu}>
        <li>
          <a href="#">Perros</a>
        </li>
        <li>
          <a href="#">Gatos</a>
        </li>
      </ul>
    </nav> */
    <ul className={classes.menu}>
      <li>
        <Button>cats</Button>
      </li>
      <li>
        <Button>dogs</Button>
      </li>
    </ul>
  );
};
