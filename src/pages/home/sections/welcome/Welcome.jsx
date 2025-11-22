import { Box, Button, CardMedia, Grid, Typography } from '@mui/material'
export default function Welcome() {
    return (
            <Grid container spacing={0}
                justifyContent={'space-between'}
                sx={{
                    width: "100%",
                    backgroundImage: 'url(/home/welcome/welcome-bg.jpg)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    paddingBlock: {
                        xs: "8rem",
                        sm: "10rem",
                        md: "8rem",
                    },
                    paddingInline: {
                        xs: "1rem",
                        sm: "2rem",
                    },
                }
                }>
                <Grid size={{ xs: 12, md: 5 }} alignContent="center" sx={{
                    marginInline: "auto",
                }}>
                    <Box >
                        <Typography variant="h1" fontWeight="bold" fontStyle={'italic'}
                            sx={{
                                fontSize: {
                                    xs: "2rem",
                                    sm: "3rem",
                                    md: "5rem",
                                },
                                color: '#fff',
                                lineHeight: '1.2',
                                textAlign: 'start',
                            }}
                        >
                            اهلا بك فى <br /> مشروع نواه
                        </Typography>
                        <Typography variant="p"
                            lineHeight={"1.7"}
                            sx={{
                                color: '#fff',
                                width: '100%',
                                fontWeight: {
                                    xs: "600",
                                    md: "500",
                                },
                                fontSize: {
                                    xs: "1rem",
                                    md: "1.5rem",
                                },
                                marginBottom: "5%",
                                display: 'block',

                            }}>
                            كوّن رحلتك مع فريق من المطورين والمبدعين وروّاد الأعمال، وكل من يؤمن بأن الشغف والمعرفة والعمل <br /> يمكن أن يصنعوا نهضة حقيقية — تعلّموا، طوّروا، وابتكروا معًا لبناء أثر يتجاوز حدود التخصص.</Typography>
                        <Button variant="contained" sx={{
                            color: '#fff',
                            width: {
                                xs: "100%",
                                md: "40%",
                            },
                            backgroundColor: "#141e37",
                            fontWeight: "600",
                            padding: {
                                xs: "0.5rem",
                                md: "1rem",
                            },
                            display: 'block',
                            marginBottom: '2%',
                            '&:hover': {
                                backgroundColor: "#fff",
                                color: "#141e37",
                            }

                        }}>
                            اطلع على المزيد
                        </Button>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} sx={{ width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center', marginInline: "auto", marginBlock: 'auto' }}>

                    <CardMedia sx={{ objectFit: "cover", width: "100%", height: '100%' }} component="video" src="home/welcome/welcome_video.mp4" autoPlay loop muted controls />

                </Grid>
            </Grid>
    )
}