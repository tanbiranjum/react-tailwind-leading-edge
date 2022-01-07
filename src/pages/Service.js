import developerLogo from '../assets/developer.svg'
import designerLogo from '../assets/designer.svg'
import motionGraphicsLogo from '../assets/motion-graphics.svg'
import securityLogo from '../assets/security.svg'

import { NavLink, Outlet } from 'react-router-dom'

const services = [
  {
    title: 'Web Developing',
    logo: developerLogo,
    tags: ['Mobility', 'Web Development', 'IOT'],
    path: '/service/web-developing',
  },
  {
    title: 'Graphics Design',
    logo: designerLogo,
    tags: ['Mobility', 'Web Development', 'IOT'],
    path: '/service/graphics-design',
  },
  {
    title: 'Motion Graphics & Video Editing',
    logo: motionGraphicsLogo,
    tags: ['Mobility', 'Web Development', 'IOT'],
    path: '/service/motion-graphics',
  },
  {
    title: 'Cyber Security',
    logo: securityLogo,
    tags: ['Mobility', 'Web Development', 'IOT'],
    path: '/service/cyber-security',
  },
]

const Service = () => {
  return (
    <div className="mt-12">
      <div className="flex justify-between flex-wrap">
        {services.map((item, index) => (
          <NavLink
            to={item.path}
            // className="bg-blue-200 w-1/5 p-8 rounded-2xl shadow-md h-72"
            className={({ isActive }) =>
              isActive
                ? 'bg-blue-400 w-1/5 p-8 rounded-2xl shadow-md h-72'
                : 'bg-blue-200 w-1/5 p-8 rounded-2xl shadow-md h-72'
            }
            key={index}
          >
            <img className="h-1/5" src={item.logo} alt="hacker logo" />
            <p className="text-lg mt-4">{item.title}</p>
            <ul className="flex justify-between flex-wrap mt-4">
              {item.tags.map((tag, index) => (
                <li
                  className="bg-white px-3 py-1 rounded-xl font-semibold text-xs mb-2 shadow-md"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  )
}

export default Service
