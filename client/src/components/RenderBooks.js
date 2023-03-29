import { useState, useEffect } from 'react';

import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';



const RenderBooks = (props) => {

  const [show, setShow] = useState('');


  useEffect(() => {

    const columns = [
      { field: 'id', headerName: '#', width: 100, headerClassName: 'dataGridHeader', },
      { field: 'title', headerName: 'Title', width: 400, editable: false, headerClassName: 'dataGridHeader', },
      { field: 'author', headerName: 'Author', width: 400, editable: false, headerClassName: 'dataGridHeader', },
      { field: 'description', headerName: 'Description', width: 400, editable: false, headerClassName: 'dataGridHeader', },
      { field: 'published_date',headerName: 'Published date',width: 400,editable: false,headerClassName: 'dataGridHeader',} ];

    //If there are no books stored, shows the following text
    setShow(<Typography variant='body1' align='center'> Use the search box to see books on this list. </Typography>);

    
    if (props.booksList) {

      //Sets DataGrid to show on screen
      setShow(
        <Box
          sx={{
            height: '650px',
            width: '100%',
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
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>);
    }

  }, [props.booksList]);

  return (
    <>

      {/*Shows the correct Text or table of books depending state */}
      {show}

    </>
  )
};

export default RenderBooks;