"use client";
import galleryModern from "@/app/fonts/gallery";
import { latestBlogs } from "@/data/blogs";
import Container from "@/sharedComponets/ui/wrapper/Container";
import { TBlog } from "@/types/data";
import { getSlicedText } from "@/utils/slicedText";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }: { blog: TBlog }) => {
  return (
    <div className="w-full dark:border dark:border-slate-700 shadow hover:shadow-xl duration-300 rounded-[10px]">
      <div className="w-full h-[250px] group rounded-t-[8px] overflow-hidden ">
        <Image
          src={blog.thumnail}
          className="duration-300 group-hover:scale-110 w-full h-full object-cover"
          width={300}
          height={250}
          alt={blog.title}
        />
      </div>
      <div className="w-full p-4 pt-5">
        <h6 className="heading mb-2">{getSlicedText(blog.title, 50)}</h6>
        <p>{blog.excerpt ? getSlicedText(blog.excerpt, 150) : ""}</p>
        <div className="w-full flex justify-between items-center mt-3">
          <p className="bold">{blog.date}</p>{" "}
          <Link
          data-wt-hide-cursor
            className="wt_btn duration-300 bold font-semibold hover:underline"
            href={`/${blog.title}`}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

// ===== root component =======
export default function LatestBlogs() {
  return (
    <section className="py-8 md:py-10 lg:py-14 xl:py-16 2xl:py-18">
      <Container>
        <h2 className="heading inline !leading-[100%]">Updates,</h2>
        <div className="w-full flex flex-wrap md:flex-nowrap items-end gap-2">
          <h2 className={`heading !leading-[100%] ${galleryModern.className}`}>
            Insights
          </h2>
          <h6 className="mb-2 2xl:mb-4 heading">Our Newest Articles</h6>
        </div>
        <div className=" section-inner-speacing w-full grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 gap-y-14 md:gap-8 md:gap-y-14 lg:gap-10 lg:gap-y-14">
          {latestBlogs.map((blog) => (
            <BlogCard blog={blog} key={blog.id} />
          ))}
        </div>
      </Container>
    </section>
  );
}
