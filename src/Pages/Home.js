import React from 'react'
import Navigation from '../Components/Navigation'
import welcome from '../Assests/welcome.png'
import slogan from '../Assests/slogan.png'

export default function Home() {
    return (
        <>
            <Navigation />
            <div className="container welcome">
                <img width="50%" src={welcome} alt='welcome' />
                <div className='home-contents'>
                    <img width="70%" src={slogan} alt='slogan' />
                    <p>24h customer support, <br />
                        1000+ Connected Doctors</p>
                    <a className="btn btn-danger" style={{ maxWidth: "150px" }} href="/register" role="button">Register</a>
                </div>
            </div>
        </>
    )
}