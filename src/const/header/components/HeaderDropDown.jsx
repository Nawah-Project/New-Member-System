import { Button, List, Box, Typography } from "@mui/material"
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import PublicIcon from '@mui/icons-material/Public';

export default function HeaderDropDown({ handleClick, open, title, dataList }) {
    return (
        <Box style={{ position: 'relative' }}>
            <Button id="nav-btn" onClick={handleClick} sx={{
                textAlign: 'center',
                padding: '0px',
                margin: '0px',
                color: 'white',
                '&:hover': {
                    backgroundColor: 'transparent'
                }
            }}>
                {!title ? <PublicIcon fontSize="medium" sx={{ color: "white" }} /> : <Typography sx={{ fontSize: "1rem", fontWeight: "600" }}>{title}</Typography>}
                {!title ? null : open ? <ExpandLess /> : <ExpandMore />}
            </Button>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding sx={{
                    position: 'absolute', top: '50px', left: '0', width: '140%', backgroundColor: 'black', padding: "10px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px"
                }}>
                    {dataList.map((item) => (
                        <Button key={item.id} id="nav-btn" sx={{ pl: 2, cursor: "pointer", textAlign: "start", color: "white" }} onClick={() => item.click()}>
                            <Typography sx={{ fontSize: "1rem", fontWeight: "600" }}>{item.text}</Typography>
                        </Button>
                    ))}
                </List>
            </Collapse>
        </Box>
    )
}