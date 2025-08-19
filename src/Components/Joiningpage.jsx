import React from 'react';
import "../ComponentStyle/Joiningpage.css";
import Logo from '../Logo-Priyan-webX.png';
import Work from '../bgGif/Work.png';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Joiningpage = () => {

    return (
        <div className='backgroundimageJ'>
            <div className='input-wrapperJ'>
                <div className='content'>

                    {/* Right: Logo */}
                    <img className='imgJ' src={Logo} alt='Logo' title='Priyan webX.png' />

                    {/* Center: Menu */}
                    <div className="menu-center">
                        <Button><Link style={{ textDecoration: "none", color: "#007ce1ff", fontSize: 20, fontWeight: "bold" }} to="/home">Home</Link></Button>
                        <Button><Link style={{ textDecoration: "none", color: "#007ce1ff", fontSize: 20, fontWeight: "bold" }} to="/about">About us</Link></Button>
                        <Button><Link style={{ textDecoration: "none", color: "#007ce1ff", fontSize: 20, fontWeight: "bold" }} to="/guest">Guest in</Link></Button>
                        <Button><Link style={{ textDecoration: "none", color: "#007ce1ff", fontSize: 20, fontWeight: "bold" }} to="/join">Join</Link></Button>
                        <Button><Link style={{ textDecoration: "none", color: "#007ce1ff", fontSize: 20, fontWeight: "bold" }} to="/contact">Contact</Link></Button>
                    </div>


                    {/* Left: Login/Register */}
                    <div className='contentJ'>
                        <Button variant='outlined'><Link style={{ textDecoration: "none", color: "#000000ff" }} to="/login">Login</Link></Button>
                        <Button variant="contained" style={{ backgroundColor: "#000000ff" }}><Link style={{ textDecoration: "none", color: "rgba(255, 255, 255, 1)" }} to="/register">Register now</Link></Button>
                    </div>
                </div>
            </div>

            <div className='input-wrapperJJ'>
                <div className='headJ'>Protonoun<span style={{ color: '#1976d2' }}>X</span></div>
                <div className='headJ1'>The next Gen social media</div>
                <div className='imgPNG'><img src={Work} alt='Logo' />
                    <div className='textJJ'>
                        <p>Social media has become an essential part of our lives,</p> 
                        <p>but platforms come with serious drawbacks such as addiction,</p>
                        <p>privacy concerns, mental health issues, and the spread of fake content.</p>
                        <p>To address these challenges, ProtonounX is designed as a next-generation </p>
                        <p>social platform that prioritizes user well-being, transparency </p>
                        <p>and meaningful engagement over endless scrolling and algorithmic bias.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Joiningpage;
