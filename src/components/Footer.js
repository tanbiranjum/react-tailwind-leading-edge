import { FaFacebookF, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="mt-20">
      <hr className="border border-t-2 border-gray-100" />
      <div className="flex justify-around mt-12">
        <div>
          <p className="font-extrabold text-xl text-gray-600">
            WHERE TO FIND US
          </p>
          <p className="text-gray-500 mt-2">
            Dhaka, Uttara
            <br />
            Sector-8, Road 12
            <br />
            Pollowel Carnation, Dhaka
          </p>
          <div className="flex justify-between mt-4">
            <a
              className="bg-blue-100 p-3 rounded-full border border-gray-500"
              href="www.facebook.com"
            >
              <FaFacebookF className="text-blue-900" />
            </a>
            <a
              className="bg-blue-100 p-3 rounded-full border border-gray-500"
              href="www.facebook.com"
            >
              <FaLinkedin className="text-blue-800" />
            </a>
            <a
              className="bg-blue-100 p-3 rounded-full border border-gray-500"
              href="https://www.facebook.com"
            >
              <FaTwitter className="text-blue-600" />
            </a>
            <a
              className="bg-blue-100 p-3 rounded-full border border-gray-500"
              href="www.facebook.com"
            >
              <FaInstagram className="text-blue-600" />
            </a>
          </div>
        </div>
        <div>
          <p className="font-extrabold text-xl text-gray-600">OPENING HOURS</p>
          <p className="text-gray-500 mt-2">
            Mon-Fri 08.00 AM - 10.00 PM
            <br />
            Mon-Fri 08.00 AM - 10.00 PM
            <br />
            Mon-Fri 08.00 AM - 10.00 PM
          </p>
        </div>
        <div>
          <p className="font-extrabold text-xl text-gray-600">CONTACT US</p>
          <p className="text-gray-500 mt-2">
            contact@leadingedgebd.com
            <br />
            01302021032
            <br />
            01302021032
          </p>
        </div>
      </div>
      <p className="text-center uppercase text-gray-100 mt-12 bg-blue-700 py-4">
        Copyright 2022 &copy;
      </p>
    </div>
  )
}

export default Footer
