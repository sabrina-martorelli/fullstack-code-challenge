import Typography from '@mui/material/Typography';

const NotFound = () => {
    return (
        <>
            {<Typography
                variant='h4'
                align='center'
                sx={{ p: 5 }}>
                Page not found.The URL doesn't exist on the site.
            </Typography> /}

        </>

    );
}

export default NotFound;