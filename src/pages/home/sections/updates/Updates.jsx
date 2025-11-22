import { useEffect, useState, memo } from "react";
import { updatesData } from "./updates_data";
import { Box, Container, Typography, Grid, CardMedia, Skeleton } from "@mui/material";
import NearMeIcon from "@mui/icons-material/NearMe";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./updates.css";

export default function Updates() {
    const [index, setIndex] = useState(null);
    useEffect(() => {
        // Check immediately on mount
        const checkScreenSize = () => {
            window.innerWidth < 900 ? setIndex(0) : setIndex(null);
        };

        // Run on mount
        checkScreenSize();

        // Add resize listener
        window.addEventListener('resize', checkScreenSize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    function increament() {
        if (index < updatesData.length - 1) setIndex(index + 1);
    }
    function decrement() {
        if (index > 0) setIndex(index - 1);
    }
    return (
        <Container maxWidth="2xl" id="update-section">
            <Box id="section-header">
                <Typography
                    sx={{
                        fontSize: { xs: "2rem", md: "3rem" },
                        fontWeight: "bold",
                        fontStyle: "italic",
                        maxWidth: {
                            xs: "20%",
                            sm: "30%",
                            md: "50%",
                        },
                    }}
                >
                    اخر المستجدات
                </Typography>
                <Typography
                    sx={{
                        fontSize: { xs: "1.2rem", md: "1.5rem" },
                        fontWeight: "bold",
                        fontStyle: "italic",
                        maxWidth: {
                            xs: "40%",
                            sm: "45%",
                            md: "50%",
                        },
                        color: "black",
                        '&:hover': {
                            color: "#32C8ff",
                            textDecoration: "underline",
                        },
                        cursor: "pointer",
                        transition: "all 0.5s ease",
                    }}
                >
                    انتقل لصفحة المستجدات
                    <NearMeIcon
                        sx={{
                            fontSize: {
                                xs: "medium",
                                md: "large",
                            },
                            rotate: "270deg",
                            marginRight: "10px",
                        }}
                        color="primary"
                    />
                </Typography>
            </Box>
            <Grid container spacing={2}>
                {index === null ?
                    updatesData.map((update) =>
                        <Grid key={update.id} size={{ xs: 12, sm: 12, md: 6, lg: 4 }} alignItems='center'>
                            {UpdateCard(update)}
                        </Grid>) : <Grid key={updatesData[index].id} size={{ xs: 12, sm: 12, md: 4 }} alignItems='center'>
                        {UpdateCard(updatesData[index], increament, decrement, index)}
                    </Grid>}
            </Grid>
        </Container>
    );
}

function UpdateCard(update, increament = null, decrement = null, index = null) {

    const UpdateImage = memo(({ src, title }) => <CardMedia

        component={'img'}
        loading="lazy"
        decoding="async"
        sx={{
            borderRadius: "5px", width: "100%", height: "100%", '&:hover': {
                transform: "scale(1.1)",
                transition: "transform 0.5s ease-in-out",
            },
            objectFit: "fill",
        }} src={src} alt={title} />)

    return (
        <Box id="update-card" key={update.id}>
            <Box id="image-container" sx={{ overflow: "hidden", borderRadius: "5px", marginBottom: "2%" }}>
                {
                    update.image ? <UpdateImage src={update.image} title={update.title} />
                        : <Skeleton variant="rectangular" sx={{ borderRadius: "5px", color: "gray" }} width={'100%'} height={300} />
                }
            </Box>
            <Typography variant="p" sx={{ marginBlock: "4%" }}>
                <Typography color="#32C8ff" fontWeight="700" variant="strong">{update.subtitle}</Typography> | <Typography fontWeight="500" variant="small">{update.date}</Typography>
            </Typography>
            <Typography variant="h3" fontSize={"1.5rem"} fontWeight={'bold'} sx={{ marginBlock: "1%" }}>{update.title}</Typography>
            <Typography variant="p" fontWeight='500' sx={{ marginBlock: "1%" }}>{update.description}</Typography>
            <Grid container spacing={2} alignItems={'center'} sx={{
                display: {
                    md: "none",
                }, marginBlock: "4%"
            }}>
                <Grid size={10}>
                    <Box sx={{ height: '2px', backgroundColor: "gray", width: "100%" }}></Box>
                </Grid>
                <Grid size={1}>
                    <ArrowForwardIcon sx={{ fontSize: "large", color: index > 0 ? "#32C8ff" : "gray", cursor: "pointer" }} onClick={() => decrement()} />
                </Grid>
                <Grid size={1}>
                    <ArrowBackIcon sx={{ fontSize: "large", color: index < updatesData.length - 1 ? "#32C8ff" : "gray", cursor: "pointer" }} onClick={() => increament()} />
                </Grid>
            </Grid>
        </Box>
    );
}