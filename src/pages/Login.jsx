import * as React from "react";
import { TextField , Checkbox, FormControlLabel} from '@mui/material';
import Button from '@mui/material/Button';
import { UserRoundSearch, Lock, CircleUserRound} from 'lucide-react';
import "../styles/LoginStyle.css";
const Login = () => {
    const Submits = () =>{
        console.log("Logged");
    }
    const Register = () =>{
        console.log("Register")
    }
    return(
        <div className="input-wrapper">
            <div className="border">
                <div className="box">

                    <UserRoundSearch size={62} className="icon"/>
                
                    <h1 className="bt">
                        <span className="b">P</span>riyan <span className="b">W</span>eb
                    </h1>
                    <div className="si">Sign in to your account</div>

                    <div className="email">  
                        <CircleUserRound size={17} className="icon2"/>
                        <TextField label= "Enter e-mail address" variant="outlined" type="email" size="small" fullWidth/>
                    </div> 
                
                    <div className="pass">
                        <Lock size={16} className="icon3" />
                        <TextField label= "Password" variant="outlined" type="password" size="small" fullWidth/>
                        <FormControlLabel control={<Checkbox size="smaller" />}/><span className="span" style={{fontSize:"0.6rem"}}>Remember me</span><a className="a1" href="#" style={{fontSize:"0.6rem", color:"#1976d2"}}>Forgot password?</a>

                    </div>
                        <Button className="button-field" variant="contained" onClick={Submits} size="small">Sign In</Button>
                        <p style={{fontSize : "0.7rem"}}>Don't have an account? <a href="#" className="a"><span onClick={Register} style={{fontWeight: "Bold", color:"#1976d2"}}>Register</span></a></p>
                </div>
            </div>     
        </div>
    );
};
export default Login;