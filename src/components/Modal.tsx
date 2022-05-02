import {
  BiMessageRoundedError,
  BiMessageCheck,
  BiMessageRoundedX,
} from "../assets/icons";

interface ModalProps {
  title: string;
  description: string;
  type: string;
  children?: JSX.Element | JSX.Element[];
}

export function Modal({ type, title, description, children }: ModalProps) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-xl min-w-min">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start p-5 border-b border-solid border-slate-200 rounded-t bg-gray-200">
              <p>
                {type === "warning" ? (
                  <BiMessageRoundedError className="w-7 h-7 mt-2 mr-2 text-yellow-500" />
                ) : type === "success" ? (
                  <BiMessageCheck className="w-7 h-7 mt-2 mr-2 text-green-500" />
                ) : (
                  <BiMessageRoundedX className="w-7 h-7 mt-2 mr-2 text-red-500" />
                )}
              </p>
              <h3 className="text-2xl font-semibold">{title}</h3>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <p className="my-1 text-slate-500 text-lg leading-relaxed">
                {description}
              </p>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              {children}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
