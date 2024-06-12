import { Route, Routes } from "react-router-dom"
import { routes } from "./componants/types";
import Aside from "./componants/Aside"
import Nav from "./componants/Nav"
import _Dashboard from "./componants/Dashboard/_Dashborad";
import _Settings from "./componants/Settings/_Settings";


export default function App() {

  return (
    <div className="bg-gray-100 flex">
      <Aside />
      <div className="w-11/12 ">
      <Nav />
        <Routes>
          {
            allRoutes.map((route) => (
              <Route path={route.link} element={route.element} />
            ))
          }
        </Routes>
      </div>
    </div>
  )
}

const allRoutes: routes[] = [
  {
    name: 'Dashboard',
    link: '/',
    element: <_Dashboard />
  },
  {
    name: 'Settings',
    link: '/setting',
    element: <_Settings />
  },
]