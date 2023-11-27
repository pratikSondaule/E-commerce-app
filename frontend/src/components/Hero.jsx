import React from 'react'
import hand_icon from '../assets/hand_icon.png'
import arrow from '../assets/arrow.png'
import hero_image from '../assets/hero_image.png'
const Hero = () => {
    return (
        <>
            <div className='hero'>
                <div className='hero-left'>
                    <h2>NEW ARRIVALS ONLY</h2>
                    <div>
                        <div className='hero-hand-icon'>
                            <p>new</p>
                            <img src={hand_icon} alt='Hand icon' />
                        </div>
                        <p>collections</p>
                        <p>for everyone</p>
                        <div className='hero-latest-btn'>
                            <div>
                                Latest Collection
                            </div>
                            <img src={arrow} alt='Arrow icon' />
                        </div>
                    </div>
                </div>
                <div className='hero-right'>
                    <img src={hero_image} alt='Hero image' />
                </div>
            </div>
        </>
    )
}

export default Hero
