export const Contact = () => {
  const clickCollaborate = () => {
    console.log("hello");
  };
  return (
    <div
      id="contact"
      className="bg-[#0a192f] w-full h-screen flex justify-center items-center p-4"
    >
      <form action="" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            submit the form below or shoot me the email - mksanjeewa86@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          placeholder="Message"
          name="message"
          rows={10}
        ></textarea>
        <button
          onClick={clickCollaborate}
          className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-cneter"
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};
