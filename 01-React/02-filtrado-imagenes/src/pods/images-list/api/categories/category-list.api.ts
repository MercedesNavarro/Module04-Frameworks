import { categories } from './category-list.mock-data';

let categoryList = [...categories];

export const getCategoryList = async () => {
  return categoryList;
};
