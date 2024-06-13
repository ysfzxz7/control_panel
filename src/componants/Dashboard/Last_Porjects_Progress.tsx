import { projectsType } from "../types"

export default function Last_Projects() {

    return (
        <div className="min-height p-2 bg-white space-y-3 rounded-lg">
            <h1 className="font-semibold  "> Last project progress</h1>
            <div>
                <ul className="relative">
                    {
                        projects.map((project) => (
                            <li className=" ml-3 flex items-center  relative border-l-4 border-b-teal-800 py-3 ">
                                <div className="w-5  h-5 rounded-full  -translate-x-[60%]    left-0  outline outline-4 outline-blue-600 outline-offset-2  absolute bg-blue-600  "></div>
                                <h1 className="ml-6 text-sm">{project.name}</h1>
                            </li>

                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

const projects: projectsType[] = [
    {
        name: 'Got the project',
        progress: 100
    },
    {
        name: 'Got the project',
        progress: 100
    },
    {
        name: 'Got the project',
        progress: 100
    },
    {
        name: 'Got the project',
        progress: 500
    },
    {
        name: 'Got the project',
        progress: 0
    },

]