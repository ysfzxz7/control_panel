import File_Card from "./File_Card";
import File_Status from "./File_Status";

export default function() {

    return (
        <div>
        <h1>files</h1>
            <div className="flex p-2 gap-2 ">
                <File_Card />
                <File_Status />
            </div>
        </div>
    )
}