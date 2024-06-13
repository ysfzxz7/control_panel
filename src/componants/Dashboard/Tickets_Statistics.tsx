import { FaListCheck } from "react-icons/fa6"
import { ticketsType } from "../types"
import { FaRegCheckCircle, FaRegWindowClose } from "react-icons/fa"
import { LuLoader } from "react-icons/lu"


export default function Tickets () {
    
    return (
        <div className="min-height p-2 space-y-3 rounded-lg bg-white">
            <h1 className="font-semibold">Tickets Statistics </h1>
            <p className="text-sm text-gray-600">Everyting about support tickets</p>
            <div className="grid grid-cols-2 gap-3">
                {
                    tickets.map((ticket) => (
                        <div className="border rounded-md flex flex-col items-center space-y-2 p-2">
                            {ticket.icone}
                            <h1 className="font-semibold">{ticket.total}</h1>
                            <h1 className="text-xs bg-gray-200/80 border px-2 rounded text-gray-700">{ticket.tag}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


const tickets: ticketsType[] = [
    {
        total: 2500,
        icone: <FaListCheck color="green" />,
        tag : 'Total'
    },
    {
        total: 500,
        icone: <LuLoader color="blue" />,
        tag : 'Pending'
    },
    {
        total: 1900,
        icone: <FaRegCheckCircle color="orange" />,
        tag : 'Closed'
    },
    {
        total: 100,
        icone: <FaRegWindowClose color="red"/>,
        tag : 'Deleted'
    }
]