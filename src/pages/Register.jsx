import React, { useState } from 'react';
import logo from '../Logo-Priyan-webX.png'
import bgGif from '../bgGif/bg.gif';
import {
    TextField, Button, InputLabel, MenuItem, FormControl,
    Select, RadioGroup, FormControlLabel, Box, ListSubheader
} from '@mui/material';
import '../styles/RegisterStyle.css';
import { Link, useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import { red } from '@mui/material/colors';

const BpRadio = styled(Radio)(({ theme }) => ({
    color: theme.palette.primary.main,
    '&.Mui-checked': {
        color: theme.palette.primary.main,
    },
}));

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState({
        firstname: "",
        surname: "",
        day: "",
        month: "",
        year: "",
        age: "",
        gender: "",
        mobile:"",
        newPassword :""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setName((prevData) => ({ ...prevData, [name]: value }))
    }
    const handleClick = () => {
        console.log("Sign Up data :", name);

    }
    const months = [
        "January","February","March","April","May","June","July","August","September","October","November","December"
    ];


    return (
        <div className='backgroundimageR' style={{ backgroundImage: `url(${bgGif})` }}>
            <div className='inputwrapper'>
                <div className='grid-container'>
                    <img className='imgR' src={logo} alt='Logo' />
                    <div className='grid0'>Protonoun<span style={{ color: "#1976d2" }}>X</span></div>
                    <div className='grid1'>
                        <h2>Create a new account</h2>
                        <p style={{ color: "#00000083", paddingTop: "1%" }}>It's quick and easy.</p>
                    </div>
                    <div className='grid2'>
                        <div style={{ color: "#1976d2", fontSize: "10px", marginRight: '90%', marginTop: '0.1%', marginBottom: '1.8%' }}>Name</div>
                        {/* Line 1 */}
                        <TextField name="firstname" onChange={(e) => handleChange(e)} label="Firstname" variant="outlined" size="small" sx={{ width: 192, mr: '12px' }} />
                        <TextField name='surname' onChange={(e) => handleChange(e)} label="Surname" variant="outlined" size="small" sx={{ width: 192, ml: '12px' }} />
                        <div style={{ color: "#1976d2", fontSize: "10px", marginRight: '83.5%', marginTop: '2.2%', marginBottom: '-10px' }}>Date Of Birth</div>

                        {/* Line 2 */}
                        <div style={{display:'flex', gap: '10px', marginTop: '20px'}}>
                            {/* Day */}
                            <FormControl variant="outlined" size="small" sx={{ minWidth: 92, ml:2.7 }}>
                                <InputLabel id="day-select-label">Day</InputLabel>
                                <Select
                                    native
                                    labelId="day-select-label"
                                    id="day-select"
                                    name='day'
                                    value={name.day}
                                    onChange={(e) => handleChange(e)}
                                    label="Day"
                                >
                                    <option value="" />
                                    {Array.from({ length: 31 }, (_, i) => (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    ))}
                                </Select>
                            </FormControl>

                            {/* Month */}

                            <FormControl variant="outlined" size="small" sx={{ width: 92 ,ml: 1}}>
                                <InputLabel htmlFor="grouped-native-select">Month</InputLabel>
                                <Select
                                    native
                                    defaultValue=""
                                    id="grouped-native-select"
                                    name="month"
                                    value={name.month}
                                    onChange={(e) => handleChange(e)}
                                    label="Month"
                                >
                                    <option value="" />
                                    {months.map((month, index) => (
                                        <option key={index + 1} value={index + 1}>
                                            {month}
                                        </option>
                                    ))}
                                </Select>
                            </FormControl>


                            {/* Year */}
                            <FormControl variant="outlined" size="small" sx={{ Width: 92, mr: 1}}>
                                <InputLabel id="year-select-label">Year</InputLabel>
                                <Select
                                    native
                                    labelId="year-select-label"
                                    id="year-select"
                                    name='year'
                                    value={name.year}
                                    onChange={(e) => handleChange(e)}
                                    label="Year"
                                >
                                    <option value="" />
                                    {Array.from({ length: 100 }, (_, i) => {
                                        const currentYear = new Date().getFullYear();
                                        return <option key={i} value={currentYear - i}>{currentYear - i}</option>;
                                    })}
                                </Select>
                            </FormControl>

                            {/* Age */}
                            <TextField
                                label="Age"
                                variant="outlined"
                                size="small"
                                type="number"
                                name='age'
                                value={name.age}
                                onChange={(e) => handleChange(e)}
                                sx={{ width: 100, mr:2.7 }}
                            />
                        </div>
                        <div style={{ color: "#1976d2", fontSize: "10px", marginRight: '88.5%', marginTop: '2.2%', marginBottom: '-10px' }}>Gender</div>
                        {/* Line 3 */}
                        <div style={{marginTop: '20px' }} >
                            <FormControl>
                                <RadioGroup
                                    name='gender'
                                    value={name.gender}
                                    onChange={(e) => handleChange(e)}
                                    row
                                >
                                    <Box sx={{ display: 'flex', gap: '20px' }}>
                                        {["Female", "Male", "Others"].map((gender) => (
                                            <Box
                                                key={gender}
                                                sx={{
                                                    border: "1px solid #ccc",
                                                    borderRadius: 1,
                                                    width: '123px',
                                                    display: 'flex',
                                                    justifyContent: 'center'
                                                }}
                                            >
                                                <FormControlLabel
                                                    value={gender.toLowerCase()}
                                                    control={<Radio size="small" />}
                                                    label={gender}
                                                />
                                            </Box>
                                        ))}
                                    </Box>
                                </RadioGroup>
                            </FormControl>
                        </div>

                        <div><TextField name="mobile" onChange={(e) => handleChange(e)} label=" Mobile Number or email address" variant="outlined" size="small" sx={{ width:'92%', ml:0.1, mt:1.5}} /></div>
                        <div><TextField name="newPassword" onChange={(e) => handleChange(e)} label=" New Password" variant="outlined" size="small" sx={{ width:'92%', ml:0.1, mt:1.5, mb:3}} /></div>
                        <div className='rR'>People who use our service may have uploaded your contact information to Protonoun<span style={{color:"#1976d2", fontWeight:"bold"}}>X</span>.<a className="rR1" href='#' style={{color:"#1976d2"}}>Learn more.</a></div>
                        <div className='rR1'>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive</div><div className='rR2'>SMS notifications from us and can opt out at any time</div>
                        <div><Button  onClick={handleClick} variant="contained" sx={{mb:1, mt:1}}>Sign Up</Button></div>
                        <div><Link to='/login' style={{color:'#ff0073ff', fontSize:"13px", textDecoration:'none'}}>Already have an account?</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;
