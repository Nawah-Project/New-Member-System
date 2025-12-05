import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Grid } from "@mui/material";

export default function ProgressControls({ id, index, dataLength, increament = null, decrement = null }) {

    return (
        <Grid container spacing={2} alignItems={'center'} sx={{
            display: {
                md: "none",
            }, marginBlock: "4%"
        }}>
            <Grid size={10}>
                <Box sx={{ width: "100%", height: "2px", backgroundColor: "white", borderRadius: "10px" }}>
                    <Box id={id}
                        style={{
                            width: "100%",
                            height: "2px",
                            backgroundColor: "#5579f2",
                            borderRadius: "10px",
                            transition: "width 0.5s ease-in-out",
                        }}
                    ></Box>
                </Box>
            </Grid>
            <Grid size={1}>
                <ArrowForwardIcon sx={{ fontSize: "large", color: index > 0 ? "#32C8ff" : "gray", cursor: index > 0 ? "pointer" : "not-allowed" }}  onClick={() => decrement()} />
            </Grid>
            <Grid size={1}>
                <ArrowBackIcon sx={{ fontSize: "large", color: index < dataLength - 1 ? "#32C8ff" : "gray", cursor: index < dataLength - 1 ? "pointer" : "not-allowed" }} onClick={() => increament()} />
            </Grid>
        </Grid>
    )
}

export function updateProgress(index, dataLength, id) {
    const progressBar = document.getElementById(id);
    if (progressBar) {
        progressBar.style.backgroundColor = "#5579f2";
        progressBar.style.width = `${(index) / (dataLength - 1) * 100}%`;
        console.log('width: ' + progressBar.style.width);
    }
}