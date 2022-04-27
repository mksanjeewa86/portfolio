import { HiArrowNarrowRight } from "../assets/icons";
import Typed from "react-typed";

export const Home = () => {
  return (
    <div id="home" className="bg-[#0a192f] w-full h-screen">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex-col flex justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Malaka Sanjeewa
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a&nbsp;
          <Typed
            strings={[
              "Full Stack Developer.",
              "Software Engineer.",
              "Infra Engineer.",
              "Frontend Developer.",
              "Backend Engineer.",
            ]}
            typeSpeed={50}
            backSpeed={30}
            shuffle={false}
            fadeOutDelay={100}
            cursorChar="|"
            loop
          />
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          jdflkdsf lfkdsjfkljs flksd jflkfjslkdfjsdlkf lskdfj lkdfjs lkfjsdklf
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-l-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
