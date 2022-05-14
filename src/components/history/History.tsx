import { Education, Course, Exams } from ".";

export const History: React.FC = () => {
  return (
    <div id="history" className="w-full bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Education
            </p>
            {<Education />}
          </div>
          <div className="pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Course
            </p>
            {<Course />}
          </div>
          <div className="pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Exam
            </p>
            {<Exams />}
          </div>
        </div>
      </div>
    </div>
  );
};
