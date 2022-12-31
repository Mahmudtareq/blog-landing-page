import React from 'react';
import BlogBanner from '../../components/BlogBanner/BlogBanner';
import BlogSideNav from '../../components/BlogSideNav/BlogSideNav';
import CardTailwindCss from '../../components/CardTailwindCss/CardTailwindCss';
import MainHeader from '../../components/MainHeader/MainHeader';
import SideNavHeader from '../../components/SideNavHeader/SideNavHeader';

const Blog = () => {
  return (
    <div>
      <BlogBanner />
      <MainHeader />
      <div className=" mx-auto max-w-[1140px] grid lg:grid-cols-3 md:grid-cols-1 gap-1 py-4">
        <div className="lg:order-first order-last">
          <SideNavHeader />
          <BlogSideNav />
        </div>
        <div className="lg:col-span-2 md:order-fast">
          <CardTailwindCss />
          <CardTailwindCss />
          <CardTailwindCss />
        </div>
      </div>
    </div>
  );
};

export default Blog;
