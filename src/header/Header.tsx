import { Box, colors, Container, Stack, Typography } from "@mui/material";


const Header = () => {
  return (
    <Box sx={{ backgroundColor: "background.default", width: 1, height: "500px", display: "flex", alignItems: "center", }}>
      <Container maxWidth="lg" sx={{ padding: { lg: "0px !important" } }}>
        <Stack direction={"row"} alignItems={{ md: "start", xs: "center"}} spacing={2.5} sx={{ textAlign: { md: "unset", xs: "center" } }}>
          <Typography sx={{ fontWeight: 300, fontSize: { lg: "80px", xs: "70px"}, colors:"secondary.main", textTransform: "uppercase",} }>
            Our Products 
            <br /> are great
          </Typography>
          
        </Stack>
      </Container>
    </Box>
  )
}

export default Header