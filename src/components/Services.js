import developerLogo from '../assets/developer.svg'
import designerLogo from '../assets/designer.svg'
import motionGraphicsLogo from '../assets/motion-graphics.svg'
import securityLogo from '../assets/security.svg'

const serviceContent = [
  {
    icon: <img src={developerLogo} alt="developer logo" />,
    title: 'Web Developing',
    para: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.',
  },
  {
    icon: <img src={designerLogo} alt="designerLogo logo" />,
    title: 'Graphics Design',
    para: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.',
  },
  {
    icon: <img src={motionGraphicsLogo} alt="motion graphics logo" />,
    title: 'Motion Graphics & Video Editing',
    para: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.',
  },
  {
    icon: <img src={securityLogo} alt="security logo" />,
    title: 'Ethical Hacking',
    para: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.',
  },
]

const Services = () => {
  return (
    <div className="mt-8">
      <div className="w-2/5 m-auto">
        <h1 className="text-4xl font-semibold text-center tracking-wider text-gray-700">
          Our Services
        </h1>
        <p className="text-gray-500 text-center">
          Taking care of you and our client. It begins with a comphrehensive
          initial examination. Taking care of you and our client. It begins with
          a comphrehensive initial examination
        </p>
      </div>
      <div className="flex mt-20 justify-between flex-wrap">
        {serviceContent.map((service, index) => (
          <div className="flex w-2/5 mb-12 items-center" key={index}>
            <div className="mr-8">{service.icon}</div>
            <div>
              <p className="font-bold text-2xl text-gray-700">
                {service.title}
              </p>
              <p className="text-gray-500 mt-3">{service.para}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
