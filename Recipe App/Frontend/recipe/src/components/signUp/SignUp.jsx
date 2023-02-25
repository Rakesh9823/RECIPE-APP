import React from 'react'
import "../signUp/SignUp.css"
const SignUp = () => {
  return (
    <div className='signUpContainer'>
        <div className='signup'>Sign Up</div>
        <form className='signupform' >
        <div>
            <input type="email" id='signUpEmail' placeholder='Enter email' />
        </div>

        <div>
            <input type="password" id='signUpPassword' placeholder='Enter Password' />
        </div>

        <div>
            <input type="password" id='repeatPassword' placeholder='Repeat Password' />
        </div>

        <div className='check-radio'>
            <input type="radio" />
            <span>I agree with <span className='TAC'>TERMS AND CONDITIONS</span></span>
        </div>

        <div className='continue'>
            <button>Continue</button>
        </div>
        </form>
    </div>
  )
}

export default SignUp