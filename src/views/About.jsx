// local imports
import { aboutTitle,aboutSubtitle } from "../data";
import FadeIn from "../components/FadeIn";

const About = () => {
  return (
    <div id="About" className="px-10 max-w-[1490px] mx-auto mb-[160px]">
      <FadeIn delay={0.2} direction="down">
        <h1 className="text-5xl lg:text-[64px] font-medium text-fontBlack mb-6 text-center">
          {aboutTitle}
        </h1>
      </FadeIn>

      <FadeIn delay={0.4} direction="down">
        <h5 className=" text-align text-[#4F4F4F] text-md xs:text-xl mb-12">
          {aboutSubtitle}
        </h5>
      </FadeIn>

   
    </div>
  );
};

export default About;
