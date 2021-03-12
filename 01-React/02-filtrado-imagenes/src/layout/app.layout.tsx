import React from 'react';
import * as classes from './app.layout.styles';

export const AppLayout: React.FC = (props) => {
  const { children } = props;

  return <div className={classes.layout}>{children}</div>;
};
