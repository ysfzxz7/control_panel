import { linkType } from "./types"

import { FaFileAlt, FaRegCreditCard, FaRegUser, FaUserFriends } from "react-icons/fa"
import { IoGitNetwork } from "react-icons/io5"
import { PiStudentBold } from "react-icons/pi"
import { IoMdSettings } from "react-icons/io"
import { MdSpaceDashboard } from "react-icons/md"
import { Link } from "react-router-dom"


export default function Aside() {

    return (
        <div className="h-screen sticky top-0 bg-white shadow-md w-1/12 lg:w-2/12 ">
            <div className="flex justify-center py-5">
            <h1 className="text-2xl hidden lg:block">Youssef</h1>
            <h1 className="text-base h-5 w-5 p-4 flex items-center justify-center lg:hidden bg-slate-100 text-blue-900 rounded-full">Y</h1>
            </div>
            <div>
                <ul className=" space-y-2 flex flex-col ">
                {
                    links.map((ele) =>(
                        <Link to={ele.link}>
                            <li className="flex p-2 px-4  justify-center lg:justify-start lg:w-full hover:translate-x-3  transition-all duration-300 cursor-pointer">
                            <div>{ele.icone}</div>
                            <h1 className="ml-2 hidden lg:block text-sm ">{ele.name}</h1>
                        </li>
                        </Link>
                    ))
                }
                </ul>
            </div>
            
        </div>
    )
}



const links: linkType[] = [
    {
        name : 'Dashboard',
        icone : <MdSpaceDashboard className="" size={20}/>,
        link : '/'
    },
    {
        name : 'Settings',
        icone : <IoMdSettings size={20}/>,
        link : '/setting'
    },
    {
        name : 'Profile',
        icone : <FaRegUser size={20} />,
        link : '/profile'
    },
    {
        name : 'Projects',
        icone : <IoGitNetwork size={20}/>,
        link : '/projects'
    },
    {
        name : 'Courses',
        icone : <PiStudentBold size={20}/>,
        link : '/courses'
    },
    {
        name : 'Friends',
        icone : <FaUserFriends size={20}/>,
        link : '/friends'
    },
    {
        name : 'Files',
        icone : <FaFileAlt size={20}/>,
        link : '/files'
    },
    {
        name : 'Plans',
        icone : <FaRegCreditCard size={20}/>,
        link : '/plans'
    }

]

