'use client'

import {
  styled,
  AppBar,
  Toolbar,
  TableContainer as TContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  CircularProgress,
  Pagination,
  Box,
  Grid,
} from '@mui/material'

export const TableGrid = styled(Grid)(({ theme }) => ({
  padding: '32px',
  borderRadius: '4px',
  backgroundColor: theme.palette.background.body,
  boxShadow: '-1px 2px 13px -7px rgba(66, 68, 90, 1)',
}))

export const AppBarStyled = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  background: theme.palette.background.paper,
  justifyContent: 'center',
  backdropFilter: 'blur(4px)',
}))

export const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
  width: '100%',
  color: theme.palette.text.light,
}))

export const StyledTableContainer = styled(TContainer)(({ theme }) => ({
  // ".MuiTableCell-root": { textAlign: "left" },
  '& tbody tr:nth-of-type(odd)': {
    backgroundColor: theme.palette.background.default,
  },
}))

export const StyledTable = styled(Table)({
  // "& .MuiTableCell-root": {
  //     textAlign: "center"
  // },
})

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  boxShadow: '0px 6px 43px -20px rgba(0,0,0,0.3)',
  background: 'white !important',
  transition: '0.5s',
  cursor: "pointer"
}))

export const StyledPaginationBox = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
})
