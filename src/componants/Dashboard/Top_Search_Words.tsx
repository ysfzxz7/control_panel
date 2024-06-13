import { searchWrodType } from "../types"

export default function Top_Searced() {
    
    return (
        <div className="min-height p-2 bg-white rounded-lg space-y-4">
            <div className="title flex items-center justify-between">
                <h1 className="text-gray-700/50 text-sm font-semibold" >Keyword</h1>
                <h1 className="text-gray-700/50 text-sm font-semibold" >Search count</h1>
            </div>
            <div>
                <ul className="space-y-3">
                    {keyWords.map((word) => (
                        <li className="flex justify-between">
                            <h1>{word.name}</h1>
                            <h1 className="border bg-gray-100 text-xs rounded-lg px-2 py-1">{word.counter}</h1>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}



const keyWords: searchWrodType[] = [
    {
        name: 'Programming',
        counter : 220,
    },
    {
        name: 'JavaScript',
        counter : 180,
    },
    {
        name: 'PHP',
        counter : 160,
    },
    {
        name: 'Code',
        counter : 145,
    },
    {
        name: 'Design',
        counter : 110,
    },
    {
        name: 'Logic',
        counter : 95,
    }
]