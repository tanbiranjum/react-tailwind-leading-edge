import securityLogo from '../assets/security.svg'
import { Link } from 'react-router-dom'
import { ShieldCheckIcon } from '@heroicons/react/outline'

const CyberSecurity = () => {
  const info = {
    heading: 'We Will Build Your Next Online Business',
    para: 'Malesuada consequatur accumsan neque semper donec. Amet fusce volutpat nec nunc amet donec, tincidunt sed mauris donec quam, commodo.',
    image: securityLogo,
    serviceList: [
      'Enim penatibus',
      'Metus estlaoreet nullam',
      'Suspendisse convallis',
      'Blandit convallis neque eget',
    ],
  }
  return (
    <div className="mt-12">
      <div className="flex items-center">
        <div className="w-3/5">
          <p className="text-4xl font-extrabold">{info.heading}</p>
          <p className="text-lg text-gray-600 mt-4">{info.para}</p>
          <ul className="mt-8 text-lg text-gray-600">
            {info.serviceList.map((item, index) => (
              <li key={index} className="flex mb-4">
                <ShieldCheckIcon className="h-6 text-blue-600 mr-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-3/5">
          <img className="h-96" src={info.image} alt="service logo" />
        </div>
      </div>
      <Link to="/contact" className="bg-blue-600 py-2 px-4 text-white rounded">
        Contact Us
      </Link>
    </div>
  )
}

export default CyberSecurity
