import { useState } from 'react';
import Form from 'react-bootstrap/Form';

// Button from a link
export function RedLinkButton(props) {
    return (
        <a className="btn btn-danger" style={{ maxWidth: "150px" }} href={props.href} role="button">{props.text}</a>
    )
}
export function PurpleLinkButton(props) {
    return (
        <a className="btn btn-purple-600" style={{ maxWidth: "150px" }} href={props.href} role="button">{props.text}</a>
    )
}
export function GreenLinkButton(props) {
    return (
        <a className="btn btn-success" style={{ maxWidth: "150px" }} href={props.href} role="button">{props.text}</a>
    )
}

// Doctor detail card
export function DoctorCard(params) {
    return (
        <div class="doctor-card d-flex flex-column justify-content-between"
            style={{
                backgroundImage: `url(${params.src})`,
                backgroundSize: 'cover',
            }}>
            <div className="mt-auto">
                <div className="Content-box full">
                    <h2>Dr.{params.name}</h2>
                    <p>Speciality: {params.speciality}</p>
                </div>
                <div className="d-flex mt-2 justify-content-between">
                    <div className="Content-box fit">
                        <p>Experience:{params.experience}</p>
                    </div>
                    <div className="Content-box fit">
                        <p>Age:{params.age}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Appointment bar
export function AppointmentBar(props) {
    return (
        <div>
            <div
                className="appointment-bar p-2"
            >
                <div style={{ color: "#FFF" }} className='row'>
                    <div className='col-2'>
                        {props.id}
                    </div>
                    <div className='col-5'>
                        {props.doctor}
                    </div>
                    <div className='col-3'>
                        {props.date}
                    </div>
                    <div className='col-2'>
                        {props.status}
                    </div>
                </div>
                <div className='appointment-details'>
                    <h4>Appointment details</h4>
                    <p>Appointment Date - {props.created}</p>
                    <p>Take Date - {props.take}</p>
                    <p>{props.status}</p>
                    <h5>Problem Statement</h5>
                    <p>{props.problemStatement}</p>
                    <a className="btn btn-danger" href="/assign" role="button">Assign a Doctor</a>
                </div>
            </div>
        </div>
    )
}
