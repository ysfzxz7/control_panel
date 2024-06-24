
export default function Skills() {

    return (
        <div className="bg-white rounded-md p-2">
            <h1>My Skills</h1>
            <p>Complete skills list</p>
            <div>
                <ul className="space-y-3 divide-y-2">
                    {
                        skills.map((element, i) => (
                            <li className="flex space-x-2 pt-2" id={String(i)}>
                                {
                                    element.map((skill) => (
                                        <h1 className="bg-gray-300 text-xs px-2 py-1 rounded-md ">{skill}</h1>
                                    ))
                                }
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

const skills: string[][] = [
        ['HTML', 'PugJS','HAMIL'],
        ['CSS', 'SASS','StyleCSS'],
        ['JavaScript','TypeScript'],
        ['VueScript', 'REACT',],
        ['Jest','Jassmine'],
        ['PHP', 'Laravel'],
        ['Python', 'Django'],
]