import Welcome from "./Welcome";

export default function _Dashboard() {

    return (
        <div className="">
            <h1>DashBoard</h1>
            <div className="grid p-2 lg:grid-cols-3">
            <Welcome />
            </div>
        </div>
    )
}