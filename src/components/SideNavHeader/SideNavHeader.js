import React from 'react';
import { DatePicker } from '@mantine/dates';

const SideNavHeader = () => {
  return (
    <div className=" hover:ring-offset-3 hover:ring-offset-3 hover:ring-2 ring-slate-400  mx-auto my-3 bg-white rounded-xl shadow-lg overflow-hidden max-w-md max-h-[320px] p-10 space-y-8 md:max-w-2xl">
      <h1 className="text-left text-bold text-[#4C43B7] text-4xl">Archive</h1>
      <div className="rounded-lg  p-5 flex items-center justify-center shadow-lg  bg-white text-dark">
        <DatePicker
          placeholder="Year"
          rightSection={
            <svg
              width="20"
              height="16"
              viewBox="0 0 25 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.826 15.1268L0.328387 0.69837L24.2763 0.917706L11.826 15.1268Z"
                fill="gray"
              />
            </svg>
          }
          classNames={{
            input: 'bg-gray-300 py-8 px-12 ',
            rightSection: ' m-2 ',
          }}
        />
      </div>
    </div>
  );
};

export default SideNavHeader;
