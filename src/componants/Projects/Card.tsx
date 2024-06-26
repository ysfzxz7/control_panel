import friend_1 from '../../assets/imgs/friend-01.jpg'
import friend_2 from '../../assets/imgs/friend-02.jpg'
import friend_3 from '../../assets/imgs/friend-03.jpg'
import friend_4 from '../../assets/imgs/friend-04.jpg'
import friend_5 from '../../assets/imgs/friend-05.jpg'
import { projectsTYpe } from "../types";

export default function Card() {

    return (
        
            <ul className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 '>
                {
                    projects.map((project) =>(
                        <li className='border bg-white p-2 overflow-hidden'>
                            <div className='relative my-4'>
                                <h1 className='absolute right-0 text-xs'>{project.date}</h1>
                                <h1 className='text-sm'>{project.title}</h1>
                                <h1 className='text-xs text-gray-500'>{project.desc}</h1>
                            </div>
                            <div className='flex relative my-4'>
                                {project.praticapant.map((person, i)=>(
                                    <div>
                                        <img className={`w-8 rounded-full -translate-x-${i*2} border-2 border-white`} src={person} alt="" />
                                        
                                    </div>
                                ))}
                            </div>
                            <div className='flex justify-end space-x-2  border-y-2 p-2'>
                                {project.tags.map((tag) => (
                                    <h1 className='text-xs bg-gray-300  px-1   rounded-md '>{tag}</h1>
                                ))}
                            </div>
                            <div className=' mt-2 flex items-center justify-between'>
                                <div className='w-6/12 h-2 bg-red-400 rounded'><div className={`w-[${project.prog}] h-2 bg-red-800 rounded`}></div></div>
                                <h1 className='text-xs '>${project.amount}</h1>
                            </div>

                        </li>
                    ))
                }
            </ul>
    )
}

const projects: projectsTYpe[] = [
    {
        title: 'Youssef Dashboard',
        desc: 'Youssef dashboard project design and programming and hosting',
        date: '15/10/2021',
        amount: 2500,
        prog: '50%',
        praticapant : [friend_1, friend_2, friend_3, friend_4],
        tags: ['programing', 'design', 'hosting', 'marketing'],
    },
    {
        title: 'Youssef Dashboard',
        desc: 'Youssef dashboard project design and programming and hosting',
        date: '15/10/2021',
        amount: 2500,
        prog: '50%',
        praticapant : [friend_1, friend_2],
        tags: ['programing', 'design', 'hosting', 'marketing'],
    },
    {
        title: 'Youssef Dashboard',
        desc: 'Youssef dashboard project design and programming and hosting',
        date: '15/10/2021',
        amount: 2500,
        prog: '50%',
        praticapant : [friend_1, friend_2, friend_3, friend_4, friend_5],
        tags: ['programing', 'design', 'hosting', 'marketing'],
    },
    {
        title: 'Youssef Dashboard',
        desc: 'Youssef dashboard project design and programming and hosting',
        date: '15/10/2021',
        amount: 2500,
        prog: '50%',
        praticapant : [friend_1, friend_2, friend_3, friend_4],
        tags: ['programing', 'design', 'hosting', 'marketing'],
    },
    {
        title: 'Youssef Dashboard',
        desc: 'Youssef dashboard project design and programming and hosting',
        date: '15/10/2021',
        amount: 2500,
        prog: '50%',
        praticapant : [friend_1, friend_2, friend_3, friend_4],
        tags: ['programing', 'design', 'hosting', 'marketing'],
    },
    {
        title: 'Youssef Dashboard',
        desc: 'Youssef dashboard project design and programming and hosting',
        date: '15/10/2021',
        amount: 2500,
        prog: '50%',
        praticapant : [friend_1, friend_2, friend_3, friend_4],
        tags: ['programing', 'design', 'hosting', 'marketing'],
    },
    {
        title: 'Youssef Dashboard',
        desc: 'Youssef dashboard project design and programming and hosting',
        date: '15/10/2021',
        amount: 2500,
        prog: '50%',
        praticapant : [friend_1, friend_2, friend_3, friend_4],
        tags: ['programing', 'design', 'hosting', 'marketing'],
    },
    {
        title: 'Youssef Dashboard',
        desc: 'Youssef dashboard project design and programming and hosting',
        date: '15/10/2021',
        amount: 2500,
        prog: '50%',
        praticapant : [friend_1, friend_2, friend_3, friend_4],
        tags: ['programing', 'design', 'hosting', 'marketing'],
    },
    {
        title: 'Youssef Dashboard',
        desc: 'Youssef dashboard project design and programming and hosting',
        date: '15/10/2021',
        amount: 2500,
        prog: '50%',
        praticapant : [friend_1, friend_2, friend_3, friend_4],
        tags: ['programing', 'design', 'hosting', 'marketing'],
    },
    {
        title: 'Youssef Dashboard',
        desc: 'Youssef dashboard project design and programming and hosting',
        date: '15/10/2021',
        amount: 2500,
        prog: '50%',
        praticapant : [friend_1, friend_2, friend_3, friend_4],
        tags: ['programing', 'design', 'hosting', 'marketing'],
    },
    {
        title: 'Youssef Dashboard',
        desc: 'Youssef dashboard project design and programming and hosting',
        date: '15/10/2021',
        amount: 2500,
        prog: '50%',
        praticapant : [friend_1, friend_2, friend_3, friend_4],
        tags: ['programing', 'design', 'hosting', 'marketing'],
    },
    {
        title: 'Youssef Dashboard',
        desc: 'Youssef dashboard project design and programming and hosting',
        date: '15/10/2021',
        amount: 2500,
        prog: '50%',
        praticapant : [friend_1, friend_2, friend_3, friend_4],
        tags: ['programing', 'design', 'hosting', 'marketing'],
    },
    {
        title: 'Youssef Dashboard',
        desc: 'Youssef dashboard project design and programming and hosting',
        date: '15/10/2021',
        amount: 2500,
        prog: '50%',
        praticapant : [friend_1, friend_2, friend_3, friend_4],
        tags: ['programing', 'design', 'hosting', 'marketing'],
    },
    {
        title: 'Youssef Dashboard',
        desc: 'Youssef dashboard project design and programming and hosting',
        date: '15/10/2021',
        amount: 2500,
        prog: '50%',
        praticapant : [friend_1, friend_2, friend_3, friend_4],
        tags: ['programing', 'design', 'hosting', 'marketing'],
    },
    {
        title: 'Youssef Dashboard',
        desc: 'Youssef dashboard project design and programming and hosting',
        date: '15/10/2021',
        amount: 2500,
        prog: '50%',
        praticapant : [friend_1, friend_2, friend_3, friend_4],
        tags: ['programing', 'design', 'hosting', 'marketing'],
    },
    {
        title: 'Youssef Dashboard',
        desc: 'Youssef dashboard project design and programming and hosting',
        date: '15/10/2021',
        amount: 2500,
        prog: '50%',
        praticapant : [friend_1, friend_2, friend_3, friend_4],
        tags: ['programing', 'design', 'hosting', 'marketing'],
    },
    {
        title: 'Youssef Dashboard',
        desc: 'Youssef dashboard project design and programming and hosting',
        date: '15/10/2021',
        amount: 2500,
        prog: '50%',
        praticapant : [friend_1, friend_2, friend_3, friend_4],
        tags: ['programing', 'design', 'hosting', 'marketing'],
    },
    {
        title: 'Youssef Dashboard',
        desc: 'Youssef dashboard project design and programming and hosting',
        date: '15/10/2021',
        amount: 2500,
        prog: '50%',
        praticapant : [friend_1, friend_2, friend_3, friend_4],
        tags: ['programing', 'design', 'hosting', 'marketing'],
    },
    {
        title: 'Youssef Dashboard',
        desc: 'Youssef dashboard project design and programming and hosting',
        date: '15/10/2021',
        amount: 2500,
        prog: '50%',
        praticapant : [friend_1, friend_2, friend_3, friend_4],
        tags: ['programing', 'design', 'hosting', 'marketing'],
    },
    {
        title: 'Youssef Dashboard',
        desc: 'Youssef dashboard project design and programming and hosting',
        date: '15/10/2021',
        amount: 2500,
        prog: '50%',
        praticapant : [friend_1, friend_2, friend_3, friend_4],
        tags: ['programing', 'design', 'hosting', 'marketing'],
    },
    {
        title: 'Youssef Dashboard',
        desc: 'Youssef dashboard project design and programming and hosting',
        date: '15/10/2021',
        amount: 2500,
        prog: '50%',
        praticapant : [friend_1, friend_2, friend_3, friend_4],
        tags: ['programing', 'design', 'hosting', 'marketing'],
    },
    {
        title: 'Youssef Dashboard',
        desc: 'Youssef dashboard project design and programming and hosting',
        date: '15/10/2021',
        amount: 2500,
        prog: '50%',
        praticapant : [friend_1, friend_2, friend_3, friend_4],
        tags: ['programing', 'design', 'hosting', 'marketing'],
    },
    {
        title: 'Youssef Dashboard',
        desc: 'Youssef dashboard project design and programming and hosting',
        date: '15/10/2021',
        amount: 2500,
        prog: '50%',
        praticapant : [friend_1, friend_2, friend_3, friend_4],
        tags: ['programing', 'design', 'hosting', 'marketing'],
    },
    {
        title: 'Youssef Dashboard',
        desc: 'Youssef dashboard project design and programming and hosting',
        date: '15/10/2021',
        amount: 2500,
        prog: '50%',
        praticapant : [friend_1, friend_2, friend_3, friend_4],
        tags: ['programing', 'design', 'hosting', 'marketing'],
    },
    {
        title: 'Youssef Dashboard',
        desc: 'Youssef dashboard project design and programming and hosting',
        date: '15/10/2021',
        amount: 2500,
        prog: '50%',
        praticapant : [friend_1, friend_2, friend_3, friend_4],
        tags: ['programing', 'design', 'hosting', 'marketing'],
    },
    {
        title: 'Youssef Dashboard',
        desc: 'Youssef dashboard project design and programming and hosting',
        date: '15/10/2021',
        amount: 2500,
        prog: '50%',
        praticapant : [friend_1, friend_2, friend_3, friend_4],
        tags: ['programing', 'design', 'hosting', 'marketing'],
    },
    {
        title: 'Youssef Dashboard',
        desc: 'Youssef dashboard project design and programming and hosting',
        date: '15/10/2021',
        amount: 2500,
        prog: '50%',
        praticapant : [friend_1, friend_2, friend_3, friend_4],
        tags: ['programing', 'design', 'hosting', 'marketing'],
    },
    {
        title: 'Youssef Dashboard',
        desc: 'Youssef dashboard project design and programming and hosting',
        date: '15/10/2021',
        amount: 2500,
        prog: '50%',
        praticapant : [friend_1, friend_2, friend_3, friend_4],
        tags: ['programing', 'design', 'hosting', 'marketing'],
    },
    {
        title: 'Youssef Dashboard',
        desc: 'Youssef dashboard project design and programming and hosting',
        date: '15/10/2021',
        amount: 2500,
        prog: '50%',
        praticapant : [friend_1, friend_2, friend_3, friend_4],
        tags: ['programing', 'design', 'hosting', 'marketing'],
    },
    {
        title: 'Youssef Dashboard',
        desc: 'Youssef dashboard project design and programming and hosting',
        date: '15/10/2021',
        amount: 2500,
        prog: '50%',
        praticapant : [friend_1, friend_2, friend_3, friend_4],
        tags: ['programing', 'design', 'hosting', 'marketing'],
    },
    {
        title: 'Youssef Dashboard',
        desc: 'Youssef dashboard project design and programming and hosting',
        date: '15/10/2021',
        amount: 2500,
        prog: '50%',
        praticapant : [friend_1, friend_2, friend_3, friend_4],
        tags: ['programing', 'design', 'hosting', 'marketing'],
    },
    {
        title: 'Youssef Dashboard',
        desc: 'Youssef dashboard project design and programming and hosting',
        date: '15/10/2021',
        amount: 2500,
        prog: '50%',
        praticapant : [friend_1, friend_2, friend_3, friend_4],
        tags: ['programing', 'design', 'hosting', 'marketing'],
    },
    {
        title: 'Youssef Dashboard',
        desc: 'Youssef dashboard project design and programming and hosting',
        date: '15/10/2021',
        amount: 2500,
        prog: '50%',
        praticapant : [friend_1, friend_2, friend_3, friend_4],
        tags: ['programing', 'design', 'hosting', 'marketing'],
    },
    {
        title: 'Youssef Dashboard',
        desc: 'Youssef dashboard project design and programming and hosting',
        date: '15/10/2021',
        amount: 2500,
        prog: '50%',
        praticapant : [friend_1, friend_2, friend_3, friend_4],
        tags: ['programing', 'design', 'hosting', 'marketing'],
    },
    {
        title: 'Youssef Dashboard',
        desc: 'Youssef dashboard project design and programming and hosting',
        date: '15/10/2021',
        amount: 2500,
        prog: '50%',
        praticapant : [friend_1, friend_2, friend_3, friend_4],
        tags: ['programing', 'design', 'hosting', 'marketing'],
    },
    {
        title: 'Youssef Dashboard',
        desc: 'Youssef dashboard project design and programming and hosting',
        date: '15/10/2021',
        amount: 2500,
        prog: '50%',
        praticapant : [friend_1, friend_2, friend_3, friend_4],
        tags: ['programing', 'design', 'hosting', 'marketing'],
    },
    {
        title: 'Youssef Dashboard',
        desc: 'Youssef dashboard project design and programming and hosting',
        date: '15/10/2021',
        amount: 2500,
        prog: '50%',
        praticapant : [friend_1, friend_2, friend_3, friend_4],
        tags: ['programing', 'design', 'hosting', 'marketing'],
    },
    {
        title: 'Youssef Dashboard',
        desc: 'Youssef dashboard project design and programming and hosting',
        date: '15/10/2021',
        amount: 2500,
        prog: '50%',
        praticapant : [friend_1, friend_2, friend_3, friend_4],
        tags: ['programing', 'design', 'hosting', 'marketing'],
    },
    {
        title: 'Youssef Dashboard',
        desc: 'Youssef dashboard project design and programming and hosting',
        date: '15/10/2021',
        amount: 2500,
        prog: '50%',
        praticapant : [friend_1, friend_2, friend_3, friend_4],
        tags: ['programing', 'design', 'hosting', 'marketing'],
    },
    {
        title: 'Youssef Dashboard',
        desc: 'Youssef dashboard project design and programming and hosting',
        date: '15/10/2021',
        amount: 2500,
        prog: '50%',
        praticapant : [friend_1, friend_2, friend_3, friend_4],
        tags: ['programing', 'design', 'hosting', 'marketing'],
    },
    {
        title: 'Youssef Dashboard',
        desc: 'Youssef dashboard project design and programming and hosting',
        date: '15/10/2021',
        amount: 2500,
        prog: '50%',
        praticapant : [friend_1, friend_2, friend_3, friend_4],
        tags: ['programing', 'design', 'hosting', 'marketing'],
    },
    {
        title: 'Youssef Dashboard',
        desc: 'Youssef dashboard project design and programming and hosting',
        date: '15/10/2021',
        amount: 2500,
        prog: '50%',
        praticapant : [friend_1, friend_2, friend_3, friend_4],
        tags: ['programing', 'design', 'hosting', 'marketing'],
    },
    
]