import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { useHistory, useLocation } from 'react-router'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/user/userSlice'

const Navbar = () => {
    const [scroll, setScroll] = useState(false)
    const history = useHistory()
    const location = useLocation()
    const user = useSelector(selectUser)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 100);
        });
    }, []);
    return (
        <>
            <div className={`Nav ${scroll && "black"}`}>
                <img className="logo-image" onClick={() => { history.push('/') }} src="https://i.ibb.co/r5krrdz/logo.png" alt="netflix-logo" />
                {
                    user ?
                        <>
                            {
                                location.pathname !== '/profile' &&
                                <img onClick={() => { history.push('/profile') }} className="avatar_logo" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar_Logo" />
                            }
                        </> :
                        <>
                            {
                                location.pathname !== '/signin' &&
                                <a onClick={() => { history.push('/signin') }} className="btn btn-rounded">Sign In</a>
                            }
                        </>
                }
            </div>
        </>
    )
}

export default Navbar
