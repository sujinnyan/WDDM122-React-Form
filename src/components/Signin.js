import React, {useState} from "react";
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
import {Link,useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import {BsFillEyeFill} from 'react-icons/bs';
import { signInWithGoogle} from "../firebase.config";

const Signin = () => {
    const [showPassword,setShowPassword] = useState(false)
    const [formData,setFormData] = useState({
        email:' ',
        password: ' '
    })
    const {name, email,password} = formData
    const navigate= useNavigate();

    const onChange= (e) => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.id]:e.target.value,
        }));
    };
    const loginHandler = async (e) => {
        e.preventDefault();
        try {
            const auth = getAuth()
            const userCredential = await signInWithEmailAndPassword(auth,email,password);
            if(userCredential.user) {
                toast.success('Login Success')
                navigate("/");
            }
        } catch (error) {
            // console.log(error);
            toast.error("Invalid Email Or Password")
        }
    };
    return (
        <div className="d-flex align-items-center justify-content-center">

        <form className="bg-light p-5 rounded" onSubmit={loginHandler}>
            <h2 className="p-3 mt-2 text-dark text-center">Sign In</h2>
        
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          
          <input type="email" value={email} className="form-control" id="email" onChange={onChange} aria-describedby="emailHelp" />
        </div>
      
      
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          
          <input type={showPassword ? "text" : "password"} value={password} className="form-control" id="password" onChange={onChange} />
          <span>show password
              <BsFillEyeFill className="ms-2 text-dark"
              style={{cursor: "pointer"}}
              onClick={() => {
                  setShowPassword((preState)=>!preState);
              }}
              />
          </span>
        </div>
      
        
        <div className="login-google">

  <button type="submit" className="btn btn-primary w-50">Sign in</button>
      <button onClick={signInWithGoogle} type="button" className="login-with-google-btn w-50">Sign in with Google</button>

  </div>

      <h3 className="bg-dark p-2 mt-2 text-light text-center">User Information</h3>


        <div className="wrapper-userInfo">
        <div className="img-userInfo">
        <img src={localStorage.getItem("profilePic")} />
        </div>
        <div className="Info-userInfo">
      <h3>{localStorage.getItem("name")}</h3>
      <h3>{localStorage.getItem("email")}</h3>
      </div>
      </div>

        <div className="mt-2 login-google">
    
            <span className="p-2">New User</span><Link to="/Signup">Sign up</Link>
        </div>
      </form>
      
    </div>
    );
};

export default Signin;