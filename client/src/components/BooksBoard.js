import { useState } from 'react';


import AddBooks from './AddBooks';
import SearchBooks from './SearchBooks';

import Grid from '@mui/material/Grid';

const BooksBoard = () => {

    const [bookList, setBookList] = useState([]); 

    const handleBookList = (bookList) => {
    // setBookList( prevBookList => {
    //     return [bookList, ...prevBookList]
    // });

     setBookList(bookList);

    };
    return ( 
        <>
        <Grid container spacing={1} justifyContent="center" pb={10}
          pr={5}
          pl={5}  >
  
          <Grid item xs={12} sm={7}>
          <AddBooks/>
          </Grid>
          <Grid item xs={12} sm={5} >
          <SearchBooks onSearch={handleBookList}/>
      
          </Grid>

          <Grid item xs={12} sm={5} >
            {/* booktable */}
          </Grid>

        </Grid>
      </>


     );
}
 
export default BooksBoard;