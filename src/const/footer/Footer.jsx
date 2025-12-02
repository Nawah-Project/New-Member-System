import { Box, Container, CardMedia, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './footer.css'
import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: '#000',
                    color: 'white',
                    textAlign: 'center',
                  
                }}
            >
                <Box
                >
                    <CardMedia
                        sx={{
                            imageRendering: 'optimizeQuality',
                        }}
                        component={'img'}
                        loading="lazy"
                        decoding="async"
                        image="/footer/footer.gif"
                        alt="footer.gif"
                    />
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '20px',
                    marginTop: '2%',
                }}>
                    <YouTubeIcon sx={{
                        color: 'white', cursor: 'pointer',
                        '&:hover': {
                            color: '#32C8ff',
                            transition: 'all 0.3s ease-in-out',
                        }

                    }} fontSize='medium'
                        onClick={() => window.open('https://www.youtube.com', '_blank')}

                    />
                    <InstagramIcon sx={{
                        color: 'white', cursor: 'pointer',
                        '&:hover': {
                            color: '#32C8ff',
                            transition: 'all 0.3s ease-in-out',
                        }

                    }} fontSize='medium'
                        onClick={() => window.open('https://www.instagram.com', '_blank')}

                    />
                    <XIcon sx={{
                        color: 'white', cursor: 'pointer',
                        '&:hover': {
                            color: '#32C8ff',
                            transition: 'all 0.3s ease-in-out',
                        }

                    }} fontSize='medium'
                        onClick={() => window.open('https://x.com', '_blank')}

                    />
                    <FacebookIcon sx={{
                        color: 'white', cursor: 'pointer',
                        '&:hover': {
                            color: '#32C8ff',
                            transition: 'all 0.3s ease-in-out',
                        }

                    }} fontSize='medium'
                        onClick={() => window.open('https://www.facebook.com', '_blank')}

                    />
                </Box>

                <Box className="footer-project">
                    <Typography variant='h6' fontWeight='bold' fontSize={'1.3rem'} color={'#b9b8b8'}
                        sx={{
                            marginBlock: '1%'
                        }}
                    >Nawah Project</Typography>
                </Box>
                <Box
                    sx={{
                        marginBlock: '1%',
                        fontSize: '0.9rem',
                        color: '#b9b8b8'
                    }}
                >
                    © 2025 Nawah Project — جميع الحقوق والعلامات الخاصة بـ نواة محفوظة.
                </Box>

                <Box
                    sx={{
                        // marginBlock: '1%',
                        fontSize: '0.9rem',
                        color: '#b9b8b8',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: {
                            xs: '10px',
                            sm: '50px',
                        },
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        paddingBlock: "1%"
                    }}
                >
                    <Link
                        style={{ color: "white", textDecoration: "none", }}
                        to="#">
                        <Typography
                            sx={{
                                width: '100%',
                                marginInline: '1%',
                                fontSize: '0.9rem',
                                fontWeight: 'bold',
                                color: '#b9b8b8',
                                textDecoration: 'none',
                                cursor: 'pointer',
                                '&:hover': {
                                    color: '#32C8ff',
                                    transition: 'all 0.3s ease-in-out',
                                    fontSize: '1rem',
                                }
                            }}
                        >
                            سياسة الخصوصية
                        </Typography>

                    </Link>
                    <Link
                        style={{ color: "white", textDecoration: "none", }}
                        to="#">
                        <Typography
                            sx={{
                                width: '100%',
                                marginInline: '1%',
                                fontSize: '0.9rem',
                                fontWeight: 'bold',
                                color: '#b9b8b8',
                                textDecoration: 'none',
                                cursor: 'pointer',
                                '&:hover': {
                                    color: '#32C8ff',
                                    transition: 'all 0.3s ease-in-out',
                                    fontSize: '1rem',
                                }
                            }}
                        >شروط الاستخدام</Typography>

                    </Link>
                    <Link

                        style={{ color: "white", textDecoration: "none" }}
                        
                        to="#">
                        <Typography
                            sx={{
                                width: '100%',
                                marginInline: '1%',
                                fontSize: '0.9rem',
                                fontWeight: 'bold',
                                color: '#b9b8b8',
                                textDecoration: 'none',
                                cursor: 'pointer',
                                '&:hover': {
                                    color: '#32C8ff',
                                    fontSize: '1rem',
                                    transition: 'all 0.3s ease-in-out',
                                }
                            }}
                        >تفضيلات ملفات تعريف الارتباط</Typography>
                    </Link>
                </Box>
            </Box>
        </>
    )
}