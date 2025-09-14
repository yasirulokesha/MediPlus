import { DoctorCard } from "../Components/MainComponents";
import Navigation from "../Components/Navigation";

import photo from '../Assests/DrSample.jpg'


export default function Doctors() {
    return (
        <div>
            <Navigation />
            <div class="container">
                <h1 className="m-5">Doctors</h1>
                <div className="d-flex flex-wrap justify-content-evenly row g-5">
                    <DoctorCard src={photo} name="Nawariyan" speciality="Cardiologist" experience="5" age="30" />
                    <DoctorCard src={photo} name="Nawariyan" speciality="Cardiologist" experience="5" age="30" />
                    <DoctorCard src={photo} name="Nawariyan" speciality="Cardiologist" experience="5" age="30" />
                    <DoctorCard src={photo} name="Nawariyan" speciality="Cardiologist" experience="5" age="30" />
                    <DoctorCard src={photo} name="Nawariyan" speciality="Cardiologist" experience="5" age="30" />
                    <DoctorCard src={photo} name="Nawariyan" speciality="Cardiologist" experience="5" age="30" />
                    <DoctorCard src={photo} name="Nawariyan" speciality="Cardiologist" experience="5" age="30" />
                    <DoctorCard src={photo} name="Nawariyan" speciality="Cardiologist" experience="5" age="30" />
                    <DoctorCard src={photo} name="Nawariyan" speciality="Cardiologist" experience="5" age="30" />
                    <DoctorCard src={photo} name="Nawariyan" speciality="Cardiologist" experience="5" age="30" />
                </div>
            </div>
        </div>
    )
}