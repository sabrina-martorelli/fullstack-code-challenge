
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

const RenderBooks = (props) => {

    const columns = [
        { field: 'id', headerName: '#', width: 100, headerClassName: 'dataGridHeader', },
        { field: 'title', headerName: 'Title', width: 400, editable: false, headerClassName: 'dataGridHeader', },
        { field: 'author', headerName: 'Author', width: 400, editable: false, headerClassName: 'dataGridHeader', },
        { field: 'description', headerName: 'Description', width: 1100, editable: false, headerClassName: 'dataGridHeader', },
        { field: 'published_date', headerName: 'Published date', width: 400, editable: false, headerClassName: 'dataGridHeader', }];

    return (
        <>
        <Typography variant='h6' align='left' sx={{ p: 1 }}> Use the columns names to sort the books. </Typography>   
        <Box
           sx={{
            height: '650px',
            width: '100%',
            '& .dataGridHeader': {
            backgroundColor: '#001C55',
            color: '#fff',
            fontSize: 20},
            }}  >
            <DataGrid
                rows={props.booksList}
                columns={columns}
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
            />
            </Box>
        </>
    )
};

export default RenderBooks;