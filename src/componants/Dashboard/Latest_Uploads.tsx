import { uploadType } from "../types"
import pdf from "../../assets/imgs/pdf.svg";
import dll from "../../assets/imgs/dll.svg";
import avi from "../../assets/imgs/avi.svg";
import psd from "../../assets/imgs/psd.svg";
import zip from "../../assets/imgs/zip.svg";
export default function Latest_upLoad() {

    return (
        <div className="min-height p-2 bg-white rounded-lg space-y-3">
            <h1>Latest Uploads</h1>
            <div>
                <ul className="space-y-2"> 
                    {uploads?.map((file) => (
                        <li className="flex items-center"> 
                            <img className="w-6" src={file.img} alt={file.img} />
                            <div className="flex-1 mx-2">
                                <h1 className="text-sm">{file.name}</h1>
                                <h1 className="text-xs text-gray-400">{file.author}</h1>
                            </div>
                            <h1 className="bg-gray-100 border text-xs px-2 py-1 rounded-lg">{file.space} mb</h1>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}


const uploads: uploadType[] = [
    {
        name: 'my-file.pdf',
        author: 'Youssef jr',
        space: 2.9,
        img: pdf
    },
    {
        name: 'my-file.avi',
        author: 'User',
        space: 2.9,
        img: avi
    },
    {
        name: 'my-file.dll',
        author: 'Admin',
        space: 5.4,
        img: dll
    },
    {
        name: 'my-file.psd',
        author: 'Desginer',
        space: 8.9,
        img: psd
    },
    {
        name: 'my-file.zip',
        author: 'Majid',
        space: 11.2,
        img: zip
    }
]