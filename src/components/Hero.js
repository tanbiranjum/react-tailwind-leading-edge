import designerGirl from '../assets/designer-girl.svg'

const Hero = () => {
  return (
    <div className="flex mt-20 justify-between">
      <div className="w-2/5">
        <p className="text-8xl">We Help to Create Progress</p>
        <p className="mt-6 text-gray-500">
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
