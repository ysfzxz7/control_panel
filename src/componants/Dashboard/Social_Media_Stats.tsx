import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"
import { social_media } from "../types"

export default function Social_Media_Stats() {

    return (
        <div className="min-height p-2 bg-white rounded-lg">
            <h1 className="mb-4">Social Media States</h1>
            <ul className="flex flex-col justify-between h-[80%]">
                {
                    social_links.map((link) => (
                        <li className="flex ">
                            <div className={`${link.color} flex items-center justify-center p-2 `}>
                            {link.icone}
                            </div>
                            <div className={`flex justify-between items-center w-full p-2 ${link.icone_color}`}>
                            <h1 className="text-sm">{link.number}</h1>
                            <button className={`bg-red-400 px-3 py-1 rounded-lg  ${link.color} text-white text-xs`}>{link.button}</button>
                            </div>
                        </li>

                    ))
                }
            </ul>
        </div>
    )
}


const social_links: social_media[] = [
    {
        icone: <FaTwitter color="white" size={28} />,
        number: '90K Followrs',
        button: 'Follow',
        color: 'bg-blue-300',
        icone_color: 'bg-blue-100'
    },
    {
        icone: <FaFacebook color="white" size={28} />,
        number: '2M Like',
        button: 'Like',
        color: 'bg-fuchsia-500',
        icone_color: 'bg-fuchsia-300/50'
    },
    {
        icone: <FaYoutube color="white" size={28} />,
        number: '1M Subs',
        button: 'Subscribe',
        color: 'bg-red-500',
        icone_color: 'bg-red-200'
    },
    {
        icone: <FaLinkedin color="white" size={28} />,
        number: '70K Followers',
        button: 'Follow',
        color: 'bg-purple-500',
        icone_color: 'bg-purple-300'
    }
]