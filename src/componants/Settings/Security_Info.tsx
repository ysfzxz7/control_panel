export default function Security_info() {

    return (
        <div className="bg-white p-2 rounded-lg">
            <h1 className="text-sm font-semibold">Security info</h1>
            <p className="text-xs text-gray-700">Security information about account</p>
            <div className="flex items-center justify-between mt-5">
                <div className="inline-block">
                <h1 className="text-sm font-semibold">Password</h1>
                <h5 className="text-xs text-gray-700">Last cahnge on 25/10/2021</h5>
                </div>
                <button className="bg-blue-600 px-2 text-white rounded-md text-sm">change</button>
            </div>
            <div className="flex items-center justify-between my-5">
                <div>
                    <h1 className="text-sm font-semibold">Two-Factor Authentication</h1>
                    <h5 className="text-xs text-gray-700">Enable/Disable the feature</h5>
                </div>
                <button className="bg-blue-600 px-2 text-white rounded-md text-sm">X</button>
            </div>
            <div className="flex items-center justify-between my-5">
                <div className="inline-block">
                    <h1 className="text-sm font-semibold">Devices</h1>
                    <h5 className="text-xs text-gray-700">Check the login devices list</h5>
                </div>
                <button className="bg-gray-200 px-2 text-gray-900 rounded-md text-sm">Devices</button>
            </div>
        </div>
    )
}