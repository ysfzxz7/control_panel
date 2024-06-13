import { newsType } from "../types"
import  news_01 from "../../assets/imgs/news-01.png";
import  news_02 from "../../assets/imgs/news-02.png";
import  news_03 from "../../assets/imgs/news-03.png";
import  news_04 from "../../assets/imgs/news-04.png";

export default function Latest_News() {

    return (
        <div className="min-height space-y-3 bg-white rounded-lg p-2">
            <h1 className="font-semibold">Latest News</h1>
            <div>
                <ul className="space-y-2">
                    {news.map((item) => (
                        <li className="flex items-center cursor-pointer">
                            <img className="rounded-md w-24 object-contain transition-all duration-300 hover:scale-105" src={item.img} alt="" />
                            <div className="flex-1 ml-1">
                                <h1 className="text-sm font-semibold hover:underline transition-all duration-300">{item.title}</h1>
                                <h1 className="text-xs line-clamp-1">{item.desc}</h1>
                            </div>
                            <h1 className="text-xs text-gray-400">{item.time} Days ago</h1>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

const news: newsType[] = [
    {
        title: 'Creation SASS Section',
        desc: 'News SASS Exemple & tutorials',
        time: 3,
        img: news_01
    },
    {
        title: 'Changed the design',
        desc: 'A brand new design',
        time: 5,
        img: news_02
    },
    {
        title: 'Team increased',
        desc: '3 devlopers jooined the team',
        time: 1,
        img: news_03
    },
    {
        title: 'Added payment gateway',
        desc: 'Many new payment gateaway added',
        time: 9,
        img: news_04
    }   
]