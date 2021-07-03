import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
class SignIn extends React.Component {
    constructor(propos) {
        super(propos);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I alerady have an account</h2>
                <span>Sign in with your email and passowrd</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email'
                        name='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                        label='email' />
                    <FormInput type='password'
                        name='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required
                        label='password' />
                    <CustomButton type='submit'>SIGN IN</CustomButton>

                </form>
            </div>
        )
    }
}

export default SignIn;