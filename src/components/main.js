import { SplitText } from "@cyriacbr/react-split-text";
import { useInView } from "react-intersection-observer";
const Main = () => {
  const { ref, inView, entry } = useInView({
    threshold: 1,
  });

  return (
    <>
      <div ref={ref} className="section main flex flex-col justify-around">
        {inView ? (
          <>
            <SplitText
              className="mx-4 text-6xl flex-wrap flex flex-row let"
              LetterWrapper={({ children }) => (
                <span className="letters flex-row cursor-default ">
                  {children}
                </span>
              )}
            >
              Gabriel Alabí
            </SplitText>
            <SplitText
              className=" mx-4 text-6xl flex-wrap flex flex-row self-end let"
              LetterWrapper={({ children }) => (
                <span className="letters flex-row cursor-default ">
                  {children}
                </span>
              )}
            >
              Web Developer
            </SplitText>
          </>
        ) : (
          <>
            <SplitText
              className="mx-4 text-6xl flex-wrap flex flex-row let"
              LetterWrapper={({ children }) => (
                <span className="flex-row cursor-default ">{children}</span>
              )}
            >
              Gabriel Alabí
            </SplitText>
            <SplitText
              className=" mx-4 text-6xl flex-wrap flex flex-row self-end let"
              LetterWrapper={({ children }) => (
                <span className="flex-row cursor-default ">{children}</span>
              )}
            >
              Web Developer
            </SplitText>
          </>
        )}
      </div>
    </>
  );
};

export default Main;
