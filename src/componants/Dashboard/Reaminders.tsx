export default function Reminders() {

    return(
        <div className="min-height  bg-white rounded-lg p-2">
            <h1 className="font-bold mb-5">Reminders</h1>
            <div className="space-y-4">
            <div className="flex justify-start gap-2 items-center">
                <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                <div className="border-l-4 px-2">
                    <h1 className="font-bold text-sm mb-1">Check my task List</h1>
                    <h2 className="text-gray-600 text-xs">28/09/2022 - 12:00am</h2>
                </div>
            </div>
            <div className="flex justify-start gap-2 items-center">
                <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                <div className="border-l-4 border-green-600/50 px-2">
                    <h1 className="font-bold text-sm">Check my task List</h1>
                    <h2 className="text-gray-600 text-xs">28/09/2022 - 12:00am</h2>
                </div>
            </div>
            <div className="flex justify-start gap-2 items-center">
                <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                <div className="border-l-4 border-red-600/50 px-2">
                    <h1 className="font-bold text-sm">Check my task List</h1>
                    <h2 className="text-gray-600 text-xs">28/09/2022 - 12:00am</h2>
                </div>
            </div>
            <div className="flex justify-start gap-2 items-center">
                <div className="w-4 h-4 bg-yellow-600 rounded-full"></div>
                <div className="border-l-4 border-yellow-600/50 px-2">
                    <h1 className="font-bold text-sm">Check my task List</h1>
                    <h2 className="text-gray-600 text-xs">28/09/2022 - 12:00am</h2>
                </div>
            </div>
            </div>
        </div>
    )
}