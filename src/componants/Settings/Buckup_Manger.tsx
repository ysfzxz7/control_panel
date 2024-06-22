import { FaServer } from "react-icons/fa";

export default function Buckup_Manger() {

    return (
        <div>
            <h1>Buckup manger</h1>
            <p>Control buckup time and location</p>

            <div>
                <div>
                    <label htmlFor="daily">daily</label>
                    <input type="radio" name="" id="" />
                </div>
                <div>
                    <label htmlFor="weekly">weekly</label>
                    <input type="radio" name="weekly" id="" />
                </div>
                <div>
                    <label htmlFor="monthly">Monthly</label>
                    <input type="radio" name="" id="" />
                </div>
            </div>
            <div>
                <div>
                    <FaServer />
                    <h1>Megaman</h1>
                </div>
                <div>
                    <FaServer />
                    <h1>Zero</h1>
                </div>
                <div>
                    <FaServer />
                    <h1>Sigma</h1>
                </div>
            </div>
        </div>
    )
}