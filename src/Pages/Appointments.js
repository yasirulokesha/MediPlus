import { AppointmentBar } from "../Components/MainComponents";
import Navigation from "../Components/Navigation";

export default function Appointments() {
    return (
        <div>
            <Navigation />
            <div class="container">
                <h1>Appointments</h1>
                <p>This is where you can view and manage your appointments.</p>
                <AppointmentBar id="1102" doctor="Dr.Nawariyan" date="12 sept" status="Inquired"/>
                <AppointmentBar id="1102" doctor="Dr.Nawariyan" date="12 sept" status="Inquired"/>
                <AppointmentBar id="1102" doctor="Dr.Nawariyan" date="12 sept" status="Inquired"/>
                <AppointmentBar id="1102" doctor="Dr.Nawariyan" date="12 sept" status="Inquired"/>
            </div>
        </div>
    )
}