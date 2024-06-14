import { FaNewspaper, FaPhone, FaSmile } from "react-icons/fa";
import { FaMessage, FaScissors } from "react-icons/fa6";

export default function() {

    return(
        <div>
            <div>
                <FaPhone />
                <FaMessage />
            </div>
            <div>
                <img src="" alt="" />
                <h1>Ahmed Enasser</h1>
                <p>JavaScript devloper</p>
            </div>
            <ul>
                <li>
                    <FaSmile />
                    <h1>99 Friends</h1>
                </li>
                <li>
                    <FaScissors />
                    <h1>15 Projects</h1>
                </li>
                <li>
                    <FaNewspaper />
                    <h1>25 Articls</h1>
                </li>
            </ul>
            <div>
                <h1>Joined 02/10/2021</h1>
                <button>Profile</button>
                <button>Remove</button>
            </div>
        </div>
    )
}