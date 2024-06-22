import Buckup_Manger from "./Buckup_Manger";
import General_info from "./Gerneral_Info";
import Security_info from "./Security_Info";
import Site_Control from "./Site_Control";
import Social_Info from "./Social_Info";
import Widget_control from "./Widget_Control";

export default function _Settings(){

    return (
        <div className="p-2">
            <h1>Settings</h1>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                <Site_Control />
                <General_info />
                <Security_info />
                <Social_Info />
                <Widget_control />
                <Buckup_Manger />
            </div>
        </div>
    )
}