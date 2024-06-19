import { coursesType } from "../types";
import Course_Card from "../utils/Course_Card";
import course_01  from "../../assets/imgs/course-01.jpg";
import avatar  from "../../assets/imgs/avatar.png";
import course_02  from "../../assets/imgs/course-02.jpg";
import course_03  from "../../assets/imgs/course-03.jpg";
import course_04  from "../../assets/imgs/course-04.jpg";
import course_05  from "../../assets/imgs/course-05.jpg";

export default function Course_Cards() {

    return (
        <div>
            <ul className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
            {
                courses.map((course , i: React.Key) => (
                    <li className="max-w-72 m-auto" key={i}>
                        <Course_Card data={course} /> 
                    </li>                   
                ))
            }
            </ul>
        </div>
    )
}


const courses: coursesType[] = [
    {
        title: 'Mastering web design',
        description: 'Master The art of web desgin and mocking, prototyping and creating web-desing Architecture',
        avatar: avatar,
        background: course_01,
        viewrs: 195,
        price: 165,
    },
    {
        title: 'Mastering web design',
        description: 'Master The art of web desgin and mocking, prototyping and creating web-desing Architecture',
        avatar: avatar,
        background: course_02,
        viewrs: 195,
        price: 165,
    },
    {
        title: 'Mastering web design',
        description: 'Master The art of web desgin and mocking, prototyping and creating web-desing Architecture',
        avatar: avatar,
        background: course_03,
        viewrs: 195,
        price: 165,
    },
    {
        title: 'Mastering web design',
        description: 'Master The art of web desgin and mocking, prototyping and creating web-desing Architecture',
        avatar: avatar,
        background: course_04,
        viewrs: 195,
        price: 165,
    },
    {
        title: 'Mastering web design',
        description: 'Master The art of web desgin and mocking, prototyping and creating web-desing Architecture',
        avatar: avatar,
        background: course_05,
        viewrs: 195,
        price: 165,
    },
    {
        title: 'Mastering web design',
        description: 'Master The art of web desgin and mocking, prototyping and creating web-desing Architecture',
        avatar: avatar,
        background: course_01,
        viewrs: 195,
        price: 165,
    },
    {
        title: 'Mastering web design',
        description: 'Master The art of web desgin and mocking, prototyping and creating web-desing Architecture',
        avatar: avatar,
        background: course_02,
        viewrs: 195,
        price: 165,
    },
    {
        title: 'Mastering web design',
        description: 'Master The art of web desgin and mocking, prototyping and creating web-desing Architecture',
        avatar: avatar,
        background: course_03,
        viewrs: 195,
        price: 165,
    },
    {
        title: 'Mastering web design',
        description: 'Master The art of web desgin and mocking, prototyping and creating web-desing Architecture',
        avatar: avatar,
        background: course_04,
        viewrs: 195,
        price: 165,
    },
    {
        title: 'Mastering web design',
        description: 'Master The art of web desgin and mocking, prototyping and creating web-desing Architecture',
        avatar: avatar,
        background: course_05,
        viewrs: 195,
        price: 165,
    },
    {
        title: 'Mastering web design',
        description: 'Master The art of web desgin and mocking, prototyping and creating web-desing Architecture',
        avatar: avatar,
        background: course_01,
        viewrs: 195,
        price: 165,
    },
    {
        title: 'Mastering web design',
        description: 'Master The art of web desgin and mocking, prototyping and creating web-desing Architecture',
        avatar: avatar,
        background: course_02,
        viewrs: 195,
        price: 165,
    },
    {
        title: 'Mastering web design',
        description: 'Master The art of web desgin and mocking, prototyping and creating web-desing Architecture',
        avatar: avatar,
        background: course_03,
        viewrs: 195,
        price: 165,
    },
    {
        title: 'Mastering web design',
        description: 'Master The art of web desgin and mocking, prototyping and creating web-desing Architecture',
        avatar: avatar,
        background: course_04,
        viewrs: 195,
        price: 165,
    },
    {
        title: 'Mastering web design',
        description: 'Master The art of web desgin and mocking, prototyping and creating web-desing Architecture',
        avatar: avatar,
        background: course_05,
        viewrs: 195,
        price: 165,
    },
]