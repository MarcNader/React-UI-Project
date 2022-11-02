import "./signup.styles.scss"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../Utils/firebase.utils";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { NavLink } from 'react-router-dom'



const defaultFormField={
    FirstName:'',
    LastName:'',
    email:'',
    password:'',
}



const SignUpComponent = ()=> {
    const [formFields,setFormFields]=useState(defaultFormField);
    const {FirstName,email,password,LastName}=formFields;
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
            const {user}= await createAuthUserWithEmailAndPassword(email,password);
            console.log(user);
            await createUserDocumentFromAuth(user, {FirstName,LastName});
            if(user){
                setmyuser(true);
            }
            resetFormFields();
        } catch (error) {
            if (error.code == 'auth/email-already-in-use') 
            {
                alert("Cannopt create user, email already in use!")
            }
            console.log("user creation encountered an error" + error);
        }
        

    }

    return(
        <div className="signup">
            
            <div className="signup-body">
            <h1>Get Started</h1>

            <p>Already have an account? <NavLink  to={"/"} className="Link">
         Signin</NavLink> </p>
            
            <div className="form-container">
            {myuser && (
          <Navigate to="/" replace={true} />
        )}
            <form onSubmit={Handlesubmit} >

                <div className="signup-form" >
                <label>First Name</label>
                <input type="text"  required onChange={HanldeChange} name="FirstName" value={FirstName}/>

                <label>Last Name</label>
                <input type="text"  required onChange={HanldeChange} name="LastName" value={LastName}/>

                <label>Email</label>
                <input type="text"  required onChange={HanldeChange} name="email" value={email}/>

                <label>Password</label>
                <input type="text"  required onChange={HanldeChange} name="password" value={password}/>
                </div>

                <button className="submit-button " type="submit">Submit</button>
            </form>

            </div>
            
            </div>
        </div>
    )
}

export default SignUpComponent