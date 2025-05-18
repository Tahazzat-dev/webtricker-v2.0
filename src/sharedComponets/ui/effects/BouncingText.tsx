"use client";
import React from "react";

interface BouncingTextProps {
  text: string;
  interval?: number; 
  duration?: number;
  size?:string;
}

const BouncingText: React.FC<BouncingTextProps> = ({
  text,
  interval = 100,
  duration = 2,
  size="wt_fs-5xl",
}) => {
  return (
     <div className="inline-block bouncing-text-wrapper bold-text-reverse">
         <p className={`bouncing-text font-semibold text-center ${size}` }>
        {text.split("").map((char:string, index) => (
          <span
            key={index + char}
            className={`inline-block ${char===" " ?'opacity-0':'animate-bounce-custom' }`}
            style={{
              animationDelay: `${index * interval}ms`,
              animationDuration: `${duration}s`,
            }}
          >
            {char===" " ? "-" :char}
          </span>
        ))}
      </p>
     </div>
  );
};

export default BouncingText;
