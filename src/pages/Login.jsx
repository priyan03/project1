import React, { useState } from "react";
import logo from '../Logo-Priyan-webX.png';
import bgGif from '../bgGif/bg.gif';
import { TextField, Checkbox, FormControlLabel, InputAdornment, IconButton } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { UserRoundSearch } from 'lucide-react';
import "../styles/LoginStyle.css";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
    // const Submits = () => {
    //     console.log("Logged");
    // }
    const navigate = useNavigate();

    const [name, setName] = useState({
        email: "",
        password: ""
    })

    const handleClick = () => {
        console.log("Login data : ", name);
        // if (!name.email || !name.password) {
        //     alert("Please enter email and password");
        //     return; 
        // }
        if (name.email === "abc@gmail.com" && name.password === "Admin@123") {
            navigate("/home");
        } else {
            alert("Invalid email or password");
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setName((prevData) => ({ ...prevData, [name]: value }))
    }

    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => {
        setShowPassword((prev) => !prev);
    };
    return (
        <div
            className="backgroundimage"
            style={{ backgroundImage: `url(${bgGif})` }}>

            <div className="heading-text" style={
                {
                    padding: "6px"
                }
            }>
                <span style={{ color: "hsla(285, 80%, 26%, 1.00)", fontWeight: "bolder" }}>Innovation starts with a click</span><span>&nbsp;- &nbsp;</span>
                <span style={{ fontSize: "2rem" }}>leading to Verte</span><span className="p" style={{ fontSize: "2.1rem", color: "#1976d2" }}>X</span></div>
            <marquee style={{ backgroundColor: "#6f00ff49", padding: "2px", color: "black", fontSize: "10px", fontWeight: "bold" }}>
                ProtonounX is a digital solutions service where a single user interaction
                — a click — initiates innovative processes. From web application development to
                interactive user experiences, our service transforms simple actions into powerful outcomes,
                integrating modern UI/UX design, responsive technology, and scalable architecture to deliver
                cutting-edge solutions.</marquee>

            <div className="input-wrapper">
                <div className="img"><img className="img" src={logo} alt="Logo" title="Priyan webX Logo" /></div>
                <div className="border">
                    <div className="box">
                        <UserRoundSearch size={62} className="icon" style={{ color: "#1976d2" }} />
                        <h1 className="bt">
                            <span style={{ fontSize: "3rem" }}>Protonoun</span><span className="p" style={{ fontSize: "3.5rem", color: "#1976d2" }}>X</span>
                        </h1>
                        <span className="si">Sign in to your account</span>

                        <form
                            onSubmit={(e) => {
                                e.preventDefault(); // stops page refresh
                                handleClick();      // run your login logic only after validation passes
                            }}>
                            <TextField
                                className="emailL"
                                name="email"
                                onChange={(e) => handleChange(e)}
                                required
                                fullWidth
                                label="Enter e-mail address"
                                variant="outlined"
                                type="email"
                                size="small"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <AccountCircle style={{ color: "#1976d2" }} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                className="passL"
                                name="password"
                                onChange={(e) => handleChange(e)}
                                required
                                fullWidth
                                label="Password"
                                variant="outlined"
                                type={showPassword ? "text" : "password"}
                                size="small"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={togglePassword} edge="end" style={{ color: "#1976d2" }}>
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <FormControlLabel classes={{ label: "remL" }} label="Remember me" control={<Checkbox size="smaller"/>}/>
                            <span className="forgotL"><Link style={{color: "#1976d2" , textDecoration:"none"}}>Forgot password?</Link></span> 

                            <div className="singin"><Button type="submit" variant="contained" /*onClick={handleClick}*/ size="small" fullWidth>Sign In</Button></div>
                        </form>
                        <p style={{fontSize:14}}>Don't have an account? <Link style={{textDecoration:"none"}} to="/register"><span style={{ fontWeight: "Bold", color: "#1976d2"}}>Register</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;