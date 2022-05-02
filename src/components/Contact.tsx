import { useForm } from "react-hook-form";
import { Modal } from "../components";
import { useState } from "react";

type ContactData = {
  name: string;
  email: string;
  message: string;
};

export const Contact = () => {
  const [modal, setModal] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactData>();

  const onSubmit = handleSubmit(async (data: ContactData) => {
    setModal(true);
    console.log(watch());
  });

  return (
    <div
      id="contact"
      className="bg-[#0a192f] w-full h-screen flex justify-center items-center p-4"
    >
      <form
        onSubmit={onSubmit}
        action=""
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email - mksanjeewa86@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          {...register("name", {
            required: "name is required",
            maxLength: { value: 30, message: "max length is 30" },
          })}
          placeholder="Name"
          name="name"
        />
        <p className="text-sm text-red-500 mt-1 mb-2">{errors.name?.message}</p>
        <input
          className="p-2 bg-[#ccd6f6]"
          type="text"
          {...register("email", {
            required: "email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
          placeholder="Email"
          name="email"
        />
        <p className="text-sm text-red-500 mt-1 mb-2">
          {errors.email?.message}
        </p>
        <textarea
          className="bg-[#ccd6f6] p-2"
          placeholder="Message"
          {...register("message", {
            required: "message is required",
            maxLength: { value: 100, message: "max length is 100" },
          })}
          name="message"
          rows={10}
        ></textarea>
        <p className="text-sm text-red-500 mt-1">{errors.message?.message}</p>
        <input
          type="submit"
          value="Let's Collaborate"
          className="text-white border-2 border-white hover:bg-pink-600 px-4 py-3 my-8 mx-auto flex items-center rounded-full"
        />
      </form>
      {modal && (
        <Modal
          title="Thank you!"
          description="thank you for your message"
          type="success"
        >
          <button
            className="bg-red-500 text-white p-3 w-20 rounded-lg"
            onClick={() => {
              setModal(false);
              reset();
            }}
          >
            Close
          </button>
        </Modal>
      )}
    </div>
  );
};
