import { useState } from 'react'
import background from '../Assests/background.png'
import Form from 'react-bootstrap/Form';

export default function Login() {
    const [RegAs, setRegAs] = useState('patient')
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
            <form style={{ transform: 'translate(0px, 50%)' }} action="/login" method='POST'>

                <legend>Login</legend>
                <Form.Select onChange={(e) => { setRegAs(e.target.value) }}>
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                </Form.Select>
                <br />
                <div class="mb-3 row">
                    <label for="email" class="col-4 col-form-label">Email</label>
                    <div class="col-8">
                        <input type="text" class="form-control" name="email" id="email" placeholder="Email" />
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
                    <button type="submit" name="submit" class="btn btn-success">Login</button>
                </div>
                <p className="mt-3 ">
                    Don't have an account?
                    <a href='/register'>
                        Register Now!
                    </a>
                </p>
            </form>
        </div>
    )
}