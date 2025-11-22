import { Container, Box, Typography, Button } from "@mui/material"
import CardMedia from '@mui/material/CardMedia';
import "./landing.css"
export default function Landing() {
    return (
        <Container maxWidth="2xl" sx={{
            height: {
                xs: "60dvh",
                lg: "80dvh"
            },
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }} id="landing">
            <Box sx={{
                width: "100%", height: "100%"
            }}>
                <CardMedia component="video" src="home/landing/landing_video.mp4" autoPlay loop muted disablePictureInPicture sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: -1
                }} />
            </Box>
            <Box id="cover-color"></Box>

            <Typography variant="h1" fontSize={{ xs: "3rem", lg: "5rem" }} color="white" fontWeight="bold" sx={{
                zIndex: 10,
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}>
                Nawah <br />Project
            </Typography>

            <Button id="landing-btn" variant="contained" sx={{
                zIndex: 10,
                bottom: {
                    xs: "10%",
                    lg: "5%"
                },
                padding: {
                    xs: "2% 4%",
                    md: "1% 2%",
                    lg: "1% 3%"
                },
                backgroundColor: "rgba(0, 0, 0, 0.797)",
                color: "white",
                '&:hover': {
                    backgroundColor: "white",
                    color: "black"
                }
            }}>
                <Typography variant="h5" fontSize={{ xs: "1.5rem", lg: "2rem" }} fontWeight={700}>انضم الان</Typography>
            </Button>
        </Container>
    )
}