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
            <a href="#" className="uppercase">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="uppercase">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="uppercase">
              About
            </a>
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
