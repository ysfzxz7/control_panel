import { IoIosSearch, IoMdNotifications } from "react-icons/io";
import avatar from '../assets/imgs/avatar.png'

export default function Nav() {

    return (
        <div className="w-full bg-white border border-gray-200 p-3 flex justify-between">
            <div className="relative ">
            <IoIosSearch className="absolute left-1 text-gray-600 top-[25%]" />
                <input   type="text" className="p-2 pl-6 rounded-md text-xs bg-gray-100 outline outline-1 outline-gray-200  focus:outline-blue-800 focus:outline-2" name="" placeholder="Type a Keyword" id="" />
            </div>
            <div className="flex items-center space-x-3">
                <IoMdNotifications className="" size={24} />
                <img width={30} src={avatar} alt="" />
            </div>
        </div>
    )
}