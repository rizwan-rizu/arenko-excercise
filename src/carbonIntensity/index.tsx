import { AppBar, Toolbar, Typography } from '@mui/material';

const CarbonIntesity = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Carbon Intensity
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default CarbonIntesity;