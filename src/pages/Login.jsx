import * as React from "react";
import { TextField, InputAdornment } from '@mui/material';
import Button from '@mui/material/Button';
import { UserRoundSearch, Lock, CircleUserRound} from 'lucide-react';
import "../styles/LoginStyle.css";
const Login = () => {
    const Submits = () =>{
        console.log("Logged");
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
                    <div className="field">  
                        {/* <label htmlFor="username" className="user">Email address</label> */}
                        <CircleUserRound size={17} className="icon2"/>
                        <TextField id="input-with-sx" label="Enter e-mail address" variant="outlined"/>
                    </div> 
                
                    <div className="passfield">
                        {/* <label htmlFor="password-field" className="userpass">Password</label> */}
                        <Lock size={16} className="icon3" />
                        <TextField className="password-field" label= "Password" variant="outlined" type="password"/>
                    </div>
                        <Button className="button-field" variant="contained" onClick={Submits} >Sign In</Button>
                </div>
            </div>     
        </div>
    );
};
export default Login;