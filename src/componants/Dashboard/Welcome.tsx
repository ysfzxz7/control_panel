import  welcome  from "../../assets/imgs/welcome.png";
import  avatar  from "../../assets/imgs/avatar.png";

export default function Welcome() {

    return (
        <div className="rounded-lg border bg-white">
            <div className="flex justify-between p-3 relative bg-gray-200 rounded-t-lg ">
                <div>
                    <h1 className="font-bold text-lg">Welcome</h1>
                    <h1 className="text-xs text-gray-400">Youssef JR</h1>
                </div>
                <img className="w-48" src={welcome} alt="" />
                <img className="absolute w-14 bottom-0 translate-y-[50%] border-4 border-gray-100 rounded-full" src={avatar} alt="" />
            </div>
            <div className="p-2 mt-10 border-y py-3 ">
                <ul className="flex justify-between">
                    <li>
                        <h1>Youssef JR</h1>
                        <h1 className="text-xs text-gray-400">Devloper</h1>
                    </li>
                    <li>
                        <h1>80</h1>
                        <h1 className="text-xs text-gray-400">Project</h1>
                    </li>
                    <li>
                        <h1>$8500</h1>
                        <h1 className="text-xs text-gray-400">Earned</h1>
                    </li>
                </ul>
            </div>
            <div className="flex justify-end mt-2 p-2">
            <button className="bg-fuchsia-500 px-3 py-1 rounded font-bold text-white text-sm ">Profile</button>
            </div>
        </div>
    )
}