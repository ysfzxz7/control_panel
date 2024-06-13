import { FaDollarSign, FaUser } from "react-icons/fa"
import { VscDebugConsole } from "react-icons/vsc"
import { targetTypes } from "../types"

export default function Yearly_target() {

    return (
        <div className="bg-white p-2 space-y-3">
            <h1 className="text-sm font-semibold">Yearly target</h1>
            <h1 className="text-xs text-gray-700">Target of the year</h1>
            <div>
                <ul className=" space-y-3">
                    {
                        targets.map((target) => (
                    <li className="bg-gray-100  w-full flex items-center">
                        <div className="bg-blue-500 block mr-2 p-5">
                        {target.icone}
                        </div>
                        <div className="flex-1">
                            <h1 className="text-sm font-semibold">{target.name}</h1>
                            <h1 className="text-xs">${target.amount}</h1>
                            <div className="bg-blue-100 relative">
                                <h1 className={`absolute bottom-2 left-[${target.progress}%] bg-fuchsia-400 text-white font-semibold px-1 rounded text-xs`}>{target.progress}</h1>
                                <hr className={`bg-blue-500 h-1 w-[${target.progress}%]`}/>
                            </div>
                        </div>
                    </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

const targets: targetTypes[] = [
    {
        name: 'Money',
         amount: 20000,
        progress: 50,
        icone: <FaDollarSign  color="white" size={24} />,
    },
    {
        name: 'Projects',
        amount: 24,
        progress: 80,
        icone: <VscDebugConsole  color="white" size={24} />,
    },
    {
        name: 'Team',
        amount: 12,
        progress: 20,
        icone: <FaUser color="white" size={24}  />,
    }
]