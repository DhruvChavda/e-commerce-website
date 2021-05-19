import React, { Component } from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import "./sign-in.scss";

export default class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();

        console.log("submitted");
        console.log(this.state);
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className='sign-in'>
                <h2>I Already Have an Account</h2>
                <span>SignIn with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <CustomButton type='submit' value='submit form'>
                        Sign In
                    </CustomButton>
                </form>
            </div>
        );
    }
}
