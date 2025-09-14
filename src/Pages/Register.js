import { useState } from 'react'
import background from '../Assests/background.png'
import Form from 'react-bootstrap/Form';

export default function Register() {
    const [RegAs, setRegAs] = useState('patient')
    const [Drtype, setDrtype] = useState()
    return (
        <div class="container-fluid"
            style={{
                width: '100vw',
                height: '100vh',
                backgroundImage: `url(${background})`,
                backgroundSize: '1300px',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom',
            }}>
            <form style={{transform: 'translate(0px, 20%)'}} action="/login" method='POST'>
                <legend>Create An Account</legend>
                <div class="mb-3 row">
                    <label for="regsiterAs" class="col-4 col-form-label">Register as</label>
                    <div class="col-8">
                        <Form.Select name='regsiterAs' onChange={(e) => { setRegAs(e.target.value) }}>
                            <option value="patient">Patient</option>
                            <option value="doctor">Doctor</option>
                        </Form.Select>
                    </div>
                </div>
                {RegAs === "doctor" &&
                    <div>
                        <div class="mb-3 row">
                            <label for="regsiterAs" class="col-4 col-form-label">Doctor Type</label>
                            <div class="col-8">
                                <Form.Select name='Drtype' onChange={(e) => { setDrtype(e.target.value) }}>
                                    <option value="general">General</option>
                                    <option value="specialist">Specialist</option>
                                </Form.Select>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="service" class="col-4 col-form-label">Service</label>
                            <div class="col-8">
                                <input type="text" class="form-control" name="service" id="service" placeholder="5(years)" />
                            </div>
                        </div>
                    </div>
                }
                {Drtype === "specialist" && RegAs === "doctor" &&
                    <div class="mb-3 row">
                        <label for="subject" class="col-4 col-form-label">Subject</label>
                        <div class="col-8">
                            <input type="text" class="form-control" name="subject" id="subject" placeholder="Cardiologists" />
                        </div>
                    </div>
                }
                <div class="mb-3 row">
                    <label for="username" class="col-4 col-form-label">Username</label>
                    <div class="col-8">
                        <input type="text" class="form-control" name="username" id="username" placeholder="John" />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="email" class="col-4 col-form-label">Email</label>
                    <div class="col-8">
                        <input type="text" class="form-control" name="email" id="email" placeholder="Email" />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="age" class="col-4 col-form-label">Age</label>
                    <div class="col-8">
                        <input type="text" class="form-control" name="age" id="age" placeholder="30" />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="sex" class="col-4 col-form-label">Sex</label>
                    <div class="col-8">
                        <Form.Select name='sex'>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Form.Select>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="password" class="col-4 col-form-label">Password</label>
                    <div class="col-8">
                        <input type="password" class="form-control" name="password" id="password" placeholder="Password" />
                    </div>
                </div>
                <div class="d-flex gap-2 mt-5">
                    <button type="reset" class="btn btn-danger">Clear</button>
                    <button type="submit" name="submit" class="btn btn-primary">Register</button>
                </div>
                <p className="mt-3 ">
                    Have an existing account?
                    <a href='/login'>
                        Login Now!
                    </a>
                </p>
            </form>
        </div>
    )
}