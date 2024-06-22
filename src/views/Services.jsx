// local imports
import { services } from "../data";
import FadeIn from "../components/FadeIn";
const Services = () => {
  return (
    <div
      id="services"
      className="mt-[160px] max-w-[1490px] mx-auto px-10 flex flex-col xs:flex-row gap-12 xs:gap-6 xs:justify-between w-full"
    >
      {services.map((service, i) => (
        <FadeIn key={i} delay={0.2} direction="down">
          <div className="flex flex-col lg:flex-row gap-4 w-full items-center ">
            <img
              src={service.icon}
              className="max-h-[84px] max-w-[84px]"
              alt=""
            />
            <div className="flex flex-col gap-1.5">
              <h3 className="text-center lg:text-start text-2xl lg:text-[28px]  font-medium  cursor-pointer text-fontBlack hover:bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] hover:bg-clip-text hover:text-transparent">
                {service.title}
              </h3>
              <h6 className="text-center lg:text-start text-base lg:text-lg text-fontGray font-medium">
                {service.subtitle}
              </h6>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
};
export default Services;
