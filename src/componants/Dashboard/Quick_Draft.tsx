export default function Quick_draft() {

    return (
        <div className="min-height bg-white space-y-2 p-2 rounded-lg ">
            <h1 className="font-bold">Quick Draft</h1>
            <h1 className="text-sm text-gray-700">Write a drfat for you ideas</h1>
            <input className="focus:outline-1 outline-blue-600 border w-full bg-gray-100 text-sm p-2" type="text" placeholder="Title" name="" id="" />
            <textarea name="" className="w-full border h-24 text-sm bg-gray-100 focus:outline-1 focus:outline-blue-600 p-2 resize-none  " placeholder="Write your thoughts here..." id=""></textarea>
            <div className=" flex justify-end">
                <button className="btn-primary mt-4">Save</button>
            </div>
        </div>
    )
}