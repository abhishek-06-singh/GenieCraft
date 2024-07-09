import React from "react";

const Creator = () => {
  return (
    <div className="font-poppins bg-white text-black relative p-20 w-auto flex px-24 justify-center">
      <div className="p-20 sm:p-16 md:p-20 lg:p-24 xl:p-20 w-auto flex flex-col md:flex-row px-4 sm:px-8 md:px-24 lg:px-24 xl:px-24 relative">
        <div className="mr-10">
          <img
            className="rounded-lg min-w-[100px] w-full h-auto md:w-auto md:h-auto"
            src="https://portfolio-2024-seven-plum.vercel.app/static/media/me.e111344546afb61ad647.jpg"
            alt="image of myself"
          />
        </div>
        <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%]">
          <h1 className="text-gray-800 font-bold text-3xl mt-6 mb-8">
            Hey it's, Abhishek Singh Chauhan .
          </h1>
          <p className="text-gray-600 w-full sm:w-[35rem] md:w-[30rem] lg:w-[35rem] mb-10">
            With nearly a year of dedicated experience in the field, I am a
            passionate Front-End/UI Developer specializing in React, Redux,
            JavaScript, and Tailwind CSS. My journey in web development has been
            driven by a deep enthusiasm for creating visually stunning and
            highly responsive web applications. I have always believed that the
            aesthetics and functionality of a web application are paramount.
            This belief has guided my work, ensuring that every project I
            undertake is crafted with a meticulous eye for design and an
            unwavering commitment to clean, efficient code.
          </p>
          <div className="flex flex-wrap justify-start items-center gap-4">
            <a
              rel="noopener"
              target="_blank"
              href="https://github.com/abhishek-06-singh"
              className="bg-pink-500/40 rounded-lg p-5 w-64 flex items-center gap-2 text-white"
            >
              <img
                className="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                src="https://ucarecdn.com/1f465c47-4849-4935-91f4-29135d8607af/github2.svg"
                width="20px"
                height="20px"
                alt="Github"
              />
              <span>Visit my Github</span>
            </a>
            <a
              rel="noopener"
              target="_blank"
              href="https://www.linkedin.com/in/abhishek-singh-chauhan-458522261/"
              className="bg-pink-500/40 rounded-lg p-5 w-64 flex items-center gap-2 text-white"
            >
              <img
                className="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/linkedin.svg"
                width="20px"
                height="20px"
                alt="LinkedIn"
              />
              <span>Follow me on Linkedin</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creator;
