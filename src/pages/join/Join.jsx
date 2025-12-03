import { Box, Container, Typography, Divider, InputLabel, Input, Button } from "@mui/material";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Radio from '@mui/material/Radio';
import FormHelperText from '@mui/material/FormHelperText';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from "react";

export default function Join() {
    const [index, setIndex] = useState(0);

    const [isSmallMobile, setIsSmallMobile] = useState(false);

    useEffect(() => {
            const checkScreenSize = () => {
                window.innerHeight < 801 ? setIsSmallMobile(true) : setIsSmallMobile(false);
            };

            checkScreenSize();

            window.addEventListener('resize', checkScreenSize);

            return () => {
                window.removeEventListener('resize', checkScreenSize);
            };
        }, []);

    return (
        <Container maxWidth="2xl" sx={{
            marginTop: "100px",
            height: isSmallMobile ? {
                xs: index == 0 ? "85vh" : "52vh",
                sm: index == 0 ? "85vh" : "53vh",
                md: index == 0 ? "93vh" : "58vh",
                lg: index == 0 ? "105vh" : "68vh",
            } : {
                xs: index == 0 ? "75vh" : "45vh",
                sm: index == 0 ? "85vh" : "53vh",
                md: index == 0 ? "93vh" : "58vh",
                lg: index == 0 ? "105vh" : "68vh",
            },

            backgroundImage: 'url(/join/bg.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'column',
        }}>

            <Box sx={{
                backgroundColor: 'white',
                width: {
                    xs: '100%',
                    sm: '90%',
                    lg: '80%',
                }, height: '90%',
                borderRadius: '20px',
                margin: "auto",
            }}>
                <PageHeader />
                <Box>
                    {index == 0 ? <PageOne /> : <PageTwo />}
                </Box>
                <PageFooter index={index} setIndex={setIndex} />

            </Box>

        </Container>
    )
}

function PageOne() {
    // const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(true);

    const validateEmail = (input) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        setIsValidEmail(emailRegex.test(input));
        setEmail(input);
    };
    // const [phone, setPhone] = useState("");
    // const [gender, setGender] = useState("");
    // const [age, setAge] = useState("");
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: "5px", height: "100%" }}>
            <Box sx={{ paddingInline: '3%' }}>
                <Typography variant="h5" fontWeight="bold" color="black"
                >المعلومات الشخصية
                </Typography>
            </Box>
            <JoinInput label="الاسم الكامل" placeholder="" />
            <JoinInput label="عنوان البريد الالكترونى" placeholder="email@example.com" value={email} onChange={(e) => validateEmail(e.target.value)} error={email.length > 0 && isValidEmail ? false : true} errorText="يجب ان يكون عنوان البريد الالكترونى صالحا" />

            <JoinInput label="رقم الهاتف (بما فى ذلك رمز الدولة)" placeholder="+20123456789" />
            <GenderInput />
            <JoinInput label='العمر' placeholder="" />
        </Box>
    )
}

function PageTwo() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: "5px", height: "100%" }}>
            <Box sx={{ paddingInline: '3%' }}>
                <Typography variant="h5" fontWeight="bold" color="black"
                >التعليم والتوظيف
                </Typography>
            </Box>
            <JoinInput label="ما هو اعلى مستوى دراسى اكملته او اعلى درجة حصلت عليها" placeholder="" />
            <JoinInput label='التخصص' placeholder="" />
            <JoinInput label="الوضع المهنى / الوظيفى" placeholder="" />
        </Box>
    )
}

function PageHeader() {
    return (
        <>
            <Box sx={{ width: '100%', height: "3%", backgroundColor: '#83aff3', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}></Box>
            <Box sx={{ paddingBlock: '1%' }}>
                <Typography variant="h3" fontWeight="bold" color="black"
                    textAlign={'center'}
                    fontSize={{
                        xs: '1.5rem',
                        sm: '2rem',
                    }}
                >طلب تقديم للأنضمام مشروع نواة</Typography>
                <Divider variant="middle"
                    sx={{
                        marginBlock: '0.5%',
                        marginInline: '3%',
                        height: "2px",
                        backgroundColor: 'black'
                    }}
                ></Divider>
            </Box>
        </>
    )
}

function PageFooter({ index, setIndex }) {

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {

            backgroundColor: '#141e37',
            ...theme.applyStyles('dark', {
                backgroundColor: '#141e37',
            }),
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: '#456aa7',
            ...theme.applyStyles('dark', {
                backgroundColor: '#456aa7',
            }),
        },
    }));

    return (
        <Box sx={{ paddingInline: '3%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBlock: '1%' }}>
                <Button variant="contained" color="primary"
                    onClick={() => index == 0 ? setIndex(index + 1) : setIndex(index - 1)}
                >{index == 0 ? 'التالى' : 'ارسال'}</Button>
            </Box>

            <BorderLinearProgress variant="determinate" value={index == 0 ? 50 : 100} sx={{ width: '50%' }} />

            <Typography variant="p" fontWeight="bold" color="black"
                fontSize={{
                    xs: '0.7rem',
                    sm: '1.5rem',
                }}
            >
                {index == 0 ? 'صفحة 1 من 2' : "صفحة 2 من 2"}
            </Typography>
        </Box>
    )
}


function JoinInput({ label, placeholder, error = false, value = "", onChange, errorText = "" }) {
    return (
        <Box sx={{ border: error ? "1px solid red" : "1px solid #c7c7c7", borderRadius: '10px', padding: '1.5%', marginInline: "2%", marginBlock: "0.5%" }}>
            <InputLabel sx={{
                fontWeight: "bold",
                fontSize: "1rem",
                color: "black"
            }}>
                {label}
            </InputLabel>
            <Input
                placeholder={placeholder}
                error={error}
                value={value}
                onChange={onChange}
                fullWidth
                direction="rtl"
                variant="standard"
                sx={{
                    padding: '0'
                }} />
            <Box sx={{ display: error == false ? "none" : "flex", alignItems: 'center', gap: '0.6%', marginTop: '0.5%' }}>
                <ErrorOutlineIcon color="error" />
                <FormHelperText sx={{
                    color: "red",
                    textAlign: "right"
                }}>

                    {errorText}</FormHelperText>
                
            </Box>
        </Box>
    )
}

function GenderInput() {
    return (
        <Box sx={{ border: "1px solid #c7c7c7", borderRadius: '10px', padding: '1%', marginInline: "2%",  }}>
            <FormControl>
                <FormLabel>الجنس</FormLabel>
                <RadioGroup
                    aria-labelledby="gender"
                    defaultValue=""
                    name="gender"
                >
                    <FormControlLabel value="female" control={<Radio />} label="انثى" />
                    <FormControlLabel value="male" control={<Radio />} label="ذكر" />
                </RadioGroup>
            </FormControl>
        </Box>
    )
}