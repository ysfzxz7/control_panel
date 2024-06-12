import { Route, Routes } from "react-router-dom"
import { routes } from "./componants/types";
import Aside from "./componants/Aside"
import Nav from "./componants/Nav"
import _Dashboard from "./componants/Dashboard/_Dashborad";
import _Settings from "./componants/Settings/_Settings";
import _Profile from "./componants/Profile/_Profile";
import _Project from "./componants/Projects/_Projects";
import _Courses from "./componants/Courses/_Courses";
import _Friends from "./componants/Friends/_Friends";
import _Files from "./componants/Files/_Files";
import _Plans from "./componants/Plans/_Plans";


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
  {
    name: 'Profile',
    link: '/profile',
    element: <_Profile />
  },
  {
    name: 'Projects',
    link: '/projects',
    element: <_Project />
  },
  {
    name: 'Courses',
    link: '/courses',
    element: <_Courses />
  },
  {
    name: 'Settings',
    link: '/setting',
    element: <_Settings />
  },
  {
    name: 'Friends',
    link: '/friends',
    element: <_Friends />
  },
  {
    name: 'Files',
    link: '/files',
    element: <_Files />
  },
  {
    name: 'Plans',
    link: '/plans',
    element: <_Plans />
  }
]