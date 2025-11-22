import { useState } from "react"
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Stack, Avatar, Typography } from "@mui/material"
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';
import ContentPasteSearchOutlinedIcon from '@mui/icons-material/ContentPasteSearchOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import CloseIcon from '@mui/icons-material/Close';
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';
import { Link } from "react-router-dom"
import { Drawer } from "@mui/material"

export default function MobileDrawer({ children }) {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const listdata = [
        {
            text: "نظرة عامة على المكان",
            icon: <RemoveRedEyeOutlinedIcon />,
            path: "/overview"
        },
        {
            text: "الأخبار",
            icon: <NewspaperOutlinedIcon />,
            path: "/news"
        },
        {
            text: "تخصصات",
            icon: <StarsOutlinedIcon />,
            path: "/specialities"
        },
        {
            text: "اعثر على تخصصك",
            icon: <ContentPasteSearchOutlinedIcon />,
            path: "/find-speciality"
        },
        {
            text: "الدعم",
            icon: <ContactSupportOutlinedIcon />,
            path: "/support"
        },
        {
            text: "اجتماعى",
            icon: <Diversity2OutlinedIcon />,
            path: '/social'
        },
        {
            text: "تسجيل الدخول",
            icon: <LoginIcon />,
            path: '/login'
        },
        {
            text: "انشاء حساب",
            icon: <AppRegistrationIcon />,
            path: '/register'
        }
    ]

    const DrawerList = (
        <Box sx={{
            width: {
                xs: "250px",
                md: "500px",
            }
        }} onClick={toggleDrawer(false)}>
            <List>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "5px", padding: "10px", color: "white" }}>
                            <Typography>Nawah <br /> Project</Typography>
                            <Avatar src="logo.png" alt="Nawah Logo" sx={{ width: "50px", height: "50px" }} />
                        </Box>
                    </Link>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "5px", padding: "3px", background: "#e9dedeff", borderRadius: "50%", border: "1px solid #f05858ff" }}>
                        <CloseIcon onClick={toggleDrawer(false)} sx={{ color: "#f05858ff" }} fontSize="small" />
                    </Box>
                </Stack>
                <Divider variant="fullWidth" sx={{ maxWidth: "90%", height: "1px", backgroundColor: "white", marginInline: "auto" }} />
                {listdata.map((item) => (
                    <ListItem key={item.text} style={{ paddingInline: "5px", cursor: "pointer" }}>
                        <Link to={item.path} style={{ textDecoration: "none", width: "100%" }} >
                            <ListItemButton sx={{ color: "white" }}>
                                <ListItemText primary={item.text} sx={{ textAlign: "start" }} />
                                <ListItemIcon sx={{ color: "white", justifyContent: "end" }}>
                                    {item.icon}
                                </ListItemIcon>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{
            cursor: "pointer", display: {
                xs: "flex",
                lg: "none"
            }, alignItems: "center"
        }}>
            {children}
            <ReorderOutlinedIcon fontSize="large" onClick={toggleDrawer(!open)} />
            <Drawer variant="persistent" open={open} onClose={toggleDrawer(false)} anchor="right" sx={{
                background: "rgba(0, 0, 0, 0.3)",
                display: {
                    xs: "flex",
                    lg: "none"
                },
                '& .MuiDrawer-paper': {
                    backgroundColor: 'black',
                    color: "white"
                },
            }}>
                {DrawerList}
            </Drawer>
        </Box>
    );
}