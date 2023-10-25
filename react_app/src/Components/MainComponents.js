
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

export function DoctorCard(params) {
    return (
        <div class="doctor-card">
            {/* <img src= */}
        </div>
    )
}

