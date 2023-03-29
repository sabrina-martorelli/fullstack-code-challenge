import { useState } from 'react';

import axios from 'axios'

import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const endpoint = 'http://localhost:8000/api'


const SearchBooks = (props)  => {

  const [searchTerm, setSearchTerm] = useState('');
  
  const [booksList, setBooksList] = useState();

  // Set style for for button on form
  const theme = createTheme({
    palette: {
      brand: {
        main: '#001C55',
        contrastText: '#fff',
      },
    },
  });



  const handleClear = (event) => {
    setSearchTerm('');
    getAll();
  };


  const handleChange = (event) => {
    setSearchTerm(event.target.value);
 
  };


  const handleSubmit = (event) => {
   
   event.preventDefault();

   if(searchTerm.trim() !==''){ getSome();}
   else { getAll();}
   
   setSearchTerm('');

  }




  const getAll = async () => {
    const response = await axios.get(`${endpoint}/books`);
    props.onSearch(response.data.reverse());
  
    
}


  const getSome = async () => {
    const response =   await axios.post(`${endpoint}/books/search`, {searchTerm: searchTerm});
    props.onSearch(response.data.reverse());
   
    
}



  return (
    <>
      <Card style={{ maxWidth: 350, margin: "0 auto",}} >
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3} justifyContent="center" padding={2} >
              <Grid item xs={12}>
                <TextField
                  name='searchTerm'
                  value={searchTerm}
                  label='Search'
                  placeholder='Enter Author OR Title' 
                  variant='outlined'
                  onChange={handleChange}
                  fullWidth
                   />
              </Grid>


              <Grid item xs={12}>
              <ThemeProvider theme={theme}>
                <Button
                  type="submit"
                  variant='contained'
                  color= 'brand'
                  fullWidth
                  > Search Book </Button>
                  </ThemeProvider>
              </Grid>

              <Grid item xs={12}>
              <ThemeProvider theme={theme}>
                <Button
                  type="button"
                  variant='contained'
                  color= 'brand'
                  onClick ={handleClear}
                  fullWidth
                  > Clear Search </Button>
                  </ThemeProvider>
              </Grid>

            </Grid>
          </form>
        </CardContent>
      </Card>
    </>
  );
}

export default SearchBooks;