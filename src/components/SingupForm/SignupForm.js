import React, { useRef } from 'react'
import './SignupForm.css'
import { useHistory } from 'react-router'
import auth from '../../firebase/firebase'

const SignupForm = () => {
    const history = useHistory()
    const email = useRef(null)
    const password = useRef(null)

    const register = () => {
        auth.createUserWithEmailAndPassword(email.current.value, password.current.value)
            .then((user) => {
                // console.log("user created", user)
                history.push('/')
            }).catch((err) => {
                alert(err.message)
            })
    }

    return (
        <>
            <div className="sign-up">
                <h1>Sign Up</h1>
                <form>
                    <input ref={email} type="email" placeholder="Email" required />
                    <input ref={password} type="password" placeholder="Password" required />
                    <a className="btn " onClick={register}>Sign Up</a>
                </form>
                <p>Already Have an Account? <a onClick={() => { history.push('/signin') }} >Sign In Now</a> </p>
            </div>
        </>
    )
}

export default SignupForm
