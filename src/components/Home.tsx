import { malaka } from "../assets/images";
import Typed from "react-typed";
import { resume, resume_japanese, work_history } from "../assets/documents";

export const Home = (value: any) => {
  return (
    <div id="home" className="bg-[#0a192f] w-full sm:h-screen">
      <div className="flex flex-col justify-center w-full h-full">
        <div className="max-w-[1000px] text-white grid grid-cols-1 sm:grid-cols-2 gap-8 mx-auto px-8">
          <div className="sm:hidden mt-32 sm:mt-0">
            <img className="items-center" src={malaka} alt="" />
          </div>
          <div className="p-2 my-auto">
            <p className="text-green-300 font-mono font-light text-sm">
              Hi, my name is
            </p>
            <h1 className="text-4xl sm:text-3xl lg:text-5xl font-bold text-[#ccd6f6]">
              Malaka Sanjeewa
            </h1>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#8892b0] font-mono">
              I'm a&nbsp;
              <Typed
                strings={[
                  "Full Stack Developer",
                  "Software Engineer",
                  "Blockchain Engineer",
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
            <p className="text-[#8892b0] py-4 max-w-[700px] font-light font-mono">
              {value.value === "en"
                ? "I’m a full-stack developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building responsive full-stack web applications."
                : "私は、卓越したデジタルエクスペリエンスの構築（場合によっては設計）を専門とするフルスタックの開発者です。 現在、私は応答性の高いフルスタックWebアプリケーションの構築に注力しています。"}
            </p>
            <div className="flex flex-row flex-wrap justify-start">
              {value.value === "en" ? (
                <a
                  href={resume}
                  className="text-white border-2 border-green-900 px-6 py-2 m-1 flex items-center rounded-xl hover:scale-110 duration-500 font-mono font-light"
                >
                  Resume
                </a>
              ) : (
                <>
                  <a
                    href={resume_japanese}
                    className="text-white border-2 border-green-900 px-6 py-2 m-1 flex items-center rounded-xl hover:scale-110 duration-500 font-mono font-light"
                  >
                    履歴書
                  </a>
                  <a
                    href={work_history}
                    className="text-white border-2 border-green-900 px-6 py-2 m-1 flex items-center rounded-xl hover:scale-110 duration-500 font-mono font-light"
                  >
                    職務経歴書
                  </a>
                </>
              )}
            </div>
            <div className="mt-2 ml-2 text-[10px] font-light font-mono opacity-50 text-green-200">
              {value.value === "en"
                ? "last update: 26th May, 2022"
                : "更新日：2022年05月26日"}
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
