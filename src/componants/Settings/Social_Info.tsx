import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Social_Info() {
    
    return (
        <div className="bg-white rounded-md  p-2">
            <h1 className="font-semibold">Social info</h1>
            <h5 className="text-xs text-gray-700 mb-5">Social media information</h5>
            <div className="border flex divide-x-2  items-center rounded-md space-x-2 mt-2">
                <FaTwitter className="ml-2" />
                <h1 className="text-xs ml-2 p-2">Twitter username</h1>
            </div>
            <div className="border flex  divide-x-2 items-center rounded-md space-x-2 mt-2">
                <FaFacebook className="ml-2" />
                <h1 className="text-xs ml-2 p-2">Facebook username</h1>
            </div>
            <div className="border flex  divide-x-2 items-center rounded-md space-x-2 mt-2">
                <FaLinkedin className="ml-2" />
                <h1 className="text-xs ml-2 p-2">Linkedin username</h1>
            </div>
            <div className="border flex divide-x-2  items-center rounded-md space-x-2 mt-2">
                <FaYoutube className="ml-2" />
                <h1 className="text-xs ml-2 p-2">Youtube username</h1>
            </div>
        </div>
    )
}