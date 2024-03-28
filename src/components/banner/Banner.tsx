import { Box, Container, Stack, Typography } from "@mui/material";
import ActionButton from "../actionButton/ActionButton.tsx";
import banner from "../../assets/images/banner.png";

type Props = {
  title: string;
}

const Banner = ({ title }: Props) => {
  return (
    <Box
      sx={{
        position: "relative",
        margin: "100px auto 50px auto",
        backgroundColor: "background.default",
        width: 1,
        height: "500px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg" sx={{ padding: { lg: "0px !important" } }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack
            direction="column"
            alignItems={{ md: "start", xs: "center" }}
            spacing={2}
            sx={{
              textAlign: { md: "unset", xs: "center" },
            }}
          >
            <Stack direction="row" alignItems="center" spacing={2}>
              <Box
                sx={{ width: 48, height: "1px", backgroundColor: "#252525" }}
              />
              <Typography
                sx={{
                  fontWeight: 300,
                  fontSize: "30px",
                  color: "secondary.main",
                  textTransform: "uppercase",
                }}
              >
                10% off
              </Typography>
            </Stack>
            <Typography
              sx={{
                fontWeight: 300,
                fontSize: "70px",
                color: "secondary.main",
                textTransform: "uppercase",
              }}
            >
              {title}
            </Typography>
            <ActionButton content="Start Shopping" />
          </Stack>
          <Box sx={{ width: 1, display: { md: "contents", xs: "none" } }}>
            <img
              src={banner}
              alt="banner image"
              style={{ width: "33.6%", position: "absolute", right: 0 }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Banner;
