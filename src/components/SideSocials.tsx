import { BsLinkedin, BsGithub, BsPersonCircle } from "react-icons/bs";

const SideSocials = (): JSX.Element => {
  return (
    <div className="hidden xl:flex flex-col top-[35%] left-0 fixed z-30">
      <ul>
        <li className="flex justify-between items-center w-40 h-14 px-4 bg-black ml-[-100px] duration-500 hover:rounded-md hover:ml-[-10px] rounded-tr-md">
          <a
            href="https://www.linkedin.com/in/rafa%C5%82-fikus-687815245/"
            target="_blank"
            className="flex justify-between items-center w-full text-white font-semibold ml-4"
          >
            LinkedIn
            <BsLinkedin className="text-2xl" />
          </a>
        </li>
        <li className="flex justify-between items-center w-40 h-14 px-4 bg-black ml-[-100px] duration-500 hover:rounded-md hover:ml-[-10px]">
          <a
            href="https://drive.google.com/file/d/1IKsOQfcunOYjOVgvi5ZyAr1Mv-iQ8v4L/view?usp=sharing"
            target="_blank"
            className="flex justify-between items-center w-full text-white font-semibold ml-4"
          >
            Resume
            <BsPersonCircle className="text-2xl" />
          </a>
        </li>
        <li className="flex justify-between items-center w-40 h-14 px-4 bg-black ml-[-100px] duration-500 hover:rounded-md hover:ml-[-10px] rounded-br-md">
          <a
            href="https://github.com/Vertori"
            target="_blank"
            className="flex justify-between items-center w-full text-white font-semibold ml-4"
          >
            Github
            <BsGithub className="text-2xl" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideSocials;
