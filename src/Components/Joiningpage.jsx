import React, { useState } from 'react';
import "../ComponentStyle/Joiningpage.css";
import Logo from '../Logo-Priyan-webX.png';
import Work from '../bgGif/Work.png';
import { Drawer, IconButton, Button } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from 'react-router-dom';

const Joiningpage = () => {
    // state for drawer open/close
    const [open, setOpen] = useState(false);

    // toggle function
    const toggleDrawer = (state) => () => {
        setOpen(state);
    };

    return (
        <div className='backgroundimageJ'>
            <div className='input-wrapperJ'>

                <div className='content'>
                    <div>
                        {/* Menu Button */}
                        <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>

                        {/* Sidebar Drawer */}
                        <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                            <div className="sidebar-menu">
                                <Button onClick={toggleDrawer(false)}>
                                    <Link to="/home" className="sidebar-link">Home</Link>
                                </Button>
                                <Button onClick={toggleDrawer(false)}>
                                    <Link to="/about" className="sidebar-link">About us</Link>
                                </Button>
                                <Button onClick={toggleDrawer(false)}>
                                    <Link to="/guest" className="sidebar-link">Guest in</Link>
                                </Button>
                                <Button onClick={toggleDrawer(false)}>
                                    <Link to="/InitSwipe" className="sidebar-link">InitSwipe</Link>
                                </Button>
                                <Button onClick={toggleDrawer(false)}>
                                    <Link to="/join" className="sidebar-link">Join us</Link>
                                </Button>
                                <Button onClick={toggleDrawer(false)}>
                                    <Link to="/contact" className="sidebar-link">Contact</Link>
                                </Button>
                            </div>
                        </Drawer>
                    </div>

                    {/* Right: Logo */}
                    <img className='imgJ' src={Logo} alt='Logo' title='Priyan webX.png' />

                    <div className="hero-container">
                        <div className="headJ">
                            Protonoun<span style={{ color: '#1976d2' }}>X</span>
                        </div>
                        <div className="headJ1">The next Gen social media</div>
                    </div>

                    {/* Left: Login/Register */}
                    <div className='contentJ'>
                        <Button variant='outlined'>
                            <Link style={{ textDecoration: "none", color: "#000000ff" }} to="/login">Login</Link>
                        </Button>
                        <Button variant="contained" style={{ backgroundColor: "#000000ff" }}>
                            <Link style={{ textDecoration: "none", color: "rgba(255, 255, 255, 1)" }} to="/register">Register now</Link>
                        </Button>
                    </div>
                </div>
            </div>

            <div className='input-wrapperJJ'>
                <div className='imgPNG'>
                    <img src={Work} alt='Working image' />
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
