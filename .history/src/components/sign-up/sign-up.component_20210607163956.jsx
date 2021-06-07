import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import './sign-up.styles.scss'

class SignUp extends React.Component {
    constructor() {
        super()

        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    render() {

        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className="sign-up">
                <h2 className='titlle'> I do not have an account</h2>
                <span >Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display name'
                        required />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required />
                    <FormInput
                        type='pawword'
                        name='pasword'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required />

                </form>
            </div>
        )
    }
}