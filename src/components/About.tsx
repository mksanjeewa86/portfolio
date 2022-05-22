import { MasterTitle } from "./common/MasterTitle";

export const About: React.FC = () => {
  return (
    <div id="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4 mt-20 sm:mt-0">
            <MasterTitle name="About" />
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-2xl font-semibold font-mono text-green-200">
            <p>
              Hi, I'm Malaka Sanjeewa, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p className="font-mono font-light text-sm">
              Highly motivated, skilled and hard working person with hands on
              experience on software development using React.js, Node.js,
              JavaScript, PHP and blockchain development on Ethereum and Tezos
              networks. Excellent communication skills and presentation skills
              in Sinhalese, English and Japanese. Active Team player and a Fast
              learner. Team-oriented with the ability to adjust to new
              environments quickly. A fast learner and also a reliable employee
              with an excellent work ethic and positive attitude.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
