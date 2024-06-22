import { FaServer } from "react-icons/fa";

export default function Buckup_Manger() {

    return (
        <div className="bg-white p-2 rounded-md">
            <h1 className=" font-semibold">Buckup manger</h1>
            <p className="text-xs ">Control buckup time and location</p>

            <div className="mt-5">
                <div className="space-x-2 text-sm">
                    <input type="radio" name="" id="" />
                    <label htmlFor="daily">daily</label>
                </div>
                <div className="space-x-2 text-sm">
                    <input type="radio" name="weekly" id="" />
                    <label htmlFor="weekly">weekly</label>
                </div>
                <div className="space-x-2 text-sm">
                    <input type="radio" name="" id="" />
                    <label htmlFor="monthly">Monthly</label>
                </div>
            </div >
            <div className="flex items-center justify-between space-x-3 mt-5">
                <div className="border p-5 flex-1  flex flex-col rounded-md text-sm space-y-2  items-center">
                    <FaServer />
                    <h1>Megaman</h1>
                </div>
                <div className="border p-5 flex-1  flex flex-col rounded-md text-sm space-y-2 border-blue-700 items-center">
                    <FaServer />
                    <h1>Zero</h1>
                </div>
                <div className="border p-5 flex-1  flex flex-col rounded-md text-sm space-y-2  items-center">
                    <FaServer />
                    <h1>Sigma</h1>
                </div>
            </div>
        </div>
    )
}