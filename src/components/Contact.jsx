import React from "react";


const Contact = () => {

  return (
    <div
      name="contact"
      className="w-full h-full bg-[#0a192f] flex justify-center items-center pt-16 px-6 pb-6"
    >
      <form
        className="flex flex-col max-w-[600px] w-full"
        method="POST"
        action="https://getform.io/f/d4b374d2-a009-4d4c-9f90-1628d8bb2a55"
      >
        <div className="pb-8 py-10">
          <p className="text-4xl font-bold inline border-b-4 border-[#0CC0DF] text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4 flex justify-start items-center">
            Submit the form below or shoot me an email - cole.mason2@gmail.com
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
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#0CC0DF] hover:border-[#0CC0DF] px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
