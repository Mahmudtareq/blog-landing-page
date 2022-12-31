import { Divider, List, ThemeIcon } from '@mantine/core';
import React from 'react';
import { IconCircleCheck } from '@tabler/icons';

const BlogSideNav = () => {
  return (
    <div className=" hover:ring-offset-3 hover:ring-offset-3 hover:ring-2 ring-slate-400  mx-auto my-3 bg-white rounded-xl shadow-lg overflow-hidden max-w-md h-auto p-10 space-y-8 md:max-w-2xl ">
      <h1 className="text-center my-2 text-bold text-[#4C43B7] text-3xl">
        Recent Post
      </h1>
      <Divider className="h-0.5 border-0 m-auto w-full my-2 bg-purple-300" />

      <List
        // spacing="md"
        size="xl"
        className="p-4 items-center space-y-2"
        icon={
          <ThemeIcon color="black" size={22} radius="xl">
            <IconCircleCheck size={16} />
          </ThemeIcon>
        }
        type="ordered"
        withPadding
      >
        <List.Item className=" hover:text-gray-500 ">
          <a href="#">What’s New with VMware vSphere 7?</a>
        </List.Item>
        <List.Item className=" hover:text-gray-500">
          <a href="#">What’s New with VMware vSphere 7?</a>
        </List.Item>
        <List.Item className=" hover:text-gray-500">
          <a href="#">What’s New with VMware vSphere 7?</a>
        </List.Item>
        <List.Item className=" hover:text-gray-500">
          <a href="#">What’s New with VMware vSphere 7?</a>
        </List.Item>
        <List.Item className=" hover:text-gray-500">
          <a href="#">What’s New with VMware vSphere 7?</a>
        </List.Item>
      </List>
    </div>
  );
};

export default BlogSideNav;
