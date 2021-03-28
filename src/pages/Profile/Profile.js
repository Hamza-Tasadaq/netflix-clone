import React from 'react'
import auth from '../../firebase/firebase'
import { useHistory } from "react-router"
import Navbar from '../../components/Navbar/Navbar'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/user/userSlice'
import './Profile.css'

const Profile = () => {
    const user = useSelector(selectUser)
    const history = useHistory()
    const signOut = () => {
        auth.signOut()
        history.push('/')
    }
    return (
        <div className="Profile">
            <Navbar />
            <div className="profile-container">
                <h1>Your Profile</h1>
                <div className="profileContent">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar_Logo" />
                    <div className="profileText">
                        <h3>{user.email}</h3>
                        <a className="btn" onClick={signOut} >log out</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
