import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { Pagination, PaginationItem } from '@mui/material';

const GarajinoPagination = ({ page, handlePageChange, items }) => (
  <Pagination
    dir="ltr"
    size="large"
    page={page}
    color="primary"
    count={Math.ceil(items?.length / 20)}
    onChange={handlePageChange}
    renderItem={(item) => (
      <PaginationItem
        slots={{ previous: ArrowBackIos, next: ArrowForwardIos }}
        {...item}
      />
    )}
    shape="rounded"
    sx={{
      '& .MuiPaginationItem-root': {
        color: '#555',
        fontSize: '1.5rem',
        fontWeight: 600,
        width: '3rem',
        height: '3rem',
        borderRadius: '16px',
        border: '1px solid #ccc',
        transition: 'all 0.2s ease-in-out'
      },
      '& .MuiPaginationItem-root:hover': {
        backgroundColor: '#f5f5f5'
      },
      '& .MuiPaginationItem-root.Mui-selected': {
        color: '#1976D2',
        border: '1px solid #1976d2',
        backgroundColor: '#ffffff'
      },
      '& .MuiPaginationItem-root.Mui-selected:hover': {
        backgroundColor: '#ffffff'
      },
      '& .MuiPaginationItem-root.Mui-disabled': {
        backgroundColor: '#919EAB',
        color: '#C4CDD5'
      }
    }}
  />
);
export default GarajinoPagination;
