import { Box, Typography, CardMedia, Grid, Stack } from '@mui/material'
import { pro_space_data } from './pro_space_data'
import { useEffect, useState, memo } from 'react'
import ProgressControls, { updateProgress } from '../../../../const/progress/ProgressBar'
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

    useEffect(() => {
        updateProgress(index, pro_space_data.length, 'pro-space-progress');
    }, [index]);

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
                paddingInline: {
                    xs: "24px",
                    md: "3%",
                },
                paddingTop: {
                    xs: "25%",
                    md: "20%",
                    lg: "10%"
                },
                paddingBottom: "5%"
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
                            xs: '3rem',
                            sm: "3rem",
                            md: '5rem',
                        },
                    }
                }
            >مساحة مشروع نواة</Typography>

            <Grid container spacing={2} alignItems={'center'} justifyContent={'center'}>
                {index === null ?
                    pro_space_data.map((update) =>
                        <Grid key={update.id} size={{ xs: 12, sm: 12, md: 6, lg: 3 }} >
                            {ProSpaceCard(update)}
                        </Grid>) : <Grid key={pro_space_data[index].id} size={{ xs: 12, sm: 12, md: 4 }} >
                        {ProSpaceCard(pro_space_data[index])}
                    </Grid>}
            </Grid>
            {index !== null &&

                <ProgressControls id={'pro-space-progress'} index={index} dataLength={pro_space_data.length} increament={increament} decrement={decrement} />

            }
        </Stack>
    )
}

function ProSpaceCard(data) {

    const ProSpaceImage = memo(({ src, title }) => <CardMedia
        component={'img'}
        loading="lazy"
        decoding="async"
        sx={{
            '&:hover': {
                transform: "scale(1.1)",
                transition: "transform 0.5s ease-in-out",
            },
            objectFit: "cover",
        }} src={src} alt={title} />)

    return (
        <Box id="update-card" key={data.id}>
            <Box id="image-container" sx={{
                overflow: "hidden",
                aspectRatio: '0.75' }}>
                {
                    data.image ? <ProSpaceImage src={data.image} title={data.desc} />
                        : <Skeleton variant="rectangular" sx={{ borderRadius: "5px", color: "gray" , width : "100%", height : "100%"}} />
                }
            </Box>
            <Typography variant="h3" textAlign={'center'} fontWeight={'bold'} fontSize={'1.2rem'} sx={{ color: "white", paddingBlock: "2%" , overflow : 'hidden', textOverflow : 'ellipsis', whiteSpace : 'nowrap'}}>{data.desc}</Typography>
        </Box>
    );
}