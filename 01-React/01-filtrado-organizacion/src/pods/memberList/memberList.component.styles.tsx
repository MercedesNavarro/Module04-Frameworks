import { withStyles, TableCell, TableRow } from '@material-ui/core';

export const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightBold,
    textTransform: 'uppercase',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

export const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.grey[200],
    },
  },
}))(TableRow);
