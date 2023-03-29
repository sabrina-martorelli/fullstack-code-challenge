
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import moment from 'moment';

const endpoint = 'http://localhost:8000/api/book';


const AddBooks = () => {



  const [date, setDate] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: ''
  });

  const navigate = useNavigate()

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
    });
   
  };

  const handleSubmit = async (event) => { 
    event.preventDefault();

    const formattedDate = moment(`${date}`).format('YYYY/MM/DD');

    await axios.post(endpoint, {title: formData.title, author: formData.author, description: formData.description, published_date: formattedDate})
  
    //Cleans inputs 
    setDate(null);
    setFormData({
      title: '',
      author: '',
      description: ''
    });
  
   // navigate('/');
    
  }


  return (
    <>
  
      <Card style={{ maxWidth: 350, margin: "0 auto",}} >
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
                  onChange={handleChange}
                  fullWidth
                  required />
              </Grid>

              <Grid item xs={12} >
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                  <DatePicker
                    label="Date"
                    value={date}  
                    onChange={(newValue) => {
                      setDate(newValue);
                    }}
                    renderInput={(params) => <TextField fullWidth required {...params} />}
                  />
                </LocalizationProvider>
              </Grid>

              <Grid item xs={12}>
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