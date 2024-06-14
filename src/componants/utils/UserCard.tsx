import { FaNewspaper, FaPhone, FaRegSmile } from "react-icons/fa";
import { FaScissors } from "react-icons/fa6";
import { friendsType } from "../types";
import { FiMessageCircle } from "react-icons/fi";
import friend_01 from "../../assets/imgs/friend-01.jpg"



export default function UserCard({data}:{data: friendsType}){
    const {name, bio, articls, friends, joined, projects, vip} = data;
    return(
        <div className="border bg-white rounded:sm p-2 transition-all duration-700 hover:bg-gray-100/50">
            <div className="flex gap-3">
                <FaPhone   className="bg-gray-100 h-8 w-8 p-2  rounded-full" color="blue"  size={24}/>
                <FiMessageCircle className="bg-gray-100 h-8 w-8 p-2  rounded-full" color="blue" size={24}/>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div>
                    <img className="w-24 rounded-full hover:-rotate-12 transition-all duration-500" src={friend_01} alt={`${vip}`} />
                </div>
                <div>
                    <img src="" alt="" />
                    <h1 className="font-bold text-sm text-center my-2">{name}</h1>
                    <p className="text-gray-400">{bio}</p>
                </div>
            </div>
            <ul className="border-y p-3 relative">
                <div className={`absolute right-0 text-2xl text-yellow-500/50 rotate-12 bottom-[30%] ${vip ? 'visible' : 'hidden'} `}>VIP</div>
                <li className="flex gap-3 items-center">
                    <FaRegSmile color="gray" />
                    <h1 className="text-sm font-semibold">{friends} <span className="font-medium">Friends</span></h1>
                </li>
                <li className="flex gap-3 items-center">
                    <FaScissors  color="gray"/>
                    <h1 className="text-sm font-semibold">{projects} <span className="font-medium">Projects</span></h1>
                </li>
                <li className="flex gap-3 items-center">
                    <FaNewspaper color="gray" />
                    <h1 className="text-sm font-semibold"> {articls} <span className="font-medium">Articles</span></h1>
                </li>
            </ul>
            <div className="flex items-center mt-3">
                <h1 className="text-xs line-clamp-1 font-bold flex-1">Joined {joined}</h1>
                <button className="text-sm font-normal hover:bg-blue-700 transition-all duration-300 mr-2 bg-blue-500 text-white px-2 py-1 rounded-md">Profile</button>
                <button className="text-sm font-normal hover:bg-red-700 transition-all duration-300 bg-red-500 text-white px-2 py-1 rounded-md">Remove</button>
            </div>
        </div>
    )
}