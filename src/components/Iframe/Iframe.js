import React from 'react'
import './Iframe.css'

const Iframe = ({ url }) => {
    return (
        <>
            <iframe width="100%" height="390"
                src={url} />
        </>
    )
}

export default Iframe
