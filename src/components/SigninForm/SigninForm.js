import React, { useRef } from 'react'
import './SigninForm.css'
import { useHistory } from 'react-router'
import auth, { facebookProvider } from '../../firebase/firebase'

const SigninForm = () => {
    const email = useRef(null)
    const password = useRef(null)
    const history = useHistory()

    const signIn = () => {
        auth.signInWithEmailAndPassword(email.current.value, password.current.value)
            .then((authUser) => {
                history.push('/')
            })
            .catch((err) => {
                alert(err.messsage)
            })
    }
    const facebookSignIn = () => {
        auth.signInWithPopup(facebookProvider)
            .then((res) => {
                history.push('/')
            })
            .catch((err) => {
                alert(err.messsage)
            })
    }
    return (
        <>
            <div className="sign-in">
                <h1>Sign In</h1>
                <form>
                    <input ref={email} type="email" placeholder="Email" required />
                    <input ref={password} type="password" placeholder="Password" required />
                    <a className="btn " onClick={signIn}>Sign In</a>
                    <a onClick={facebookSignIn} className="btn facebook">Login With Facebook</a>
                </form>
                <p>New to Netflix? <a onClick={() => { history.push('/signup') }}>Sign up Now</a> </p>
            </div>
        </>
    )
}

export default SigninForm
