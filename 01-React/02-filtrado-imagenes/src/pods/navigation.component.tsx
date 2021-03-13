import React from 'react';
import { Button } from '@material-ui/core';
import * as classes from './navigation.component.styles';
import { getCategoryList } from './images-list/api/categories/category-list.api';
import { Category } from './images-list/api/categories/category-list.api-model';
import { generatePath, Link, HashRouter } from 'react-router-dom';

export const NavigationComponent: React.FC = () => {
  const [categoryList, setCategoryList] = React.useState<Category[]>([]);

  const onLoadCategories = async () => {
    const categories = await getCategoryList();
    setCategoryList(categories);
  };

  React.useEffect(() => {
    onLoadCategories();
  }, []);

  return (
    <HashRouter>
      <div className={classes.menu}>
        <Link to={generatePath('/')}>
          <Button>ALL</Button>
        </Link>
        {categoryList.map((category, index) => (
          <Link
            key={index}
            to={generatePath('/:category', {
              category: category.name,
            })}
          >
            <Button>{category.name}</Button>
          </Link>
        ))}
      </div>
    </HashRouter>
  );
};
