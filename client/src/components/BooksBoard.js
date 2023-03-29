
import Grid from '@mui/material/Grid';
import AddBooks from './AddBooks';

const BooksBoard = () => {
    return ( 
        <>
        <Grid container spacing={1} justifyContent="center" pb={10}
          pr={5}
          pl={5}  >
  
          <Grid item xs={12} sm={7}>
          <AddBooks/>
          </Grid>
          <Grid item xs={12} sm={5} >
            {/* search */}
          </Grid>

          <Grid item xs={12} sm={5} >
            {/* booktable */}
          </Grid>

        </Grid>
      </>


     );
}
 
export default BooksBoard;