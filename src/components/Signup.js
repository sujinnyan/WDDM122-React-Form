import React, {useState} from "react";
import {Link,useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import {BsFillEyeFill} from 'react-icons/bs';
import {getAuth,createUserWithEmailAndPassword,updateProfile,
} from "firebase/auth";
import {db} from "../firebase.config";
import { signInWithGoogle} from "../firebase.config";
// import {doc,setDoc,serverTimestamp} from 'firebase/firestore'

const Signup = () => {
    const [showPassword,setShowPassword] = useState(false)
    const [formData,setFormData] = useState({
        email:' ',
        name:' ',
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

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const auth = getAuth();
            const userCredential = await createUserWithEmailAndPassword(auth,email,password);
            const user = userCredential.user;
            updateProfile(auth.currentUser, { displayName: name});
            // const formDataCopy = { ...formData };
            // delete formDataCopy.password;
            // formDataCopy.timestamp = serverTimestamp();
            // await setDoc(doc(db, "users" ,user.uid), formDataCopy);
            toast.success(" Signup Successfully ! ")
            navigate("/");
           
        }catch (error) {
            console.log(error);
        }
    
    };

    return (
      
            <div className="d-flex align-items-center justify-content-center mt-5 h-100">

  <form className="bg-light p-5 rounded" onSubmit={onSubmitHandler}>
      <h2 className="p-3 mt-2 text-dark text-center ">Sign Up</h2>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    
    <input type="text" value={name} className="form-control" id="name" onChange={onChange} aria-describedby="nameHelp" />


  </div>

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

  <button type="submit" className="btn btn-primary w-50">Sign up</button>
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
      <span className="p-2">Already User</span><Link to="/Signin">Login</Link>
</form>

</div>
       
    );
};

export default Signup;
