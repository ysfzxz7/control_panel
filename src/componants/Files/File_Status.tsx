import pdf from '../../assets/imgs/pdf.svg'
import img from '../../assets/imgs/png.svg'
import word from '../../assets/imgs/txt.svg'
import csv from '../../assets/imgs/psd.svg'

export default function File_Status() {

    return (
        <div className='bg-white p-2 w-3/12 h-fit rounded-md hidden md:block sticky top-[70px] '>
            <h1 className='font-bold mb-2'>File Statistics</h1>
            <div >
                <ul className='space-y-2'>
                    <li className=" border p-2 flex items-center text-xs">
                        <img  className='w-10 p-3 bg-blue-100 mr-2' src={pdf} alt="" />
                        <div className="flex-1">
                            <h1 className='font-bold'>PDF Files</h1>
                            <h1 className='text-gray-500'>130</h1>
                        </div>
                        <h1 className='text-gray-600'>6.5GB</h1>
                    </li>
                    <li className=" border p-2 flex items-center text-xs">
                        <img  className='w-10 p-3 bg-blue-100 mr-2' src={img} alt="" />
                        <div className="flex-1">
                            <h1 className='font-bold'>Images</h1>
                            <h1 className='text-gray-500'>130</h1>
                        </div>
                        <h1 className='text-gray-600'>6.5GB</h1>
                    </li>
                    <li className=" border p-2 flex items-center text-xs">
                        <img  className='w-10 p-3 bg-blue-100 mr-2' src={word} alt="" />
                        <div className="flex-1">
                            <h1 className='font-bold'>Word Files</h1>
                            <h1 className='text-gray-500'>130</h1>
                        </div>
                        <h1 className='text-gray-600'>6.5GB</h1>
                    </li>
                    <li className=" border p-2 flex items-center text-xs">
                        <img  className='w-10 p-3 bg-blue-100 mr-2' src={csv} alt="" />
                        <div className="flex-1">
                            <h1 className='font-bold'>SCV Files</h1>
                            <h1 className='text-gray-500'>130</h1>
                        </div>
                        <h1 className='text-gray-600'>6.5GB</h1>
                    </li>
                    
                </ul>
            </div>
            <button className='bg-blue-700 text-white text-sm px-3 py-2 font-bold mt-2'>Upload</button>
        </div>
    )
}