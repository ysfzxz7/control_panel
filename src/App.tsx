import Aside from "./componants/Aside"
import Nav from "./componants/Nav"


function App() {

  return (
    <div className="bg-gray-400 flex">
      <Aside />
      <div className="w-11/12 ">
      <Nav />
      </div>

    </div>
  )
}

export default App
