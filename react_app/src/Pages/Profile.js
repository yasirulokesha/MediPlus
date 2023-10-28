import Navigation from "../Components/Navigation";
import background from '../Assests/background.png'

export default function Profile(params) {
    return (
        <div>
            <Navigation />
            <div class="container">
                <div className="row">
                    <div className="profile-wrap" style={{ backgroundImage: `url(${background})` }}>
                        <div className="profile-details">
                            <h2>Patient ID </h2>
                            <p>1002</p>

                            <div className="row">
                                <div className="topic col-5" >
                                    Username
                                </div>
                                <div className="col-2">
                                    User1
                                </div>
                            </div>
                            <div className="row">
                                <div className="topic col-5" >
                                    Gender
                                </div>
                                <div className="col-2">
                                    Female
                                </div>
                            </div>
                            <div className="row">
                                <div className="topic col-5" >
                                    Age
                                </div>
                                <div className="col-2">
                                    30
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="topic col-5" >
                                    Total Appointments
                                </div>
                                <div className="col-2">
                                    10
                                </div>
                            </div>
                            <div className="row">
                                <div className="topic col-5" >
                                    Active
                                </div>
                                <div className="col-2">
                                    2
                                </div>
                            </div>
                            <a href="/create" class="btn btn-primary mt-4">Create Appointment</a>
                            <br />
                            <button class="btn btn-danger mt-4">Log out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}