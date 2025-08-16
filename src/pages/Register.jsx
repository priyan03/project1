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
                <div className='boxR'>
                    <div className='head1'>Create a new account</div>
                    <div className='head2'>It's Rapid and Simple!!</div>
                    <hr className="line" />
                    <TextField className='name' label='First name' size='small'/>
                    <TextField className='name' label='Surname' size='small'/>
                </div>
            </div>
        </div>
    )
}

export default Register
