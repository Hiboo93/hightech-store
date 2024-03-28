import { Container, Stack, Typography } from "@mui/material";
import logo from "../../assets/images/Logo.png";
import {
  GitHub,
  Instagram,
  PhoneIphone,
  Telegram,
  WhatsApp,
} from "@mui/icons-material";

const Footer = () => {
  const QuickLinks = [
    { title: "Home" },
    { title: "About" },
    { title: "Shop" },
    { title: "Blogs" },
    { title: "Contact" },
  ];

  const HelpLinks = [
    { title: "Track Your Order" },
    { title: "Returns policies" },
    { title: "Shipping + Delivery" },
    { title: "Contact Us" },
    { title: "Faqs" },
  ];

  return (
    <Container
      maxWidth="lg"
      sx={{ padding: { lg: "0px" }, margin: "100px auto 30px auto" }}
    >
      <Stack
        direction={{ lg: "row", xs: "column" }}
        alignItems={{ lg: "center", xs: "start" }}
        justifyContent="space-between"
        sx={{ width: 1, gap: "50px" }}
      >
        <Stack direction="column" spacing={1.5}>
          <img src={logo} alt="logo" style={{ width: "30%" }} />
          <Typography
            sx={{
              maxWidth: "300px",
              fontSize: 16,
              fontWeight: 300,
              color: "#3a3a3a",
            }}
          >
            Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.
            Gravida massa voluptpat aenean odio erat nullam fringilla.
          </Typography>
          <Stack direction="row" alignItems="center" spacing={3}>
            <Instagram
              sx={{
                fill: "#9d9d9d",
                cursor: "pointer",
                "&:hover": { fill: "#72aec8" },
              }}
            />
            <GitHub
              sx={{
                fill: "#9d9d9d",
                cursor: "pointer",
                "&:hover": { fill: "#72aec8" },
              }}
            />
            <WhatsApp
              sx={{
                fill: "#9d9d9d",
                cursor: "pointer",
                "&:hover": { fill: "#72aec8" },
              }}
            />
            <Telegram
              sx={{
                fill: "#9d9d9d",
                cursor: "pointer",
                "&:hover": { fill: "#72aec8" },
              }}
            />
            <PhoneIphone
              sx={{
                fill: "#9d9d9d",
                cursor: "pointer",
                "&:hover": { fill: "#72aec8" },
              }}
            />
          </Stack>
        </Stack>
        <Stack 
          direction="column" 
          spacing={1}
        >
          <Typography
            sx={{
              maxWidth: "200px",
              fontSize: 20,
              fontWeight: 400,
              color: "#272727",
              textTransform: "uppercase",
            }}
          >
            Quick links
          </Typography>
          {
            QuickLinks.map((link, index:number) => (
              <Typography 
                key={index} 
                sx={{ 
                  fontSize: 14, 
                  fontWeight: 400,
                  color: "#272727",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  "&:hover": { color: "#72aec8" }
                }}
              >
                {link.title}
              </Typography>
            ))
          }
        </Stack>

        <Stack 
          direction="column" 
          spacing={1}>
          <Typography
            sx={{
              maxWidth: "200px",
              fontSize: 20,
              fontWeight: 400,
              color: "#272727",
              textTransform: "uppercase",
            }}
          >
            Help & Info
          </Typography>
          {
            HelpLinks.map((link, index:number) => (
              <Typography 
                key={index} 
                sx={{ 
                  fontSize: 14, 
                  fontWeight: 400,
                  color: "#272727",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  "&:hover": { color: "#72aec8" }
                }}
              >
                {link.title}
              </Typography>
            ))
          }
        </Stack>
        <Stack direction="column" spacing={1}>
        <Typography
            sx={{
              maxWidth: "200px",
              fontSize: 20,
              fontWeight: 400,
              color: "#272727",
              textTransform: "uppercase",
            }}
          >
            Contact Us
          </Typography>
          <Typography 
            sx={{ 
              color: "#3a3a3a", 
              fontSize: 16}}
            >
              Do you have any queries or <br /> suggestions <br />
              <span style={{ fontWeight: 500, textDecoration: "underline", cursor: "pointer"}}>info@gmail.com</span>
            </Typography>
          <Typography 
            sx={{ 
              color: "#3a3a3a", 
              fontSize: 16}}
            >
              If you need support? Just give us <br /> a call. <br />
              <span style={{ fontWeight: 500, textDecoration: "underline", cursor: "pointer"}}>+33 7 50 47 12 63</span>
            </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Footer;
