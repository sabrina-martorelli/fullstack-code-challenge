import React from 'react';

import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import moment from 'moment';

//Component that show a list of books in a table (Materia UI data Grid)
const RenderBooks = (props) => {

    //Sets columns format and data
    const columns = [
        { field: 'id', headerName: '#', width: 100, headerClassName: 'dataGridHeader', },
        { field: 'title', headerName: 'Title', width: 300, editable: false, headerClassName: 'dataGridHeader', },
        { field: 'author', headerName: 'Author', width: 200, editable: false, headerClassName: 'dataGridHeader', },
        { field: 'published_date', headerName: 'Published date', width: 200, editable: false, headerClassName: 'dataGridHeader',valueFormatter: params => moment(params?.value).format("YYYY/MM/DD") },
        { field: 'description', headerName: 'Description', width: 1500, editable: false, headerClassName: 'dataGridHeader', }
       
    ];
    
    //Returns a Material UI Data Grid that use the list of books from the DB as rows
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