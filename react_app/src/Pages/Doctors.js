import { DoctorCard } from "../Components/MainComponents";
import Navigation from "../Components/Navigation";


export default function Doctors() {
    return (
        <div>
            <Navigation />
            <div class="container">
                <h1 className="m-5">Doctors</h1>
                <DoctorCard />
            </div>
        </div>
    )
}