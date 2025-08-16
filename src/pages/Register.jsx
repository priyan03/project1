import React, { useState } from 'react';
import "../styles/RegisterStyle.css";
import {
    TextField, FormControl, InputLabel, Select,
    Radio, RadioGroup, FormControlLabel, Button
} from '@mui/material';
import bgGif from "../bgGif/bg.gif";
import {Link ,useNavigate } from 'react-router-dom';

const Register = () => {
    return (
        <div
            className='backgroundimageR'
            style={{ backgroundImage: `url(${bgGif})` }}>
            <div className='containe'>
                <div className='headingR'>Protonoun<span className='blue'>X</span></div>
                <div className='boxR'>
                    <div className='head1'>Create a new account</div>
                    <div className='head2'>It's Rapid and Simple!!</div>
                    <hr className="line" />
                    <TextField className='name' label='First name' size='small' />
                    <TextField className='name' label='Surname' size='small' />
                    <div className='dRR'>birth of date</div>
                    {/* Day */}
                    <FormControl className='day'>
                        <InputLabel>Day</InputLabel>
                        <Select native label="Day" size='small' defaultValue="">
                            <option value="">
                            </option>
                            {Array.from({ length: 31 }, (_, i) => (
                                <option key={i + 1} value={i + 1}>
                                    {i + 1}
                                </option>
                            ))}
                        </Select>
                        {/* month */}
                    </FormControl>
                    <FormControl className='day'>
                        <InputLabel>Month</InputLabel>
                        <Select native label="Month" size='small' defaultValue="">
                            <option value="">
                            </option>
                            {[
                                "January", "February", "March", "April", "May", "June",
                                "July", "August", "September", "October", "November", "December"
                            ].map((month, i) => (
                                <option key={i + 1} value={i + 1}>
                                    {month}
                                </option>
                            ))}
                        </Select>
                    </FormControl>
                    {/* Year */}
                    <FormControl className='day'>
                        <InputLabel>Year</InputLabel>
                        <Select native label="Year" size='small' defaultValue="">
                            <option value="">
                            </option>
                            {Array.from({ length: 126 }, (_, i) => 1900 + i).map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </Select>
                    </FormControl>
                    {/* Gender */}
                    <div className='dRR'>Gender</div>
                    <div>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-customized-radios"
                                name="customized-radios"
                                row
                                className='genderR'
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div><TextField className='mobRR' size='small' label='Mobile number or email address'/></div>
                    <div><TextField className='passRR' size='small' label='New Password'/></div>
                    <div className='wordsR'>Your contact information might have been uploaded to 
                        <span style={{fontWeight:"bold"}}> Protonoun<span className='blue'>X</span></span> by people who use our service.
                        <Link style={{textDecoration:"none", color:"#1976d2"}}>  Learn more</Link>
                    </div>
                    <div className='wordsR1'>By clicking Sign Up, you agree to our 
                        <Link style={{textDecoration:"none", color:"#1976d2"}}> Terms</Link>, 
                        <Link style={{textDecoration:"none", color:"#1976d2"}}> Privacy Policy</Link> and 
                        <Link style={{textDecoration:"none", color:"#1976d2"}}> Cookies Policy</Link>. 
                        <p>You may receive SMS notifications from us and can opt out at any time.</p>
                    </div>
                    <div><Button className='signUp' variant="contained" size='small' style={{marginTop:15, width:'400px'}}>Sign Up</Button></div>
                </div>
            </div>
        </div>
    )
}

export default Register
