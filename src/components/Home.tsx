import { malaka } from "../assets/images";
import Typed from "react-typed";
import { resume } from "../assets/documents";

export const Home = () => {
  return (
    <div id="home" className="bg-[#0a192f] w-full h-screen">
      <div className="flex flex-col justify-center w-full h-full">
        <div className="max-w-[1000px] text-white grid grid-cols-1 sm:grid-cols-2 gap-8 mx-auto px-8">
          <div className="sm:hidden mt-32 sm:mt-0">
            <img className="items-center" src={malaka} alt="" />
          </div>
          <div className="p-2 my-auto">
            <p className="text-pink-600">Hi, my name is</p>
            <h1 className="text-4xl sm:text-3xl lg:text-5xl font-bold text-[#ccd6f6]">
              Malaka Sanjeewa
            </h1>
            <h2 className="text-xl sm:text-xl lg:text-2xl font-bold text-[#8892b0]">
              I'm a&nbsp;
              <Typed
                strings={[
                  "Full Stack Developer",
                  "Software Engineer",
                  "Infra Engineer",
                  "Frontend Developer",
                  "Backend Engineer",
                ]}
                typeSpeed={50}
                backSpeed={30}
                shuffle={false}
                fadeOutDelay={100}
                loop
              />
            </h2>
            <p className="text-[#8892b0] py-4 max-w-[700px]">
              I’m a full-stack developer specializing in building (and
              occasionally designing) exceptional digital experiences.
              Currently, I’m focused on building responsive full-stack web
              applications.
            </p>
            <div>
              <a
                href={resume}
                className="text-white border-2 px-6 py-3 my-2 flex items-center rounded-3xl hover:bg-pink-600 w-fit"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="hidden sm:flex justify-center items-center">
            <img
              className="items-center rounded-full hover:brightness-110 shadow-[0px_1px_0px_0px] object-scale-down"
              src={malaka}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
