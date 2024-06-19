import {  filesType } from "../types"
import  sql  from "../../assets/imgs/sql.svg";
import  avi  from "../../assets/imgs/avi.svg";
import  dll  from "../../assets/imgs/dll.svg";
import  eps  from "../../assets/imgs/eps.svg";
import  pdf  from "../../assets/imgs/pdf.svg";
import  psd  from "../../assets/imgs/psd.svg";
import  txt  from "../../assets/imgs/txt.svg";
import  zip  from "../../assets/imgs/zip.svg";

export default function File_Card() {

    return (
        <div className=" w-full md:w-9/12 ">
            <ul className="w-full sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 grid  gap-2">
            {files.map((file, i) => (
                <li key={i} className="p-2 flex items-center flex-col justify-between bg-white rounded-md">
                    <img src={file.type} className="w-14" alt="" />
                    <h1 className="text-sm font-semibold text-gray-8">{file.name}</h1>
                    <h1 className="text-sm text-gray-600 w-full mt-5 ">{file.publisher}</h1>
                    <div className="flex w-full border-t-2 py-2 justify-between ">
                        <h1 className=" text-xs text-gray-500">{file.date}</h1>
                        <h1 className="text-xs text-gray-500">{file.size}</h1>
                    </div>
                </li>
            ))}
            </ul>
        </div>
    )
}


const files: filesType[] = [
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: pdf
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: txt,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: dll,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: sql,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: avi,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: eps,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: psd,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: zip,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: pdf
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: txt,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: dll,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: sql,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: avi,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: eps,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: psd,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: zip,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: pdf
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: txt,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: dll,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: sql,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: avi,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: eps,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: psd,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: zip,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: pdf
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: txt,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: dll,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: sql,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: avi,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: eps,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: psd,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: zip,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: pdf
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: txt,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: dll,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: sql,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: avi,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: eps,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: psd,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: zip,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: pdf
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: txt,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: dll,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: sql,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: avi,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: eps,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: psd,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: zip,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: pdf
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: txt,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: dll,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: sql,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: avi,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: eps,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: psd,
    },
    {
        name: 'my-file.pdf',
        publisher: 'Youssef jr',
        date: '20/06/2020',
        size: '5.5MB',
        type: zip,
    },
]