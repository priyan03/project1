import React, { useState } from 'react';
import "../styles/RegisterStyle.css";
import { TextField } from '@mui/material';
import bgGif from "../bgGif/bg.gif";

const Register = () => {
    return (
        <div
            className='backgroundimageR'
            style={{ backgroundImage: `url(${bgGif})` }}>
            <div className='containe'>
                <div className='headingR'>Protonoun<span className='blue'>X</span></div>
            </div>
        </div>
    )
}

export default Register
