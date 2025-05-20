"use client";
import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  message: string;
};

// ===== root component ======
export default function ContactForm() {
  const {
    register,
    // setValue,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  //   handlers
  const onSubmit = handleSubmit((data) => {
    // reset the form
    console.log(data);
    reset()
  });
  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-5">
      {/* ======= input === */}
      <div className="w-full">
        <label className="block" htmlFor="contactName">
          Name
        </label>
        <input
          data-wt-hide-cursor
          className="cursor-hide block wt_fs-md w-full py-1.5 mt-1.5 px-4 rounded-[4px] outline-none border border-slate-300 dark:border-slate-700"
          id="contactName"
          type="text"
          placeholder="John Doe"
          {...register("name", { required: "Name is required" })}
        />
        {errors?.name ? (
          <p className="mt-1 text-red-500">{errors.name.message}</p>
        ) : (
          <></>
        )}
      </div>
      {/* ======= input === */}
      <div className="w-full">
        <label htmlFor="contactEmail">Email</label>
        <input
          data-wt-hide-cursor
          className="cursor-hide block wt_fs-md w-full py-1.5 mt-1.5 px-4 rounded-[4px] outline-none border border-slate-300 dark:border-slate-700"
          type="text"
          id="contactEmail"
          placeholder="example@gmail.com"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email format",
            },
          })}
        />
        {errors?.email ? (
          <p className="mt-1 text-red-500">{errors.email.message}</p>
        ) : (
          <></>
        )}
      </div>
      {/* ======= input === */}
      <div className="w-full">
        <label htmlFor="contactMessage">Message</label>
        <textarea
          data-wt-hide-cursor
          id="contactMessage"
          placeholder="Enter your message"
          className="cursor-hide min-h-[100px] block wt_fs-md w-full py-1.5 mt-1.5 px-4 rounded-[4px] outline-none border border-slate-300 dark:border-slate-700"
          {...register("message", { required: "Message is required" })}
        ></textarea>
        {errors?.message ? (
          <p className="mt-1 text-red-500">{errors.message.message}</p>
        ) : (
          <></>
        )}
      </div>
      <div className="w-full">
        <button
          data-wt-hide-cursor
          className="w-full cursor-hide btn-reverse-bg py-2 wt_fs-md px-2 rounded-[4px]"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};
