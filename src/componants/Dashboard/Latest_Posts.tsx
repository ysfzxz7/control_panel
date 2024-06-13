import { CiHeart } from 'react-icons/ci'
import avatar from '../../assets/imgs/avatar.png'
import { LiaComment, LiaCommentAltSolid } from 'react-icons/lia'
export default function Latest_Post() {

    return (
        <div className='bg-white min-height flex flex-col justify-between rounded-lg p-2'>
            <h1 className="font-bold ">Latest post</h1>
            <div>
                <div className='flex justify-start space-x-3 items-center'>
                    <img className='w-14 rounded-full' src={avatar} alt="avatar" />
                    <div>
                        <h1 className=' font-bold text-sm'>Youssef Jr</h1>
                        <h1 className='text-gray-600/50 text-xs'>About 3 Hours Ago</h1>
                    </div>
                </div>
                <p className='text-sm p-5 border-y my-3 indent-3'>You can fool all of the people some of the time, and some of the people
                    all of the time, But you can't fool all tof the people all of the time
                </p>
                <div className='flex justify-between'>
                    <h1 className='text-gray-600 text-xs flex items-center gap-1'> <CiHeart size={16}/> 1.8K</h1>
                    <h1 className='text-gray-600 text-xs flex items-center gap-1'> <LiaCommentAltSolid size={16} /> 500</h1>
                </div>
            </div>
        </div>
    )
}