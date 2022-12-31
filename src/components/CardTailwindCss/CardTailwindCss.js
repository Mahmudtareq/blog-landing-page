import React from 'react';
import { CiClock2 } from 'react-icons/ci';
import { BsBook } from 'react-icons/bs';

const CardTailwindCss = () => {
  return (
    <div className="my-5 p-3 max-w-md mx-auto hover:ring-offset-3 hover:ring-2 ring-slate-400  bg-white  rounded-xl shadow-md overflow-hidden md:flex-row md:max-w-2xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-40 w-full object-cover md:h-auto md:w-48  rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="https://i.ibb.co/BPkczkN/login-1.png"
            alt="Modern building architecture"
          />
        </div>

        <div className="p-8 justify-center sm:space-y-4">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            What’s New with VMware vSphere 7?
          </h2>
          <div className="sm:flex justify-between  items-center my-2 m-auto">
            <div className="flex items-center ">
              <CiClock2 className=" mr-2 text-bold" size={25} />{' '}
              <span className=" cursor-pointer text-[ #000000] font-semibold">
                {' '}
                14 oct 2014
              </span>
            </div>
            <div className="flex items-center cursor-pointer">
              <BsBook className=" mr-2 text-bold" size={25} />
              <span className="cursor-pointer text-[ #000000] font-semibold">
                Security Awarness Training
              </span>
            </div>
          </div>
          <p className="mt-1 mb-3 font-normal  text-gray-700 dark:text-gray-400">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardTailwindCss;
