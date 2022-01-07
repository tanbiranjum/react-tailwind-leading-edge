import {
  LocationMarkerIcon,
  PhoneIcon,
  MailIcon,
} from '@heroicons/react/outline'

const Contact = () => {
  return (
    <div className="flex w-3/4 mx-auto mt-12">
      <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-10 w-1/2">
        <h3 className="text-2xl text-white mb-4 font-bold">
          Send us a message
        </h3>
        <form className="flex flex-col">
          <input
            type="text"
            className="bg-transparent py-1 placeholder:text-gray-200 border-0 border-b focus:outline-none my-3 text-white"
            placeholder="Name"
          />
          <input
            type="email"
            className="bg-transparent py-1 placeholder:text-gray-200 border-0 border-b focus:outline-none my-3 text-white"
            placeholder="Email"
          />
          <input
            type="text"
            className="bg-transparent py-1 placeholder:text-gray-200 border-0 border-b focus:outline-none my-3 text-white"
            placeholder="Subject"
          />
          <textarea
            className="bg-transparent py-1 placeholder:text-gray-200 border-0 border-b focus:outline-none my-3 text-white"
            placeholder="Message"
          />
          <button className="py-2 mt-6 text-white bg-pink-500 align w-1/3 rounded">
            Send Message
          </button>
        </form>
      </div>
      <div className="w-1/2 p-8 shadow-xl">
        <p className="text-3xl font-semibold tracking-wide">Contact us</p>
        <p className="text-gray-700">
          We are open for any suggestion or just to have a chat.
        </p>
        <div className="flex items-center my-8">
          <LocationMarkerIcon className="h-12 border rounded-full p-2 mr-4 text-gray-600" />
          <p>
            <span className="font-semibold">Adress: </span>Uttara, Sector-8,
            Polwell Carnation, Dhaka
          </p>
        </div>
        <div className="flex items-center my-8">
          <PhoneIcon className="h-12 border rounded-full p-2 mr-4 text-gray-600" />
          <p>
            <span className="font-semibold">Mobile: </span>+8801332323233
          </p>
        </div>
        <div className="flex items-center my-8">
          <MailIcon className="h-12 border rounded-full p-2 mr-4 text-gray-600" />
          <p>
            <span className="font-semibold">Email: </span>
            contact@leadingedgebd.com
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
