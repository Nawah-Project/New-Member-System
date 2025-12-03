import { Box, Typography, CardMedia, Grid ,Stack } from '@mui/material'
import { pro_space_data } from './pro_space_data'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useEffect, useState, memo } from 'react'
export default function ProSpace() {

    const [index, setIndex] = useState(null);
    useEffect(() => {
        const checkScreenSize = () => {
            window.innerWidth < 900 ? setIndex(0) : setIndex(null);
        };

        checkScreenSize();

        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    function increament() {
        if (index < pro_space_data.length - 1) setIndex((index) => index + 1);
    }

    function decrement() {
        if (index > 0) setIndex((index) => index - 1);
    }

    return (
        <Stack spacing={2}
            sx={{
                backgroundImage: 'url(/home/pro_space/pro_space_bg.jpg)',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                paddingInline: '3%',
                paddingTop: {
                    xs:"25%",
                    md:"20%",
                    lg:"10%"
                },
            }}

        >
            <Typography variant="h1"
                fontWeight={'bold'}
                fontStyle={'italic'}
                sx={
                    {
                        color: 'white',
                        textAlign: 'center',
                        fontSize: {
                            xs: '2rem',
                            sm:"3rem",
                            md: '5rem',
                        },
                    }
                }
            >مساحة مشروع نواة</Typography>

            <Grid container spacing={2}>
                {index === null ?
                    pro_space_data.map((update) =>
                        <Grid key={update.id} size={{ xs: 12, sm: 12, md: 6, lg: 4 }} alignItems='center'>
                            {ProSpaceCard(update)}
                        </Grid>) : <Grid key={pro_space_data[index].id} size={{ xs: 12, sm: 12, md: 4 }} alignItems='center'>
                        {ProSpaceCard(pro_space_data[index], increament, decrement, index)}
                    </Grid>}
            </Grid>
        </Stack>
    )
}

function ProSpaceCard(data, increament = null, decrement = null, index = null) {

    const ProSpaceImage = memo(({ src, title }) => <CardMedia
        component={'img'}
        loading="lazy"
        decoding="async"
        sx={{
            
            borderRadius: "5px",
            width: "100%", height: "100%",
            '&:hover': {
                transform: "scale(1.1)",
                transition: "transform 0.5s ease-in-out",
            },
            objectFit: "cover",
        }} src={src} alt={title} />)

    return (
        <Box id="update-card" key={data.id}>
            <Box id="image-container" sx={{ overflow: "hidden", borderRadius: "5px", width: "100%", height: "100%" }}>
                {
                    data.image ? <ProSpaceImage src={data.image} title={data.desc} />
                        : <Skeleton variant="rectangular" sx={{ borderRadius: "5px", color: "gray" }} width={'100%'} height={300} />
                }
            </Box>

            <Typography variant="h3" fontSize={"1.2rem"} textAlign={'center'} fontWeight={'bold'} sx={{ color: "white", paddingBlock: "2%" }}>{data.desc}</Typography>

            <Grid container spacing={2} alignItems={'center'} sx={{
                display: {
                    md: "none",
                }, marginBlock: "4%"
            }}>
                <Grid size={10}>
                    <Box sx={{ height: '2px', backgroundColor: "white", width: "100%" }}></Box>
                </Grid>
                <Grid size={1}>
                    <ArrowForwardIcon sx={{ fontSize: "large", color: index > 0 ? "#32C8ff" : "gray", cursor: "pointer" }} onClick={() => decrement()} />
                </Grid>
                <Grid size={1}>
                    <ArrowBackIcon sx={{ fontSize: "large", color: index < pro_space_data.length - 1 ? "#32C8ff" : "gray", cursor: "pointer" }} onClick={() => increament()} />
                </Grid>
            </Grid>
        </Box>
    );
}