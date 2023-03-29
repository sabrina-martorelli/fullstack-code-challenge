import { useState, useEffect } from 'react';

import axios from 'axios'

import AddBooks from './AddBooks';
import SearchBooks from './SearchBooks';
import RenderBooks from './RenderBooks';

import Grid from '@mui/material/Grid';

const endpoint = 'http://localhost:8000/api'

//Component that renders all the other components of the app: AddBooks, SearchBooks and RenderBooks
const BooksBoard = () => {

    const [bookList, setBookList] = useState('');

    //UseEffect to call getAll to render the page the first time.
    useEffect(() => {
        getAll();
    }, []);

    //Gets the compleat list of books from DB.
    const getAll = async () => {
        const response = await axios.get(`${endpoint}/books`);
        setBookList(response.data.reverse());
    }

    //Function to manage lift the state
    const handleBookList = (list) => {
        setBookList(list);
    };

    //Return a Material UI Grid
    return (
        <>
            <Grid container 
                spacing={0} 
                justifyContent="center"
                pb={10}
                pr={20}
                pl={30}  >   
                <Grid item xs={12} sm={6}>
                    <AddBooks onAdd={handleBookList} />
                </Grid>

                <Grid item xs={12} sm={6} pt={15}>
                    <SearchBooks onSearch={handleBookList} />
                </Grid>

                <Grid item xs={12} pt={15} >
                    <RenderBooks booksList={bookList} />
                </Grid>
            </Grid>
        </>
    );
}

export default BooksBoard;