import { useState, useEffect } from 'react';

import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';



const RenderBooks = (props) => {

  const [show, setShow] = useState('');


  useEffect(() => {

    const columns = [
      { field: 'id', headerName: '#', width: 10, headerClassName: 'dataGridHeader', },
      { field: 'title', headerName: 'Title', width: 100, editable: false, headerClassName: 'dataGridHeader', },
      { field: 'author', headerName: 'Author', width: 150, editable: false, headerClassName: 'dataGridHeader', },
      { field: 'description', headerName: 'Description', width: 150, editable: false, headerClassName: 'dataGridHeader', },
      { field: 'published_date',headerName: 'Published date',width: 150,editable: false,headerClassName: 'dataGridHeader',} ];

    //If there are no books stored, shows the following text
    setShow(<Typography variant='body1' align='center'> Use the search box to see books on this list. </Typography>);

    
    if (props.booksList) {

      //Sets DataGrid to show on screen
      setShow(
        <Box
          sx={{
            height: '100%',
            width: '50%',
            '& .dataGridHeader': {
              backgroundColor: '#001C55',
              color: '#fff',
              fontSize: 20
            },
          }}


        >
          <DataGrid
            rows={props.booksList}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>);
    }

  }, [props.booksList]);

  return (
    <>
      <Typography variant='h4' align='center' sx={{ p: 5 }}> List of Books </Typography>
      {/*Shows the correct Text or table of books depending state */}
      {show}

    </>
  )
};

export default RenderBooks;