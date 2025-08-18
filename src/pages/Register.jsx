import React, { useState } from 'react';
import "../styles/RegisterStyle.css";
import {
    TextField, FormControl, InputLabel, Select,
    Radio, RadioGroup, FormControlLabel, Button
} from '@mui/material';
import bgGif from "../bgGif/bg.gif";
import {Link ,useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    
    const [name, setName] = useState({
        firstname : "",
        surname :"",
        day:"",
        month:"",
        year:"",
        gender:"",
        mobileOremail:"",
        newPass:""
    })

    const handleClick = () => {
        console.log("Sign up data : ",name);
    }

    const handleChange = (e) =>{
        const { name,value } = e.target
        setName((prevData) => ({...prevData,[name] : value}))
    }
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
                    <form
                            onSubmit={(e) => {
                                e.preventDefault(); // stops page refresh
                                handleClick();      // run your login logic only after validation passes
                            }}>
                    <TextField name='firstname' required onChange={(e) => handleChange(e)} className='name' label='First name' size='small' />
                    <TextField name='surname' required onChange={(e) => handleChange(e)} className='name' label='Surname' size='small' />
                    <div className='dRR'>birth of date</div>
                    {/* Day */}
                    <FormControl className='day'>
                        <InputLabel>Day</InputLabel>
                        <Select native label="Day" size='small' defaultValue=""
                        name='day' required onChange={(e) => handleChange(e)}>
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
                        <Select native label="Month" size='small' defaultValue=""
                        name='month' required onChange={(e) => handleChange(e)}>
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
                        <Select native label="Year" size='small' defaultValue=""
                        name='year' required onChange={(e) => handleChange(e)}>
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
                                row
                                className='genderR'
                                name='gender' 
                                required
                                onChange={(e) => handleChange(e)}>
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div><TextField name='mobileOremail' required onChange={(e) => handleChange(e)} className='mobRR' size='small' label='Mobile number or email address'/></div>
                    <div><TextField name='newPass' required onChange={(e) => handleChange(e)} className='passRR' size='small' label='New Password'/></div>
                    <div className='wordsR'>Your contact information might have been uploaded to 
                        <span style={{fontWeight:"bold"}}> Protonoun<span className='blue'>X</span></span> by people who use our service.
                        <Link style={{textDecoration:"none", color:"#1976d2"}}>  Learn more</Link>
                    </div>
                    <div className='wordsR1'>By clicking Sign Up, you agree to our 
                        <Link style={{textDecoration:"none", color:"#1976d2"}}> Terms</Link>, 
                        <Link style={{textDecoration:"none", color:"#1976d2"}}> Privacy Policy</Link> and 
                        <Link style={{textDecoration:"none", color:"#1976d2"}}> Cookies Policy</Link>. 
                        You may receive SMS notifications from us at any time.
                    </div>
                    <div><Button type='submit' className='signUp' variant="contained" size='small' style={{marginTop:15}}>Sign Up</Button></div>
                    <div><Link className='pinkR' to="/login">Already have an account?</Link></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
