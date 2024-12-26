import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import NotFoundIllustration from '../assets/images/notFound.svg';
import MuiButton from './button';

const PageNotFound = () => {
  const navigate = useNavigate()

  return (
    <Box height={"100vh"} display={"flex"} alignItems={"center"} justifyContent={"center"} role="alert" aria-live="assertive" aria-atomic="true">
      <Box textAlign={'center'}>
        <img src={NotFoundIllustration} height={"250px"} alt="Page not found illustration" aria-hidden="true" />
        <Box pt={2.5} textAlign={"center"}><Typography variant="h5" style={{ letterSpacing: 2 }}>Page Not Found!</Typography> </Box>
        <Box pt={2.5} display="flex" alignItems="center" justifyContent="center">
          <Box width={200}>
            <MuiButton label="Go Back" variant='outlined' handleClick={() => navigate(-1)} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default PageNotFound;