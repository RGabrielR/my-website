import { useInView } from "react-intersection-observer";
import formularionline from "../formularionline.jpg";
import memeteca from "../MemeTeca.jpg";
import aerochallenge from "../aerochallenge.jpg";
import wii from "../original.jpeg";
const Portfolio = () => {
  const { ref, inView, entry } = useInView({
    threshold: 1,
  });

  const animateEntranceLeft = () => {
    if (inView) {
      return "animate__animated animate__backInLeft";
    } else return "animate__animated animate__backOutLeft animate__slow";
  };
  const animateEntranceRight = () => {
    if (inView) {
      return "animate__animated animate__backInRight ";
    } else return "animate__animated animate__backOutRight animate__slow";
  };

  return (
    <>
      <div
        ref={ref}
        className="section flex flex-col items-start overflow-hidden h-3/4 lg:w-full
        "
      >
        <ul className="text-6xl text-white underline self-center  mt-6 ">
          PortFolio
        </ul>

        <div
          className="self-center  h-3/4 w-full flex flex-col flex-nowrap 
        md:h-full md:justify-self-end md:mt-12
        lg:flex lg:flex-row  "
        >
          <div className="justify-self-center  flex-grow-0 lg:flex lg:flex-col lg:w-full lg:h-full lg:flex-grow-1">
            {/* formularioOnline */}
            <div
              className={`flex justify-center  items-center my-1 self-center w-full  ${animateEntranceLeft()}`}
            >
              <div
                className="
          bg-white
          shadow-md
          mx-3
          rounded-3xl
          flex 
          justify-around
          items-center
          overflow-hidden
          h-1/4
          w-full
          sm:flex-row sm:h-4/5 sm:w-4/5
          md:w-2/4
          lg:h-56 lg:w-96
        "
              >
                <img
                  className="w-1/3 h-32  object-cover
                lg:h-full lg:w-1/2
                 "
                  src={formularionline}
                  alt="image"
                />

                <div
                  className="
            flex-1
            w-full
            flex flex-col
            items-baseline
            justify-around
            h-1/3
            pl-6
            sm:h-full sm:items-baseline sm:w-1/2
          "
                >
                  <div className="flex flex-col justify-start items-baseline">
                    <h1 className="text-lg font-normal mb-0 text-gray-600 font-sans">
                      Formulario Online
                    </h1>
                  </div>
                  <p className="text-xs text-gray-500 w-4/5 mb-2">
                    Digital tool for autocomplete legal forms
                  </p>
                  <div className="w-full flex justify-between items-center">
                    <a href="https://formularioonline.com.ar/" target="_blank">
                      <button className="bg-gray-700 mr-5 text-white px-3 py-1 rounded-sm shadow-md">
                        Link
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* memeteca */}
            <div
              className={`flex justify-center items-center my-1 self-center w-full ${animateEntranceLeft()}`}
            >
              <div
                className="
         bg-white
          shadow-md
          mx-3
          rounded-3xl
          flex
          justify-around
          items-center
          overflow-hidden
          h-1/4
          w-full
          sm:flex-row sm:h-4/5 sm:w-4/5
          md:w-2/4
            lg:h-56 lg:w-96
       
        "
              >
                <img
                  className=" w-1/3 h-32 object-cover 
                lg:h-full lg:w-1/2   "
                  src={memeteca}
                  alt="image"
                />

                <div
                  className="
            flex-1
            w-full
            flex flex-col
            items-baseline
            justify-around
            h-1/2
            pl-6
            sm:h-full sm:items-baseline sm:w-1/2
          "
                >
                  <div className="flex flex-col justify-start items-baseline">
                    <h1 className="text-lg font-normal mb-0 text-gray-600 font-sans">
                      Memeteca
                    </h1>
                  </div>
                  <p className="text-xs text-gray-500 w-4/5 mb-2">
                    CRUD page with two-side view (admin and user)
                  </p>
                  <div className="w-full flex justify-between items-center">
                    <a
                      href="https://github.com/RGabrielR/MemeTecaFront"
                      target="_blank"
                    >
                      <button className="bg-gray-700  text-white px-3 py-1 rounded-sm shadow-md">
                        Code
                      </button>
                    </a>
                    <a href="https://memeteca.vercel.app/" target="_blank">
                      <button className="bg-gray-700 mr-5 text-white px-3 py-1 rounded-sm shadow-md">
                        Link
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="justify-self-center -mt-1 
          lg:flex lg:flex-col lg:w-full"
          >
            {/* aerochallenge */}
            <div
              className={`flex justify-center  items-center my-1 w-full ${animateEntranceRight()}  `}
            >
              <div
                className="
           bg-white
          shadow-md
          mx-3
        
          rounded-3xl
          flex
          justify-around
          items-center
          overflow-hidden
          h-1/4
          w-full
          sm:flex-row sm:h-4/5 sm:w-4/5
          md:w-2/4
           lg:h-56 lg:w-96
        "
              >
                <div
                  className="
            flex-1
            w-full
            flex flex-col
            items-baseline
            justify-around
            h-1/2
            pl-6
            sm:h-full sm:items-baseline sm:w-1/2
          "
                >
                  <div className="flex flex-col justify-start items-baseline">
                    <h1 className="text-lg font-normal mb-0 text-gray-600 font-sans">
                      Aerolab Challenge
                    </h1>
                  </div>
                  <p className="text-xs text-gray-500 w-4/5 mb-2">
                    CRUD page with API integration.
                  </p>
                  <div className="w-full flex justify-between items-center">
                    <a
                      href="https://github.com/RGabrielR/AeroContest"
                      target="_blank"
                    >
                      <button className="bg-gray-700 mr-5 text-white px-3 py-1 rounded-sm shadow-md">
                        Code
                      </button>
                    </a>
                    <a
                      href="https://aerolabchallenge-4v0espqna-rgabrielr.vercel.app/"
                      target="_blank"
                    >
                      <button className="bg-gray-700 mr-5 text-white px-3 py-1 rounded-sm shadow-md">
                        Link
                      </button>
                    </a>
                  </div>
                </div>
                <img
                  className="h-32 w-1/3    object-cover
                lg:h-full lg:w-1/2"
                  src={aerochallenge}
                  alt="image"
                />
              </div>
            </div>

            {/* Wii design */}
            <div
              className={`flex justify-center  items-center my-1 w-full ${animateEntranceRight()}  `}
            >
              <div
                className="
         bg-white
          shadow-md
           mx-3
          rounded-3xl
          flex
          justify-around
          items-center
          overflow-hidden
           h-1/4
          w-full
         sm:flex-row sm:h-4/5 sm:w-4/5
         md:w-2/4
            lg:h-56 lg:w-96
        "
              >
                <div
                  className="
            flex-1
            w-full
            flex flex-col
            items-baseline
            justify-around
            h-1/3
            pl-6
            sm:h-full sm:items-baseline sm:w-1/2
          "
                >
                  <div className="flex flex-col justify-start items-baseline">
                    <h1 className="text-lg font-normal mb-0 text-gray-600 font-sans">
                      CSS wii design
                    </h1>
                  </div>
                  <p className="text-xs text-gray-500 w-4/5">
                    1st prize on a design challenge.
                  </p>
                  <div className="w-full flex justify-between items-center">
                    <a
                      href="https://github.com/RGabrielR/Concurso-Mando-Wii"
                      target="_blank"
                    >
                      <button className="bg-gray-700 mr-5 text-white px-3 py-1 rounded-sm shadow-md">
                        Code
                      </button>
                    </a>
                    <a
                      href="https://rgabrielr.github.io/Concurso-Mando-Wii/index.html"
                      target="_blank"
                    >
                      <button className="bg-gray-700 mr-5 text-white px-3 py-1 rounded-sm shadow-md">
                        Link
                      </button>
                    </a>
                  </div>
                </div>
                <img
                  className="h-32 w-1/3    object-cover
                lg:h-full lg:w-1/2"
                  src={wii}
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
