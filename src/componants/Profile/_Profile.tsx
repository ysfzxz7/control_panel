import Details from "./Details";
import Latest_Activities from "./Latest_Activities";
import Skills from "./Skills";

export default function _Profile() {

    return (
        <div className="p-2">
            <h1>Profile</h1>
            <Details />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                <Skills />
                <Latest_Activities />
            </div>
        </div>
    )
}