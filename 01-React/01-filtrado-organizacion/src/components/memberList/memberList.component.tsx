import React from 'react';
import { MemberRowComponent } from './memberRow.component';
import { Member } from './member.vm';
import { PaginationComponent } from '../pagination';
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@material-ui/core';
import { StyledTableCell, StyledTableRow } from './memberList.component.styles';

interface Props {
  memberList: Member[];
}

export const MemberListComponent: React.FC<Props> = (props) => {
  const { memberList } = props;

  const [currentPage, setCurrentPage] = React.useState(1);
  const [membersPerPage, setMembersPerPage] = React.useState(5);

  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = memberList.slice(
    indexOfFirstMember,
    indexOfLastMember
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell variant="head">Image</StyledTableCell>
            <StyledTableCell variant="head">Id</StyledTableCell>
            <StyledTableCell variant="head">Name</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentMembers.map((member) => (
            <StyledTableRow key={member.id}>
              <MemberRowComponent member={member} />
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <PaginationComponent
        memberList={memberList}
        membersPerPage={membersPerPage}
        totalMembers={memberList.length}
        paginate={paginate}
      />
    </>
  );
};
