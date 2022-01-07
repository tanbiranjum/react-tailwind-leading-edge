import teamImage from '../assets/team.svg'

const About = () => {
  return (
    <div className="flex items-center mt-20">
      <div className="w-1/2 px-8 mx-auto">
        <p className="text-5xl text-blue-700 font-bold">Why Us</p>
        <p className="text-xl text-gray-500 mt-4">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes.
        </p>
        <button className="rounded px-4 py-2 bg-blue-700 text-white mt-2 tracking-wider">
          Learn more
        </button>
      </div>
      <div className="w-1/2">
        <img src={teamImage} alt="our team" className="h-96" />
      </div>
    </div>
  )
}

export default About
