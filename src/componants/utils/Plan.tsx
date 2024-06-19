import { CiCircleInfo } from "react-icons/ci";
import { plansType } from "../types";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";



export default function Plan({data}:{data: plansType}) {

    return (
        <div className="border p-3">
            <div className={`flex flex-col items-center p-5 ${get_color(data.title)} text-white font-bold border-white border-4 outline outline-4 outline-green-500`}>
                <h1>{data.title}</h1>
                <h1>$ {data.price}</h1>
            </div>
            <div className="">
               <ul className=" ">
                <li className="flex justify-between items-center p-3 border-b-2 text-sm ">
                    {get_status(data.access_text)}
                    <h1>Access All text Lesson</h1>
                    <CiCircleInfo />
                </li>
                <li className="flex justify-between items-center p-3 border-b-2 text-sm">
                {get_status(data.access_vedios)}
                    <h1>Access All vedios</h1>
                    <CiCircleInfo />
                </li>
                <li className="flex justify-between items-center p-3 border-b-2 text-sm">
                {get_status(data.access_LeaderBoard)}
                    <h1>Appear on LeaderBoard</h1>
                    <CiCircleInfo />
                </li>
                <li className="flex justify-between items-center p-3 border-b-2 text-sm">
                {get_status(data.Ads)}
                    <h1>Browse content without ads</h1>
                    <CiCircleInfo />
                </li>
                <li className="flex justify-between items-center p-3 border-b-2 text-sm">
                {get_status(data.access_Assignment)}
                    <h1>Access all assignment</h1>
                    <CiCircleInfo />
                </li>
                <li className="flex justify-between items-center p-3 border-b-2 text-sm">
                {get_status(data.daily_Prizes)}
                    <h1>Get daily prizes</h1>
                    <CiCircleInfo />
                </li>
                <li className="flex justify-between items-center p-3 border-b-2 text-sm">
                {get_status(data.certificate)}
                    <h1>Earn certificate</h1>
                    <CiCircleInfo />
                </li>
                <li className="flex justify-between items-center p-3 border-b-2 text-sm">
                {get_status(data.gb_Hosting)}
                    <h1>1GB space for hosting</h1>
                    <CiCircleInfo />
                </li>
                <li className="flex justify-between items-center p-3 border-b-2 text-sm">
                {get_status(data.access_badge_System)}
                    <h1>Access badge system</h1>
                    <CiCircleInfo />
                </li>
               </ul>
            </div>
            <button className={`${get_color(data.title)} rounded-sm text-xs text-white px-4 py-1 mt-2`}>Join</button>
        </div>
    )
}

const get_status = (type: boolean)=>{
    return type === true ? <FaCheck color="green" /> : <IoClose color="red" size={20} />
}
const get_color = (type: string)=>{
    return type === 'Free' ? 'bg-green-500' : type === 'basic' ? 'bg-blue-500' : 'bg-orange-500';
}