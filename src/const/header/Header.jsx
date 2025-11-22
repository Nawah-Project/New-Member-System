import { Link } from "react-router-dom"
import { Box, AppBar, Toolbar, Typography, List, ListItem, Stack, Avatar, Button } from "@mui/material"
import MobileDrawer from "./components/MobileDrawer"
import HeaderDropDown from "./components/HeaderDropDown"
import { navItems, languageData, accountData, socialData } from "./navData"
import { useState } from "react"
import "./header.css"

export default function Header() {

    const [openLanguage, setOpenLanguage] = useState(false);
    const handleLanguageClick = () => {
        openAccount ? setOpenAccount(false) : null;
        openSocial ? setOpenSocial(false) : null;
        setOpenLanguage(!openLanguage);
    };

    const [openAccount, setOpenAccount] = useState(false);
    const handleAccountClick = () => {
        openLanguage ? setOpenLanguage(false) : null;
        openSocial ? setOpenSocial(false) : null;
        setOpenAccount(!openAccount);
    };

    const [openSocial, setOpenSocial] = useState(false);
    const handleSocialClick = () => {
        openAccount ? setOpenAccount(false) : null;
        openLanguage ? setOpenLanguage(false) : null;
        setOpenSocial(!openSocial);
    };

    return (
        <Box id="header-div">
            <AppBar position="fixed" sx={{ background: "black" }}>
                <Toolbar variant="dense" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {/*=== Logo ===*/}
                    <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                        <List sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "10%" }}>
                            <ListItem>
                                <Stack direction="row" alignItems="center" id="logo">
                                    <Typography sx={{
                                        width: "50%", fontSize: "1.2rem"
                                    }}>Nawah <br /> Project</Typography>

                                    <Avatar sx={{
                                        width: "80px", height: "80px"
                                    }} src="logo.png" alt="Nawah Logo" />

                                </Stack>
                            </ListItem>
                        </List>
                    </Link>
                    {/*=== Logo ===*/}

                    {/*=== Desktop Navigation ===*/}
                    <List sx={{
                        display: { xs: "none", lg: "flex" }, alignItems: "center", justifyContent: "end", gap: {
                            lg: "0%",
                            xl: "3%"
                        }, width: "75%"
                    }}>
                        {navItems.map((item) => (
                            <Link key={item.id} to={item.path}>
                                <Button id="nav-btn" sx={{ textAlign: 'center', padding: '10px 20px', margin: "0px", color: "white" }}>
                                    <Typography sx={{
                                        fontSize: {
                                            lg: "0.9rem",
                                            xl: "1rem"
                                        }, fontWeight: "600"
                                    }}>{item.text}</Typography>
                                </Button>
                            </Link>
                        ))}
                        <HeaderDropDown handleClick={handleSocialClick} open={openSocial} title="اجتماعى" dataList={socialData} />
                        <List
                            sx={{
                                display: "flex", justifyContent: "space-around", alignItems: "center", gap: {
                                    lg: "0%",
                                    xl: "3%"
                                },
                            }}
                        >
                            <HeaderDropDown handleClick={handleLanguageClick} open={openLanguage} title="" dataList={languageData} />
                            <HeaderDropDown handleClick={handleAccountClick} open={openAccount} title="حسابى" dataList={accountData} />
                        </List>
                    </List>
                    {/*=== Desktop Navigation ===*/}

                    {/*=== Mobile Drawer ===*/}
                    <MobileDrawer children={<HeaderDropDown handleClick={handleLanguageClick} open={openLanguage} title="" dataList={languageData} />} />
                    {/*=== Mobile Drawer ===*/}
                </Toolbar>
            </AppBar>
        </Box >
    );
}