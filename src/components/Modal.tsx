import {
  BiMessageRoundedError,
  BiMessageCheck,
  BiMessageRoundedX,
  AiFillSafetyCertificate,
} from "../assets/icons";
import { ModalProps } from "../types";

export const Modal: React.FC<ModalProps> = ({
  type,
  title,
  description,
  children,
}: ModalProps) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-xl min-w-min">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start p-4 border-b border-solid border-slate-200 rounded-t bg-green-700">
              <p>
                {typeof description !== "object" &&
                  (type === "warning" ? (
                    <BiMessageRoundedError className="w-7 h-7 mt-2 mr-2 text-yellow-500" />
                  ) : type === "success" ? (
                    <BiMessageCheck className="w-7 h-7 mt-2 mr-2 text-green-500" />
                  ) : (
                    <BiMessageRoundedX className="w-7 h-7 mt-2 mr-2 text-red-500" />
                  ))}
              </p>
              <h3 className="text-white font-semibold font-mono text-md mt-2">
                {title}
              </h3>
            </div>
            <div className="relative p-6 flex-auto max-h-[300px] overflow-y-auto">
              <p className="my-1 text-slate-500 text-lg leading-relaxed">
                {typeof description === "string" && description}
                {typeof description === "object" &&
                  description.map((desc: any, index: any) => {
                    return (
                      <div
                        className="text-green-600 font-light font-mono text-sm"
                        key={index}
                      >
                        <span className="flex flex-row">
                          <AiFillSafetyCertificate className="text-green-500 mt-1 mr-2" />
                          {desc}
                        </span>
                      </div>
                    );
                  })}
              </p>
            </div>
            <div className="flex items-center justify-end p-3 border-t border-solid border-slate-200 rounded-b bg-gray-200">
              {children}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
