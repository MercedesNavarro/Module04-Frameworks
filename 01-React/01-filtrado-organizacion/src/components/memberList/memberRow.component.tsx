import React from 'react';
import { Member } from './member.vm';
import { TableCell } from '@material-ui/core';
import * as classes from './memberRowImage.styles';

interface Props {
  member: Member;
}

export const MemberRowComponent: React.FC<Props> = (props) => {
  const { member } = props;

  return (
    <>
      <TableCell>
        <img src={member.avatar} className={classes.avatarImage} />
      </TableCell>
      <TableCell>{member.id}</TableCell>
      <TableCell>{member.login}</TableCell>
    </>
  );
};
