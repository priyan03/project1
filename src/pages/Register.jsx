import React, { useState } from 'react';
import "../styles/RegisterStyle.css";
import {
    TextField, FormControl, InputLabel, Select,
    Radio, RadioGroup, FormControlLabel, FormLabel
} from '@mui/material';
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
                </div>
            </div>
        </div>
    )
}

export default Register
