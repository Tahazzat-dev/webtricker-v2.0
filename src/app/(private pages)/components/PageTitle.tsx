import React from "react";

export default function PageTitle({ title }: { title: string }) {
  return (
    <div className="w-full">
      <h1 className="text-center wt_fs-3xl">
        {title}
      </h1>
    </div>
  );
}
