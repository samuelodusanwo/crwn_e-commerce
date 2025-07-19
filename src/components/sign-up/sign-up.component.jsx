import React from 'react';
// import FormInput from '../form-input/form-input.component';
import FormInput from '../form-in/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './sign-up.styles.scss';

class SignUp extends React.Component{
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (confirmPassword != password){
            alert("Paassword does not match!")
            return;
        }

        try {
             const { user } = await createUserWithEmailAndPassword(auth, email, password);
             await createUserProfileDocument(user, {displayName});

             this.state = {
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }
             
        } catch (error){
            console.error(error)
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    render () {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h1>I don't have an account</h1>
                <span>Sign up with your email and password</span>

                <form action="#" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        label="Display Name"
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        label="Email"
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        label="Password"
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        label="Confirm Password"
                        onChange={this.handleChange}
                        required
                    />
                    <CustomButton type="submit"> Sign Up </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;