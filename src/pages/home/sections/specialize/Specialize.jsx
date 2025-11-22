import './specialize.css'
import { Box, Typography, Button, Grid, CardMedia, useMediaQuery, useTheme, Link } from '@mui/material'
export default function Specialize() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Grid container id="specialize-section"
            sx={{
                backgroundImage: 'url(home/specialize/specialize-bg.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '90vh',
                paddingBlock: {
                    xs: '30%',
                    sm: '10%',
                    md: '0%'
                },
                paddingInline: '2%'
            }}
            alignItems={'center'}
        >
            {/* Center Content - Mobile Only*/}
            {isMobile && <CenterContent />}
            {/* === Center Content - Mobile Only===*/}

            {/* Right Content */}
            <Grid size={{ xs: 6, md: 3 }} height={{
                xs: '30vh',
                sm: '40vh',
                md: '70vh'
            }}>
                <Box sx={{ height: '100%' }}>
                    <CardMedia component="img" src="home/specialize/right-image.png" alt="girl" sx={{
                        objectFit: 'contain',
                        width: '100%',
                        height: '100%',
                    }} />
                </Box>
            </Grid>
            {/* === Right Content === */}

            {/* Center Content - Desktop Only */}
            {!isMobile && <CenterContent />}
            {/* === Center Content - Desktop Only === */}

            {/*  Left Content */}
            <Grid size={{ xs: 6, md: 3 }} height={{
                xs: '30vh',
                sm: '40vh',
                md: '70vh'
            }}>
                <Box sx={{ height: '100%' }}>
                    <CardMedia component="img" src="home/specialize/left-image.png" alt="girl" sx={{
                        objectFit: 'contain',
                        width: '100%',
                        height: '100%',
                    }} />
                </Box>
            </Grid>
            {/* === Left Content === */}
        </Grid>
    )
}

function CenterContent() {
    return (
        <Grid size={{ xs: 12, md: 6 }} height={{
            xs: '30vh',
            md: '70vh'
        }}>
            <Box sx={{ height: '100%', display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'start', gap: 2, paddingInline: '2%' }}>
                <Typography variant="h2" fontStyle={'italic'} fontWeight={'bold'}>اختر تخصصك</Typography>
                <Typography variant="p" fontSize={{ xs: '1rem', md: '1.5rem' }} fontWeight={'bold'}>صِغ أكوادك لتبني المستقبل، أو أطلق خيالك في تصميم تجربة تبهر المستخدمين، أو خطّط لمشاريع تُحدث فرقًا حقيقيًا في العالم. هناك تخصصات تتناسب مع كل شغفٍ وطموح.</Typography>
                <Box sx={{
                    display: "flex", gap: 2, alignItems: 'center', flexDirection: {
                        xs: 'column',
                        md: 'row'
                    },
                    width: '100%'
                }}>
                    <Button variant="contained" sx={{
                        width: { xs: '100%', md: 'auto' }, backgroundColor: '#141e37', color: 'white', fontWeight: 'bold', '&:hover': {
                            backgroundColor: 'white',
                            color: '#141e37',
                            transition: 'all 0.4s ease-in-out',
                        }
                    }}>اعثر على تخصصك</Button>
                    <Link to="/specialities" sx={{textDecoration: 'none' , color: '#141e37' }}>
                        <Typography variant="p" fontWeight={'bold'}
                            sx={{
                                cursor: 'pointer',
                                '&:hover': {
                                    color: 'white',
                                    transition: 'all 0.4s ease-in-out',
                                }
                            }}
                        >عرض جميع التخصصات</Typography>
                    </Link>
                </Box>
            </Box>
        </Grid>
    )
}