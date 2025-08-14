import React, { useState } from 'react';
import logo from '../Logo-Priyan-webX.png';
import bgGif from '../bgGif/bg.gif';
import {
    TextField, Button, InputLabel, FormControl,
    Select, RadioGroup, FormControlLabel, Box
} from '@mui/material';
import '../styles/RegisterStyle.css';
import { Link, useNavigate } from "react-router-dom";
import Radio from '@mui/material/Radio';

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
        mobile: "",
        newPassword: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setName((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleClick = () => {
        console.log("Sign Up data :", name);
    };

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return (
        <div className='backgroundimageR' style={{ backgroundImage: `url(${bgGif})` }}>
            <div className='inputwrapper'>
                <div className='grid-container'>
                    <img className='imgR' src={logo} alt='Logo' />
                    <div className='grid0'>Protonoun<span className="highlightX">X</span></div>
                    <div className='grid1'>
                        <h2>Create a new account</h2>
                        <p className="subheading">It's quick and easy.</p>
                    </div>
                    <div className='grid2'>
                        <div className='label-small'>Name</div>
                        <TextField
                            name="firstname"
                            onChange={handleChange}
                            label="Firstname"
                            variant="outlined"
                            size="small"
                            sx={{ width: 192, margin: '10px'}}
                        />
                        <TextField
                            name='surname'
                            onChange={handleChange}
                            label="Surname"
                            variant="outlined"
                            size="small"
                            sx={{ width: 192, margin:'10px'}}
                        />

                        <div className='label-small2'>Date Of Birth</div>
                        <div className='dob-row'>
                            <FormControl variant="outlined" size="small" sx={{ minWidth: 92, ml: 2.7 }}>
                                <InputLabel id="day-select-label">Day</InputLabel>
                                <Select
                                    native
                                    name='day'
                                    value={name.day}
                                    onChange={handleChange}
                                >
                                    <option value="" />
                                    {Array.from({ length: 31 }, (_, i) => (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    ))}
                                </Select>
                            </FormControl>

                            <FormControl variant="outlined" size="small" sx={{ width: 92, ml: 1 }}>
                                <InputLabel>Month</InputLabel>
                                <Select
                                    native
                                    name="month"
                                    value={name.month}
                                    onChange={handleChange}
                                >
                                    <option value="" />
                                    {months.map((month, index) => (
                                        <option key={index + 1} value={index + 1}>
                                            {month}
                                        </option>
                                    ))}
                                </Select>
                            </FormControl>

                            <FormControl variant="outlined" size="small" sx={{ Width: 92, mr: 1 }}>
                                <InputLabel id="year-select-label">Year</InputLabel>
                                <Select
                                    native
                                    name='year'
                                    value={name.year}
                                    onChange={handleChange}
                                >
                                    <option value="" />
                                    {Array.from({ length: 100 }, (_, i) => {
                                        const currentYear = new Date().getFullYear();
                                        return <option key={i} value={currentYear - i}>{currentYear - i}</option>;
                                    })}
                                </Select>
                            </FormControl>

                            <TextField
                                label="Age"
                                variant="outlined"
                                size="small"
                                type="number"
                                name='age'
                                value={name.age}
                                onChange={handleChange}
                                sx={{ width: 100, mr: 2.7 }}
                            />
                        </div>

                        <div className='label-small3'>Gender</div>
                        <div className='gender-row'>
                            <FormControl>
                                <RadioGroup
                                    name='gender'
                                    value={name.gender}
                                    onChange={handleChange}
                                    row
                                >
                                    <Box className="gender-options">
                                        {["Female", "Male", "Others"].map((gender) => (
                                            <Box key={gender} className="gender-box">
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

                        <div>
                            <TextField
                                name="mobile"
                                onChange={handleChange}
                                label=" Mobile Number or email address"
                                variant="outlined"
                                size="small"
                                className="full-width"
                            />
                        </div>
                        <div>
                            <TextField
                                name="newPassword"
                                onChange={handleChange}
                                label=" New Password"
                                variant="outlined"
                                size="small"
                                className="full-width"
                            />
                        </div>

                        <div className='info-text'>
                            People who use our service may have uploaded your contact information to Protonoun
                            <span className="highlightX">X</span>.
                            <a className="link-blue" href='#'> Learn more.</a>
                        </div>
                        <div className='terms-text'>
                            By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive
                        </div>
                        <div className='terms-text2'>
                            SMS notifications from us and can opt out at any time
                        </div>

                        <div ><Button onClick={handleClick} variant="contained" style={{margin:"3px"}}>Sign Up</Button></div>
                        <div><Link to='/login' className="login-link">Already have an account?</Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
