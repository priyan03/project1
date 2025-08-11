import React, {useState} from "react";
import logo from '../Logo Priyan webX.png';
import bgGif from '../bgGif/bg.gif';
import { TextField, Checkbox, FormControlLabel, colors } from '@mui/material';
import Button from '@mui/material/Button';
import { UserRoundSearch, Lock, CircleUserRound } from 'lucide-react';
import "../styles/LoginStyle.css";
const Login = () => {
    const Submits = () => {
        //console.log("Logged");
    }

    const[name,setName] = useState({
        email:"",
        password:""
    })

    const handleClick = ()=>{
        console.log(name);   
    }
    const handleChange = (e)=>{
        const {name, value} = e.target
        setName((prevData) => ({...prevData, [name] : value}))
    }
    return (
        <div
            className="backgroundimage"
            style={{ backgroundImage: `url(${bgGif})` }}>
            <div className="heading-text" style={
                {
                    padding: "6px"
                }
            }><span style={{color:"hsla(285, 80%, 26%, 1.00)", fontWeight:"bolder"}}>Innovation starts with a click</span><span>&nbsp;- &nbsp;</span>
            <span style={{fontSize:"2rem"}}>leading to Verte</span><span className="p" style={{fontSize:"2.1rem"}}>X</span></div>
            <marquee style={{backgroundColor: "#6f00ff49", padding: "2px" , color:"black", fontSize:"10px", fontWeight:"bold"}}>
                ProtonounX is a digital solutions service where a single user interaction
                — a click — initiates innovative processes. From web application development to
                interactive user experiences, our service transforms simple actions into powerful outcomes,
                integrating modern UI/UX design, responsive technology, and scalable architecture to deliver
                cutting-edge solutions.</marquee>

            <div className="input-wrapper">
                <div className="img"><img className="img" src={logo} alt="Logo" title="Priyan webX Logo" /></div>
                <div className="border">
                    <div className="box">
                        <UserRoundSearch size={62} className="icon" />
                        <h1 className="bt">
                            <span style={{fontSize:"2.7rem"}}>Protonoun</span><span className="p" style={{ fontSize: "3rem"}}>X</span>
                        </h1>
                        <span className="si">Sign in to your account</span>

                        <div className="email">
                            <CircleUserRound size={17} className="icon2" />
                            <TextField name="email" onChange={(e) => handleChange(e)} 
                            label="Enter e-mail address" variant="outlined" type="email" size="small" fullWidth />
                        </div>

                        <div className="pass">
                            <Lock size={16} className="icon3" />
                            <TextField name="password" onChange={(e) => handleChange(e)}
                            label="Password" variant="outlined" type="password" size="small" fullWidth />
                            <FormControlLabel control={<Checkbox size="smaller" />} /><span className="span" style={{ fontSize: "0.6rem" }}>Remember me</span>
                            <span><a className="a1" href="#" style={{ fontSize: "0.6rem", color: "#1976d2" }}>Forgot password?</a></span>

                        </div>
                        <Button className="button-field" variant="contained" onClick={handleClick} size="small">Sign In</Button>
                        <p style={{ fontSize: "0.7rem" }}>Don't have an account? <a href="#" className="a"><span style={{ fontWeight: "Bold", color: "#1976d2" }}>Register</span></a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;