import "./signin.styles.scss"
import {signinAuthUserWithEmailAndPassword, 
    signInWithGooglePopup,
signInWithFacebookPopup} from "../../Utils/firebase.utils";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { NavLink } from 'react-router-dom'

import GoogleButton from 'react-google-button'
import {
    FacebookLoginButton,
    GoogleLoginButton,
  } from "react-social-login-buttons";
const defaultFormField={
    email:'',
    password:'',
}



const SignInComponent = ()=> {
    const [formFields,setFormFields]=useState(defaultFormField);
    const {email,password}=formFields;
    const [myuser,setmyuser]=useState(false);

    const resetFormFields=()=> {
        setFormFields(defaultFormField);
    }

  const  HanldeChange=(event)=> {
        const {name,value}=event.target;
        setFormFields({...formFields,[name]:value});
        
    }

   const Handlesubmit=async(event) => {
        event.preventDefault();

        try {
            const {user}= await signinAuthUserWithEmailAndPassword(email,password);
            console.log(user);
         
            if(user){
                setmyuser(true);
            }
            resetFormFields();
        } catch (error) {

            console.log("user login encountered an error" + error);
        }
       
        

    }

    const logGoogleUser=async () => {
        const {user}= await signInWithGooglePopup();
       const userDocRef= await createUserDocumentFromAuth(user);
       
    }

    const logFacebookUser=async () => {
        const {user}= await signInWithFacebookPopup();
       const userDocRef= await createUserDocumentFromAuth(user);
       
    }
    return(
        <div className="signin">
            
            <div className="signin-body">
            <h1>Welcome!</h1>

            <p>Don't have an account? <NavLink  to={"SignUp"} className="Link">
         Signup</NavLink></p>
            
            <div className="signin-form-container">

                <div className="socialmedia-container">
                <GoogleLoginButton className="google"  onClick={logGoogleUser}>Sign in with Google</GoogleLoginButton>
                <FacebookLoginButton className="facebook" onClick={logFacebookUser}>Sign in with Facebook</FacebookLoginButton>
                </div>

                    <span className="d-flex justify-content-center mb-3 text-secondary">Or</span>
            {myuser && (
          <Navigate to="/dashboard" replace={true} />
        )}
            <form onSubmit={Handlesubmit} >

                <div className="signin-form" >

                <label>Email</label>
                <input type="text" placeholder="example@gmail.com"  required onChange={HanldeChange} name="email" value={email}/>

                <label>Password</label>
                <input type="password" placeholder="example@password.com"  required onChange={HanldeChange} name="password" value={password}/>
                </div>



                <button className="submit-button text-light" type="submit" >Sign In</button>
            </form>

            </div>
            
            </div>
        </div>
    )
}

export default SignInComponent