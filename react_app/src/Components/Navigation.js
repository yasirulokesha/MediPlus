import React from 'react'
import { LinkButton } from './MainComponents'

export default function Navigation() {
    const username = localStorage.getItem("username");

    return (
        <div class="container p-3">
            <div class="card p-2 navigation ">
                <div class="card-body col-12 d-flex align-items-center justify-content-between">
                    <div className='flex'>
                        <a href="/">Home</a>
                        <a href="/appointments">Appointments</a>
                        <a href="/doctors">Doctors</a>
                        <a href="/about">About Us</a>
                    </div>
                    {username ? (
                        <a className="btn btn-primary" href="/login" role="button">Log In</a>
                    ) : (
                        <a href="/profile">{username}</a>
                    )}
                </div>
            </div>
        </div>
    )
}