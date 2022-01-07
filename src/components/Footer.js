const Footer = () => {
  return (
    <div className="bg-purple-500 mt-20 mb-5">
      <hr className="border border-t-2 border-gray-100" />
      <div className="flex justify-around mt-12">
        <div>
          <p className="font-extrabold text-xl text-gray-100">
            WHERE TO FIND US
          </p>
          <p className="text-gray-200 mt-2">
            Dhaka, Uttara
            <br />
            Sector-8, Road 12
            <br />
            Pollowel Carnation, Dhaka
          </p>
        </div>
        <div>
          <p className="font-extrabold text-xl text-gray-100">OPENING HOURS</p>
          <p className="text-gray-200 mt-2">
            Mon-Fri 08.00 AM - 10.00 PM
            <br />
            Mon-Fri 08.00 AM - 10.00 PM
            <br />
            Mon-Fri 08.00 AM - 10.00 PM
          </p>
        </div>
        <div>
          <p className="font-extrabold text-xl text-gray-100">CONTACT US</p>
          <p className="text-gray-200 mt-2">
            contact@leadingedgebd.com
            <br />
            01302021032
            <br />
            01302021032
          </p>
        </div>
      </div>
      <p className="text-center uppercase text-gray-100 mt-12">
        Copyright 2022 &copy;
      </p>
    </div>
  )
}

export default Footer
