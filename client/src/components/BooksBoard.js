import { useState, useEffect } from 'react';

import axios from 'axios'

import AddBooks from './AddBooks';
import SearchBooks from './SearchBooks';
import RenderBooks from './RenderBooks';

import Grid from '@mui/material/Grid';

const endpoint = 'http://localhost:8000/api'

const BooksBoard = () => {

    const [bookList, setBookList] = useState(''); 
  
 
    useEffect(() => { 
    
   getAll();

    }, []);

    const getAll = async () => {
        const response = await axios.get(`${endpoint}/books`);
        setBookList(response.data);        
    }
    
  

    const handleBookList = (list) => {

        setBookList(list);

    };
    return ( 
        <>
        <Grid container spacing={0} justifyContent="center" 
          pb={10}
          pr={20}
          pl={30}  >
  
          <Grid item xs={12} sm={6}>
          <AddBooks onAdd={handleBookList}/>
          </Grid>

          <Grid item xs={12} sm={6} pt={15}>
          <SearchBooks onSearch={handleBookList}/> 
          </Grid>

          <Grid item xs={12} pt={15} >
            <RenderBooks booksList={bookList}/>
          </Grid>

        </Grid>
      </>


     );
}
 
export default BooksBoard;