import Typography from '@mui/material/Typography';

const NotFound = () => {
    return (
        <>
            {<Typography
                variant='h4'
                align='center'
                sx={{ pt: 50 }}>
                Page not found. The URL doesn't exist on this site.
            </Typography>
            }

        </>

    );
}

export default NotFound;