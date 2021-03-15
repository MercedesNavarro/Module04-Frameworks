import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { useStyles } from './navigation.component.styles';
import { getCategoryList } from './images-list/api/categories/category-list.api';
import { Category } from './images-list/api/categories/category-list.api-model';
import { generatePath, Link, HashRouter } from 'react-router-dom';

export const NavigationComponent: React.FC = () => {
  const [categoryList, setCategoryList] = React.useState<Category[]>([]);
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const onLoadCategories = async () => {
    const categories = await getCategoryList();
    setCategoryList(categories);
  };

  React.useEffect(() => {
    onLoadCategories();
  }, []);

  return (
    <>
      <HashRouter>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction
            label="ALL"
            component={Link}
            to={generatePath('/')}
          />

          {categoryList.map((category, index) => (
            <BottomNavigationAction
              key={index}
              label={category.name}
              component={Link}
              to={generatePath('/:category', {
                category: category.name,
              })}
            />
          ))}
        </BottomNavigation>
      </HashRouter>
    </>
  );
};
