import React, { useState } from 'react';
import "../styles/RegisterStyle.css";
import { TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import bgGif from "../bgGif/bg.gif";

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
                    <div className='dob'>birth of date</div>
                    {/* Day */}
                    <FormControl className='day'>
                        <InputLabel>Day</InputLabel>
                        <Select label="Day" size='small' defaultValue="">
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {Array.from({ length: 31 }, (_, i) => (
                                <MenuItem key={i + 1} value={i + 1}>
                                    {i + 1}
                                </MenuItem>
                            ))}
                        </Select>
                        {/* month */}
                    </FormControl>
                    <FormControl className='day'>
                        <InputLabel>Month</InputLabel>
                        <Select label="Month" size='small' defaultValue="">
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {[
                                "January", "February", "March", "April", "May", "June",
                                "July", "August", "September", "October", "November", "December"
                            ].map((month, i) => (
                                <MenuItem key={i + 1} value={i + 1}>
                                    {month}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    {/* Year */}
                    <FormControl className='day'>
                        <InputLabel>Year</InputLabel>
                        <Select label="Year" size='small' defaultValue="">
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {Array.from({ length: 126 }, (_, i) => 1900 + i).map((year) => (
                                <MenuItem key={year} value={year}>
                                    {year}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>


                </div>
            </div>
        </div>
    )
}

export default Register
