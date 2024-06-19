import { FaRegEye } from "react-icons/fa"
import { coursesType } from "../types"

export default function Course_Card({data}: {data: coursesType} ) {

    return (
        <div className="bg-white md:max-full">
            <div className="relative">
                <img src={data.background} alt="" />
                <img className="w-10 top-2 left-2 absolute " src={data.avatar} alt="" />
            </div>
            <div className="p-2">
                <h1>{data.title}</h1>
                <p className="text-xs mb-4">{data.description}</p>
                <div className="relative flex justify-between py-3 border-t-2">
                    <button className="absolute -translate-y-[50%] top-0 left-[25%] bg-blue-300 rounded-md text-blue-800 text-xs px-2 py-1 ">Course info</button>
                    <h1 className="text-sm text-gray-500 flex items-center justify-center gap-2"> <FaRegEye /> 950</h1>
                    <h1 className="text-sm text-gray-500">$ 165</h1>
                </div>
            </div>
        </div>
    )
}

