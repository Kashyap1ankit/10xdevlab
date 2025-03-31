import { Github, Mail, Twitter } from "lucide-react";

function App() {
  return (
    <div className="flex flex-col gap-16 justify-center items-center bg-[#0c0a09] min-h-screen w-full">
      <p className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-Bricolage text-white text-center ">
        Welcome to{" "}
        <span className="bg-linear-to-r from-[#FACC35] to-[#FDEC82] bg-clip-text text-transparent">
          10xDevLab!
        </span>
      </p>

      <div className="flex flex-col gap-6 sm:flex-row justify-evenly  lg:w-1/3">
        <a href="https://ankit.10xdevlab.in" target="_blank">
          <button className="border-0  font-bold rounded-md font-Bricolage  px-4 py-2 cursor-pointer bg-[#FACC35] outline-0  min-w-32">
            Portfolio
          </button>
        </a>

        <a href="https://jj.10xdevlab.in" target="_blank">
          <button className="border-0  font-bold rounded-md font-Bricolage bg-[#FACC35] outline-0  px-4 py-2 cursor-pointer min-w-32">
            Job Portal
          </button>
        </a>

        <a href="https://techtalkies.10xdevlab.in" target="_blank">
          <button className="border-0  font-bold rounded-md font-Bricolage bg-[#FACC35] outline-0  px-4 py-2 cursor-pointer min-w-32">
            Blogs
          </button>
        </a>
      </div>

      <div className="flex justify-center gap-6 sm:flex-row  lg:w-1/3">
        <a href="mailto:kashyap25ankit@gmail.com" target="_blank">
          <Mail color="#ffffff" />
        </a>
        <a href="https://github.com/kashyap1ankit" target="_blank">
          <Github color="#ffffff" />
        </a>
        <a href="https://x.com/kashyap_tweetts/" target="_blank">
          <Twitter color="#ffffff" />
        </a>
      </div>
    </div>
  );
}

export default App;
