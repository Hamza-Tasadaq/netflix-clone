import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import { useHistory } from 'react-router'
import { AiFillCaretRight } from 'react-icons/ai'

const Home = () => {
    const history = useHistory()
    return (
        <>
            <Navbar />
            <div className="show-case-content">
                <h1>See what's next</h1>
                <p>Watch anywhere. Cancel Anytime</p>
                <a onClick={() => { history.push('/signup') }} className="btn btn-xl">Get Started<AiFillCaretRight /></a>
            </div>
            <br />
        </>
    )
}

export default Home
