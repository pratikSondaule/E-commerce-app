import React from 'react'

const NewsLetter = () => {
    return (
        <>
            <div className='newsletter'>
                <h1>Get exclusive offers on your email</h1>
                <p>Subscribe to our news letter and stay updated</p>
                <div>
                    <input type='email' placeholder='Your Email ID' />
                    <button>Subscribe</button>
                </div>
            </div>
        </>
    )
}

export default NewsLetter
