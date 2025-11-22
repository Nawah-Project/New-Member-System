import { Box, Button, CardMedia, Grid, Typography } from '@mui/material'
export default function Collaporate() {
    return (
        <Grid container spacing={0}
            justifyContent={'space-between'}
            sx={{
                width: "100%",
                paddingInline: "2rem",
                marginBlock: {
                    xs: "2rem",
                    sm: "4rem",
                    md: "8rem",
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
                                xs: "4rem",
                                sm: "5rem",
                            },
                            color: '#000',
                            lineHeight: '1.1',
                            textAlign: 'start',
                        }}
                    >
                        تعاون مع <br /> فريقك </Typography>
                    <Typography variant="p"
                        lineHeight={"1.7"}
                        sx={{
                            color: '#000',
                            width: '100%',
                            fontWeight: {
                                xs: "600",
                                md: "500",
                            },
                            fontSize: {
                                xs: "0.8rem",
                                sm: "1rem",
                                md: "1.2rem",
                            },
                            marginBottom: "2%",
                            display: 'block',

                        }}>
                        انضم إلى مشروع جديد مع كامل عناصر فريقك، أو اختبر حدود قدراتك منفردًا في تحدٍ مصمم <br /> ليكشف إمكاناتك الحقيقية.كل تجربة في نواة فرصة لتطبيق مهارتك بذكاء، أو قلب موازين الفكرة <br /> بفريقك، أو تحقيق إنجاز يليق بروحكم المشتركة.

                    </Typography>
                </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} sx={{ width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center', marginInline: "auto", marginBlock: 'auto' }}>
                <CardMedia sx={{ objectFit: "cover", width: "100%", height: '100%' }} component="video" src="/home/collaporate/collaporate_video.mp4" autoPlay loop muted controls />
            </Grid>
        </Grid>
    )
}