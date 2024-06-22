export default function Site_Control() {

    return (
        <div className="bg-white p-2 rounded">
            <h1 className="font-semibold">Site Control</h1>
            <p className="text-xs">Control The website if there is a maintenance</p>
            <div className="">
                <div className="my-3">
                    <h1 className="text-sm font-semibold">Website control</h1>
                    <p className="text-xs">Open/Close Website and type the reason</p>
                </div>
            </div>
            <textarea className="border w-full h-[55%] resize-none text-xs p-2 text-gray-800"  name="Message" id="">Close message content</textarea>
        </div>
    )
}