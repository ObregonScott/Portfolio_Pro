import React from "react";
import { FaGithub } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { BsFillPersonLinesFill, BsLinkedin } from "react-icons/bs";

const Social = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <BsLinkedin size={30} className='text-white group-hover:text-blue-600 group-hover:bg-white rounded-md duration-500'/>
        </>
      ),
      href: "www.linkedin.com/in/scott-obregon",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} className='bg-black text-white group-hover:text-yellow-400 rounded-full duration-500' />
        </>
      ),
      href: "https://github.com/ObregonScott",
    },
    {
      id: 3,
      child: (
        <>
          Mail <GoMail size={30} className='text-white group-hover:text-red-600 duration-500'/>
        </>
      ),
      href: "mailto:obregon.scott@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} className='text-white group-hover:text-black duration-500'/>
        </>
      ),
      href: "/BBKING.JPG",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className=" group hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
