import React from 'react'
import './sign-in.styles.scss'

import FormInput from '../form-in/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../constant';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { selectedUser } from '../../Redux/users/user-selector';
import { setCurrentUser } from '../../Redux/users/user.action';
import { loginUser } from '../../Redux/users/user.action';
// import api from '../../api';



const SignIn = ({switchToSignUp}) => {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    const dispatch = useDispatch()
    const currentUser = useSelector(selectedUser)
    const error = useSelector(state => state.user.error)
    const navigate = useNavigate()

    // const handleSubmit = async (event) => {
    //     event.preventDefault()

    //     try {
    //         const res = await api.post("/api/token/", {
    //             username: formData.username, 
    //             password: formData.password
    //         })
    //         if (res.status === 200) {
    //             dispatch(setCurrentUser(formData.username)),
    //             // dispatch(setCurrentUser({
    //             //     currentUser: formData.username
    //             // })),
    //             console.log(formData.username);
    //             localStorage.setItem(ACCESS_TOKEN, res.data.access);
    //             localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
    //             console.log(res.data);
    //             setFormData({username: "", password: ""});
    //             alert("Sign in successful");
    //             navigate("/");
    //         }
    //     } catch (err) {
    //         console.log(err.response?.data || err.message)
    //         console.log("Something went wrong")
    //     }
    // }

    // submiting data to backend
    const handleSubmit = async (event) => {
        event.preventDefault()
        const { username, password } = formData
        dispatch(loginUser(username, password))
    }

    // React to login success
    useEffect(() => {
        if(currentUser) {
            alert("Successfull logged in!")
            setFormData({
                username: '',
                password: ''
            }),
            navigate("/")
        }
    },[currentUser, navigate])

    // React to login error
    useEffect(() => {
        if (error) {
            alert("Login Failed! " + JSON.stringify(error))
        }
    }, [error])

    // // firebase db
    // handleSubmit = async (event) => {
    //     event.preventDefault();

    //     const { username, password } = this.state;

    //     try {
    //         await signInWithEmailAndPassword(auth, username, password);

    //         console.log("Login sucessfull!!")

    //         this.setState({
    //             username: '',
    //             password: ''
    //         });
    //     } catch (error) {
    //         console.error("Error message", error.message)
    //     }
    // }
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your username and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    type="username"
                    name='username'
                    value={formData.username}
                    handleChange={handleChange}
                    label='Email'
                    required
                />

                <FormInput
                    type="password"
                    name='password'
                    value={formData.password}
                    handleChange={handleChange}
                    label='Password'
                    required
                />
                <span className="sign">
                    Don’t have an account?{" "}
                    <button
                        type="button"
                        onClick={switchToSignUp}
                        className="sign-style"
                        style={{ color: "blue", textDecoration: "underline", background: "none", border: "none" }}
                    >
                        Sign up
                    </button>
                </span>


                <div className='buttons'>
                    <CustomButton type="submit">Sign In</CustomButton>
                    {/* <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton> */}
                </div>
            </form>
        </div>
    )
}
 
export default SignIn;