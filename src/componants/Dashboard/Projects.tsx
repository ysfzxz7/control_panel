import { tableTypes } from "../types"

export default function Projects() {
    const bg_color = (status: string) =>{
        if (status == 'Pending') return 'bg-yellow-200/50 p-1 rounded text-yellow-800'
        if (status == 'Progress') return 'bg-blue-200/50 p-1 rounded text-blue-800'
        if (status == 'Completed') return 'bg-green-400/50 p-1 rounded text-green-800'
        if (status == 'Rejected') return 'bg-red-200/50 p-1 rounded text-red-800'
    }

    return (
        <div className="w-full mt-5 ">
            <h1 className="text-sm font-bold mb-2">Projects</h1>
            <div>
                <table className="border   rounded w-full">
                    <thead className="font-medium text-sm bg-white border-b-2 ">
                        <tr>
                            <th className=" p-2 text-start tracking-wide">name</th>
                            <th className=" p-2 text-start tracking-wide">Finish date</th>
                            <th className=" p-2 text-start tracking-wide">Client</th>
                            <th className=" p-2 text-start tracking-wide">Price</th>
                            <th className=" p-2 text-start tracking-wide">Team</th>
                            <th className=" p-2 text-start tracking-wide">status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            projects.map((item,i) => (
                                <tr className={` ${i % 2 == 0 ? 'bg-white' : 'bg-gray-100'} cursor-pointer `} >
                                    <td className="p-3 border-x text-xs font-semibold w-5 md:w-48"><span className="line-clamp-1 hover:underline transition-all duration-200 cursor-pointer">{item.name}</span></td>
                                    <td className="p-3 border-x  text-xs font-semibold"><span className="line-clamp-1">{item.finish_date}</span></td>
                                    <td className="p-3 w-3 border-x  text-xs font-semibold">{item.client}</td>
                                    <td className="p-3 border-x text-xs w-3 font-semibold">${item.price}</td>
                                    <td className="p-3 border-x  text-xs font-semibold">{item.team}</td>
                                    <td className={` p-2  border-x text-xs font-semibold`}> <span className={` ${bg_color(item.status)}  text-xs`}>{item.status}</span></td>
                                </tr>
                            ))
                        }
                      </tbody>

                </table>
            </div>
        </div>
    )
}


const projects : tableTypes[] = [
    {
        name: 'Minstry Wekipedia', 
        finish_date: '10 May 2022',
        client: 'Minstry',
        price: 5300,
        team: 'team',
        status: 'Pending'
    },
    {
        name: 'Minstry Wekipedia', 
        finish_date: '10 May 2022',
        client: 'Minstry',
        price: 1200,
        team: 'team',
        status: 'Progress'
    },
    {
        name: 'Minstry Wekipedia', 
        finish_date: '10 May 2022',
        client: 'Minstry',
        price: 1600,
        team: 'team',
        status: 'Progress'
    },
    {
        name: 'Minstry Wekipedia', 
        finish_date: '10 May 2022',
        client: 'Minstry',
        price: 7500,
        team: 'team',
        status: 'Rejected'
    },
    {
        name: 'Minstry Wekipedia', 
        finish_date: '10 May 2022',
        client: 'Minstry',
        price: 1100,
        team: 'team',
        status: 'Progress'
    },
    {
        name: 'Minstry Wekipedia', 
        finish_date: '10 May 2022',
        client: 'Minstry',
        price: 12500,
        team: 'team',
        status: 'Progress'
    },
    {
        name: 'Minstry Wekipedia', 
        finish_date: '10 May 2022',
        client: 'Minstry',
        price: 900,
        team: 'team',
        status: 'Progress'
    },
    {
        name: 'Minstry Wekipedia', 
        finish_date: '10 May 2022',
        client: 'Minstry',
        price: 999,
        team: 'team',
        status: 'Completed'
    }
]