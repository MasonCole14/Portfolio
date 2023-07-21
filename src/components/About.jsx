import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#0CC0DF]">
              About me
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Mason, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I'm passionate about learning new technologies, creating things.
              and building excellent software that improves the lives of those
              around me. I'm a graduate from Thinkful's software engineering
              bootcamp, where I learned how to create responsive full-stack web
              applications. I graduated from Texas A&M University in 2018, and
              currently live in Lincoln, Nebraska with my wife and dog.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
