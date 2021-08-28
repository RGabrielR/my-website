import '../floatingLinks.css';
import { useInView } from "react-intersection-observer";
import linkedin from "../linkedin-logo.jpg";
import github from "../github-logo-png-cat-transparent-png.png";
import mail from "../images (4).png";
const Contact = () => {
  const { ref, inView, entry } = useInView({
    threshold: 1,
  });
const entranceIcons = () => {
    if(inView) {
        return "animate__animated animate__backInUp"
    }
    else return "animate__animated animate__backOutDown animate__slow"
}


  return (
    <>
      <div ref={ref} className="section   overflow-hidden">
        <div className="flex flex-col items-start ">
          <ul className="text-6xl text-white underline self-center  mt-6 ">
            Contact me
          </ul>
        </div>
        <div className=" flex flex-row items-center justify-around mb-12 w-full h-4/6 flex-wrap">
          <div className={entranceIcons()}>
          <a href="https://www.linkedin.com/in/iv%C3%A1n-gabriel-alab%C3%AD-423a09168/" target="_blank">
          <img
            className="rounded rounded-full  h-24 w-24 border-4 sm:h-44 sm:w-44 floatingLinks delay1 sm:border-8 border-black  "
            src={linkedin}
            alt="image"
          /> 
          </a>
          </div>
          <div className={entranceIcons()}>
          <a href="https://github.com/RGabrielR" target="_blank">
          <img
            className="rounded rounded-full h-24 w-24 border-4 sm:h-44 sm:w-44 floatingLinks delay2 sm:border-8 border-black "
            src={github}
            alt="image"
          />
          </a>
          </div>
           <div className={entranceIcons()}>
           <a href="mailto: ivangabrielalabi@gmail.com">
          <img
            className="rounded rounded-full h-24 w-24 border-4 sm:h-44 sm:w-44 floatingLinks delay3 sm:border-8 border-black"
            src={mail}
            alt="image"
          />
          </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
