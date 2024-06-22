import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Social_Info() {
    
    return (
        <div>
            <h1>Social info</h1>
            <h5>Social media information</h5>
            <div>
                <FaTwitter />
                <h1>Twitter username</h1>
            </div>
            <div>
                <FaFacebook />
                <h1>Facebook username</h1>
            </div>
            <div>
                <FaLinkedin />
                <h1>Linkedin username</h1>
            </div>
            <div>
                <FaYoutube />
                <h1>Youtube username</h1>
            </div>
        </div>
    )
}