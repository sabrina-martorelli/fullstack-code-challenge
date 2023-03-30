import { useState } from 'react';

import axios from 'axios';

import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import moment from 'moment';


const endpoint = 'http://localhost:8000/api';

//Component that adds a new book to the DB and rerender the table
const AddBooks = (props) => {

  
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    date:' '
  });

  // Set style for for button on form
  const theme = createTheme({
    palette: {
      brand: {
        main: '#001C55',
        contrastText: '#fff',
      },
    },
  });


  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    }) 
  };

  const handleSubmit = async (event) => { 
    event.preventDefault();
    
    const formattedDate = moment(`${formData.date}`).format('YYYY/MM/DD');
    //Send data of new book to DB
    await axios.post(`${endpoint}/book`, {title: formData.title, author: formData.author, description: formData.description, published_date: formattedDate})
    //Gets list of books including new one
    const response = await axios.get(`${endpoint}/books`); 
    //Lift the state to pass new list to next RenderBooks component
    props.onAdd(response.data.reverse());

    //Clear inputs and date
    setFormData({
      title: '',
      author: '',
      description: '',
      date:' '
    });
   
  }
  //Return a Material UI Grid with form 
  return (
    <>
        <Card style={{ maxWidth: 400, margin: "0 auto",}} >
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3} justifyContent="center" padding={2} >   
              <Grid item xs={12}>
                <TextField
                  name='title'
                  value={formData.title}
                  label='Title'
                  placeholder='Enter Title'
                  variant='outlined'
                  onChange={handleChange}
                  fullWidth
                  required />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name='author'
                  value={formData.author}
                  label='Author'
                  placeholder='Enter Author'
                  variant='outlined'
                  onChange={handleChange}
                  fullWidth
                  required />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name='description'
                  value={formData.description}
                  label='Description'
                  placeholder='Enter Description'
                  variant='outlined'
                  rows={4}
                  multiline
                  onChange={handleChange}
                  fullWidth
                  required />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  type='date'
                  name='date'
                  value={formData.date}
                  label='Published Date'
                  placeholder='Enter Published'
                  variant='outlined'    
                  onChange={handleChange}
                  fullWidth
                  required />
              </Grid>

              <Grid item xs={12} >
              <ThemeProvider theme={theme}>
                <Button
                  type="submit"
                  variant='contained'
                  color= 'brand'
                  fullWidth
                  > Add Book </Button>
                  </ThemeProvider>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </>
  );
}

export default AddBooks;