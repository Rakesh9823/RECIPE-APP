import React from 'react'
import "../signIn/SignIn.css"
const SignIn = () => {
    return (
        <div className='container'>
            <div className='signin'>Sign In</div>
            <form className='signinform'>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' placeholder='Enter email' />
                </div>

                <div className='pass'>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' placeholder='Enter Password' />
                </div>

                <div>
                    <input type="radio" id='radio' />
                    <span>Remember me</span>
                </div>

                <div className='submit'>
                <button>Submit</button>
                </div>
                <div className='forgot'>
                <button>Forgot password?</button>
                </div>
            </form>
        </div>
    )
}

export default SignIn