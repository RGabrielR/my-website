import { useInView } from "react-intersection-observer";
import "animate.css";
const Highlights = () => {
  const { ref, inView, entry } = useInView({
    threshold: 1,
  });

  const animateList = (seconds) => {
    if (inView) {
      return `animate__animated animate__backInLeft animate__delay-${seconds}s`;
    } else return "animate__animated animate__backOutRight";
  };
  return (
    <>
      <div
        ref={ref}
        className="wrapper section flex flex-col h-4/6 justify-around items-center md:ml-14 lg:ml-14 xl:ml-14 2xl:ml-14 overflow-hidden"
      >
        <ul className="text-6xl text-white underline self-center  mt-6">
          Who am i:
        </ul>

        <div className="  flex flex-col items-start  ml-2 md:ml-14 lg:ml-14 xl:ml-14 2xl:ml-14">
          <div className={`flex flex-row items-start  ${animateList("")}`}>
            <img src="./07.png" className="w-12 h-12 self-center" />
            <li className="list-none text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl  2xl:text-2xl m-6 lg:m-12 xl:m-12 2xl:m-12 bg-white  ">
              A full-stack developer who love to learn, grow and create
              better designs each time.
            </li>
          </div>

          <div className={`flex flex-row items-start ${animateList("1")}  `}>
            <img src="./07.png" className="w-12 h-12 self-center" />
            <li className="list-none text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl  2xl:text-2xl m-6 lg:m-12 xl:m-12 2xl:m-12 bg-white  ">
              Aproachable and easy to work with, especially in groups.
            </li>
          </div>

          <div className={`flex flex-row items-start ${animateList("2")} `}>
            <img src="./07.png" className="w-12 h-12 self-center" />
            <li className="list-none text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl  2xl:text-2xl m-6 lg:m-12 xl:m-12 2xl:m-12 bg-white  ">
              With Experience on contacting clients and solving problems.
            </li>
          </div>

          <div className={`flex flex-row items-start ${animateList("4")} `}>
            <img src="./07.png" className="w-12 h-12 self-center" />
            <li className="list-none text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl  2xl:text-2xl m-6 lg:m-12 xl:m-12 2xl:m-12 bg-white  ">
              The one you need on your team 😉
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Highlights;
