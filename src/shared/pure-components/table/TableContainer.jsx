import {
  CircularProgress,
  Pagination,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import {
  StyledPaginationBox,
  StyledTable,
  StyledTableContainer,
  StyledTableHead,
  StyledTableRow,
} from './ui'

function TableContainer({
  tableStyle,
  containerStyle,
  spanTd = 6,
  message,
  isLoading,
  isContent,
  children,
  thContent,
  page,
  totalPages,
  callBack,
  ...props
}) {
  const shouldShowPagination = isContent && totalPages > 1;
  // const shouldShowPagination =
  //   page === 10 ? isContent && isContent >= 10 && page : isContent && page
  // // isContent >= 10 ? page : null
  return (
    <>
      <StyledTableContainer>
        <StyledTable sx={tableStyle} {...props}>
          <StyledTableHead>
            <TableRow>{thContent}</TableRow>
          </StyledTableHead>
          <TableBody>
            {isLoading ? (
              <TableRow
                sx={{
                  width: '100%',
                }}
              >
                <TableCell colSpan={spanTd}>
                  <CircularProgress size={30} />
                </TableCell>
              </TableRow>
            ) : isContent ? (
              children
            ) : (
              <TableRow>
                <TableCell colSpan={spanTd}>
                  <Typography variant="caption1">
                    {message || 'No Records Found'}
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>
      {Boolean(shouldShowPagination) && (
        <UseMyPagination
          totalPages={totalPages}
          page={page}
          callBack={callBack}
          margin={{ mt: 'auto' }}
        />
      )}
    </>
  )
}

const UseMyPagination = ({ margin, totalPages, callBack, page }) => {
  return (
    <StyledPaginationBox sx={margin}>
      <Pagination
        page={page}
        onChange={(e, value) => callBack(value)}
        count={totalPages}
        color="primary"
      />
    </StyledPaginationBox>
  )
}

export default TableContainer
