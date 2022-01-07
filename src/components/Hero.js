import designerGirl from '../assets/designer-girl.svg'

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex mt-12 justify-between p-8">
      <div className="w-2/5">
        <p className="text-7xl text-white">We Help to Create Progress</p>
        <p className="mt-6 text-lg text-gray-100">
          We help you to improve your media value with professional services
        </p>
        <div className="mt-8">
          <button className="bg-blue-700 text-white px-4 py-2 rounded">
            Get Started
          </button>
          <button className="px-4 py-2">Watch showrell</button>
        </div>
      </div>
      <div className="w-2/5">
        <img src={designerGirl} alt="Girl in a jacket" className="h-96" />
      </div>
    </div>
  )
}

export default Hero
