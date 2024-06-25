import { FaStar } from 'react-icons/fa';
import avater from '../../assets/imgs/avatar.png'
import { IoToggleSharp } from 'react-icons/io5';
export default function Details() {

    return (
        <div className='sm:flex sm:flex-row py-1 flex flex-col items-center justify-center bg-white sm:p-2'>
            <div className='w-2/12 flex flex-col items-center justify-between'>
                <img className='w-20' src={avater} alt="" />
                <h1 className='font-semibold'>Youssef jr</h1>
                <h1 className='text-xs text-gray-500'>Level 20</h1>
                <div className='h-1 bg-blue-200 w-32 rounded'>
                    <div className='w-8/12 h-1 bg-blue-800 rounded'></div>
                </div>
                <div className='flex'>
                    {
                        statrs.map((star)=> (
                            <div key={star}>
                                <FaStar  color='yellow' />
                            </div>
                        ))
                    }
                </div>
                <h5 className='text-xs text-gray-500'>550 Rating</h5>
            </div>
            <div className='sm:w-10/12 '>
                <ul className=' border-none sm:border-l-2 space-y-2 space-x-2'>
                    <li  className='border-b-2 ml-2'>
                        <h1 className='text-xs text-gray-500'>General information</h1>
                        <div className='flex items-center justify-between '>
                            <h1 className='text-xs'><span className='text-xs text-gray-500'>Full name:</span> youssef jr</h1>
                            <h1 className='text-xs'><span className='text-xs text-gray-500'>Gender:</span> Male</h1>
                            <h1 className='text-xs'><span className='text-xs text-gray-500'>Country:</span>  Egypt</h1>
                            <IoToggleSharp size={24} color='blue' />
                        </div>
                    </li>
                    <li  className='border-b-2 '>
                        <h1 className='text-xs text-gray-500'>personal information</h1>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-xs'><span className='text-xs text-gray-500'>Email:</span> youssef@gmail.com</h1>
                            <h1 className='text-xs'><span className='text-xs text-gray-500'>Phone:</span> +2126-82763461</h1>
                            <h1 className='text-xs'><span className='text-xs text-gray-500'>Birthday:</span>05/09/1996</h1>
                            <IoToggleSharp size={24} color='blue' />
                        </div>
                    </li>
                    <li  className='border-b-2'>
                        <h1 className='text-xs text-gray-500'>Job information</h1>
                        <div className='flex items-start justify-between'>
                            <h1 className='text-xs'><span className='text-xs text-gray-500'>Title:</span>FullStack devloper</h1>
                            <h1 className='text-xs'><span className='text-xs text-gray-500'>Programming language:</span>Python</h1>
                            <h1 className='text-xs'><span className='text-xs text-gray-500'>Years of experience:</span> +15</h1>
                            <IoToggleSharp size={24} color='blue' />
                        </div>
                    </li>
                    <li  className=''>
                        <h1 className='text-xs text-gray-500'>billing information</h1>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-xs'><span className='text-xs text-gray-500'>Payment method:</span>Paypal</h1>
                            <h1 className='text-xs'><span className='text-xs text-gray-500'>Email:</span> youssef@work.com</h1>
                            <h1 className='text-xs'><span className='text-xs text-gray-500'>Subscription:</span>Monthly</h1>
                            <IoToggleSharp size={24} color='blue' />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

const statrs: number[] = [0,1,2,3,4];