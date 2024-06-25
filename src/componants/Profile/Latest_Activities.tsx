import { activitiesType } from "../types";
import activity01  from "../../assets/imgs/activity-01.png";
import activity02  from "../../assets/imgs/activity-02.png";
import activity03  from "../../assets/imgs/activity-03.png";


export default function() {

    return (
        <div className="bg-white rounded-md p-2">
            <h1 className="font-semibold">Latest activities</h1>
            <h1 className="text-gray-800">Latest activities done by one</h1>
            <div>
                <ul className="divide-y-2">
                    {
                        activities.map((activitie) => (
                            <li className="flex gap-3 p-2">
                                <img className="w-14" src={activitie.logo} alt="" />
                                <div className="flex-1">
                                    <h1>{activitie.title}</h1>
                                    <h1 className="text-gray-600 text-xs">{activitie.description}</h1>
                                </div>
                                <div>
                                    <h1>{activitie.time}</h1>
                                    <h1 className="text-gray-600 text-xs">{activitie.date}</h1>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}


const activities: activitiesType[] = [
    {
        logo: activity01,
        date: 'yesterday',
        description: 'Bought the mastering pythonn course',
        title: 'Store',
        time: '18:00'
    },
    {
        logo: activity03,
        date: 'yesterday',
        description: 'Bought the mastering pythonn course',
        title: 'Store',
        time: '21:45'
    },
    {
        logo: activity02,
        date: 'yesterday',
        description: 'Bought the mastering pythonn course',
        title: 'Store',
        time: '12:00'
    },
    {
        logo: activity01,
        date: 'yesterday',
        description: 'Bought the mastering pythonn course',
        title: 'Store',
        time: '07:00'
    },
]