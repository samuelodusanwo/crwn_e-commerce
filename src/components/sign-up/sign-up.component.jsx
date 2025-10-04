// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// // import FormInput from '../form-input/form-input.component';
// import FormInput from '../form-in/form-input.component';
// import CustomButton from '../custom-button/custom-button.component';
// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import './sign-up.styles.scss';
// import api from '../../api';

// class SignUp extends React.Component{
//     constructor(){
//         super();

//         this.state = {
//             username: '',
//             email: '',
//             password: '',
//             confirmPassword: ''
//         }
//     }

//     handleSubmit = async (event) => {
//         event.preventDefault();
//         const { username, email, password, confirmPassword } = this.state

//         if (confirmPassword !== password) {
//             alert("Password does not match!")
//             return
//         }

//         try {
//             const res = await api.post("/api/user/register/", {username, email, password})
//             if (res.status === 201) {
//                 console.log(res.data)

//                 this.setState({
//                     username: '',
//                     email: '',
//                     password: '',
//                     confirmPassword: ''
//                 })

//                 alert("Account created!")
//             } else {
//                 console.log(res.data?.error || "Unknown error")
//             }
//         } catch (err) {
//             console.error(err.response?.data || err.message)
//             alert("Something went wrong")
//         }
//     }

//     // handleSubmit = async (event) => {
//     //     event.preventDefault();

//     //     const { username, email, password, confirmPassword } = this.state;

//     //     if (confirmPassword != password){
//     //         alert("Paassword does not match!")
//     //         return;
//     //     }

//     //     try {
//     //          const { user } = await createUserWithEmailAndPassword(auth, email, password);
//     //          await createUserProfileDocument(user, {username});

//     //          this.state = {
//     //             username: '',
//     //             email: '',
//     //             password: '',
//     //             confirmPassword: ''
//     //         }
             
//     //     } catch (error){
//     //         console.error(error)
//     //     }
//     // }

//     handleChange = event => {
//         const { name, value } = event.target;

//         this.setState({
//             [name]: value
//         })
//     }

//     render () {
//         const { username, email, password, confirmPassword } = this.state;
//         return (
//             <div className='sign-up'>
//                 <h1>I don't have an account</h1>
//                 <span>Sign up with your email and password</span>

//                 <form action="#" onSubmit={this.handleSubmit}>
//                     <FormInput
//                         type="text"
//                         name="username"
//                         value={username}
//                         label="Display Name"
//                         onChange={this.handleChange}
//                         required
//                     />
//                     <FormInput
//                         type="email"
//                         name="email"
//                         value={email}
//                         label="Email"
//                         onChange={this.handleChange}
//                         required
//                     />
//                     <FormInput
//                         type="password"
//                         name="password"
//                         value={password}
//                         label="Password"
//                         onChange={this.handleChange}
//                         required
//                     />
//                     <FormInput
//                         type="password"
//                         name="confirmPassword"
//                         value={confirmPassword}
//                         label="Confirm Password"
//                         onChange={this.handleChange}
//                         required
//                     />
//                     <span>Already have an account? </span>
//                     <CustomButton type="submit"> Sign Up </CustomButton>
//                 </form>
//             </div>
//         )
//     }
// }

// export default SignUp;






import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormInput from '../form-in/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import api from '../../api';
import './sign-up.styles.scss';

const SignUp = ({switchToSignIn}) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { username, email, password, confirmPassword } = formData;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (confirmPassword !== password) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await api.post("/api/user/register/", { username, email, password });

      if (res.status === 201) {
        console.log(res.data);
        setFormData({
          username: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
        alert("Account created!");
        navigate("/login"); 
      } else {
        console.log(res.data?.error || "Unknown error");
      }
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Something went wrong");
    }
  };

  return (
    <div className='sign-up'>
      <h1>I don't have an account</h1>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="username"
          value={username}
          label="Display Name"
          onChange={handleChange}
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          label="Email"
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          label="Password"
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm Password"
          onChange={handleChange}
          required
        />
        <span className="sign">
            Already have an account?{" "}
            <button
                type="button"
                onClick={switchToSignIn}
                className="sign-style"
                style={{ color: "blue", textDecoration: "underline", background: "none", border: "none" }}
            >
                Sign in
            </button>
        </span>


        <CustomButton type="submit"> Sign Up </CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
