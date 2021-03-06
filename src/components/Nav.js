import { NavLink } from 'react-router-dom'

/* eslint-disable jsx-a11y/anchor-is-valid */
const Nav = () => {
  return (
    <div className="flex h-14 items-center">
      <div className="w-2/6">
        <p className="text-gray-900 font-bold">Leading Edge</p>
      </div>
      <div className="w-2/6">
        <ul className="list-none flex justify-around">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'uppercase bg-blue-700 py-2 px-3 text-white'
                  : 'uppercase'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'uppercase bg-blue-700 py-2 px-3 text-white'
                  : 'uppercase'
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/service"
              className={({ isActive }) =>
                isActive
                  ? 'uppercase bg-blue-700 py-2 px-3 text-white'
                  : 'uppercase'
              }
            >
              Service
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="w-2/6">
        <button className="block px-3 py-2 font-bold ml-auto border border-gray-500">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Nav
