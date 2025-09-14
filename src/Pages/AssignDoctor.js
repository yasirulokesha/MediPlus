import { useState } from 'react'
import background from '../Assests/background.png'
import Form from 'react-bootstrap/Form';

export default function AssignDoctor(props) {
    const [doctor, setDoctor] = useState()
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

                <legend>Assign to a Doctor</legend>

                <h4>Appointment details</h4>
                <p>Appointment Date - {props.created}</p>
                <p>Take Date - {props.take}</p>
                <p>{props.status}</p>
                <h5>Problem Statement</h5>
                <p className='problem'>{props.problemStatement}</p>

                <div className='d-flex align-items-center'>
                    <h5 className='col-3'>Doctor</h5>
                    <Form.Select onChange={(e) => { setDoctor(e.target.value) }}>
                        <option value="user1">doctor1</option>
                        <option value="user2">doctor2</option>
                    </Form.Select>
                </div>


                <div class="d-flex gap-2 mt-5">
                    <a type="button" href="/appointments" class="btn btn-primary">Back</a>
                    <button type="submit" name="submit" class="btn btn-success">Submit</button>
                </div>
            </form>
        </div>
    )
}