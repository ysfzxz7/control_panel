export default function General_info() {

    return (
        <div className="bg-white p-2 rounded-md">
            <h1 className="font-semibold">General info</h1>
            <p className="text-xs mb-5">General information about your account</p>
          <div className="space-y-2">
          <div className="">
                <label className="block" htmlFor="first_name">First name</label>
                <input className="focus:outline outline-1 outline-blue-600 w-full text-xs p-2 border" name="First_name" type="text" placeholder="First Name" />
            </div>
            <div>
                <label className="text-sm block" htmlFor="Last_name">Last Name</label>
                <input className="border w-full text-xs p-2 focus:outline outline-1 outline-blue-600" name="Last_name" placeholder="Last_name" type="text" />
            </div>
            <div>
            <label className="block text-ms" htmlFor="Email">Email</label>
                <input disabled={true} placeholder="Youssef@gamil.com" className="border p-1 focus:outline outline-1 outline-blue-600 mr-2" type="email"  />
                <button className="hover:underline-offset-1 text-blue-700 text-sm hover:underline">Change</button>
            </div>
          </div>


        </div>
    )
}