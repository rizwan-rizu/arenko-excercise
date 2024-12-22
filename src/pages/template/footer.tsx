import { Box, Typography } from "@mui/material"

const Footer = () => {
  return (
    <Box position={"fixed"} left={0} bottom={0} right={0} textAlign={"center"} p={1}>
      <Typography variant="body2">Built with ❤️ by Rizu</Typography>
    </Box>
  )
}

export default Footer