import React from 'react';
import { Pagination as Page } from '@material-ui/lab';
import { Member } from '../memberList/member.vm';
import * as classes from './pagination.component.styles';

interface Props {
  memberList: Member[];
  membersPerPage: number;
  totalMembers: number;
  paginate: (pageNumber: number) => void;
}

export const PaginationComponent: React.FC<Props> = (props) => {
  const { memberList, membersPerPage, totalMembers, paginate } = props;
  const totalPages = Math.ceil(totalMembers / membersPerPage);
  const [page, setPage] = React.useState(1);

  const handleChange = (e, page) => {
    paginate(page);
    setPage(page);
  };

  React.useEffect(() => {
    setPage(1);
  }, [memberList]);

  return (
    <Page
      className={classes.pagination}
      count={totalPages}
      defaultPage={1}
      color="primary"
      onChange={handleChange}
      showFirstButton
      showLastButton
      page={page}
    />
  );
};
