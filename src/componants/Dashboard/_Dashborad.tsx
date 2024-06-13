import Latest_Post from "./Latest_Posts";
import Quick_draft from "./Quick_Draft";
import Reminders from "./Reaminders";
import Social_Media_Stats from "./Social_Media_Stats";
import Top_Searced from "./Top_Search_Words";
import Welcome from "./Welcome";

export default function _Dashboard() {

    return (
        <div className="">
            <h1>DashBoard</h1>
            <div className="grid p-2 gap-2 lg:grid-cols-3 md:grid-cols-2">
            <Welcome />
            <Quick_draft />
            <Top_Searced />
            <Reminders />
            <Social_Media_Stats />
            <Latest_Post />
            </div>
        </div>
    )
}