import { FaRegTrashAlt } from "react-icons/fa"
import { tasksType } from "../types"

export default function Latest_Tasks() {

    return (
        <div className="space-y-3 p-2 min-height rounded-lg bg-white">
            <h1 className="font-semibold">Latest Tasks</h1>
            <div>
                <ul className=" divide-y-2">
                    {
                        tasks.map((task) => (
                    <li className="flex items-center justify-between p-1">
                        <div className="">
                            <h1 className={`text-xs font-semibold ${task.done && 'text-gray-600 line-through'} `}>{task.title}</h1>
                            <h1 className={`text-xs font-light text-gray-500 ${task.done && 'line-through'} `}>{task.desc}</h1>
                        </div>
                        <div>
                            <FaRegTrashAlt />
                        </div>
                    </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

const tasks: tasksType[] = [
    {
        title: 'Record One New Vedio',
        desc: 'Record Python create Exe Project',
        done: false
    },
    {
        title: 'Write Artical',
        desc: 'Write Low Level vs high level language',
        done: false
    },
    {
        title: 'Finish Project',
        desc: 'Puplish Academy programing project',
        done: false
    },
    {
        title: 'Attend the metting',
        desc: 'Attend the project business analysis metting',
        done: true
    },
    {
        title: 'Finsh Lesson',
        desc: 'Finsh Teaching flex box',
        done: false
    }
]