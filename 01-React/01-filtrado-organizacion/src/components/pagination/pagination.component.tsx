import React from 'react';
import { Pagination as Page } from '@material-ui/lab';
import { Member } from '../memberList/member.vm';

interface Props {
  memberList: Member[];
  membersPerPage: number;
  totalMembers: number;
  paginate: (pageNumber: number) => void;
}

export const PaginationComponent: React.FC<Props> = (props) => {
  const { memberList, membersPerPage, totalMembers, paginate } = props;
  const totalPages = Math.ceil(totalMembers / membersPerPage);

  const handleChange = (e, page) => {
    paginate(page);
  };

  return (
    <Page
      count={totalPages}
      defaultPage={1}
      color="primary"
      onChange={handleChange}
    />
  );
};
