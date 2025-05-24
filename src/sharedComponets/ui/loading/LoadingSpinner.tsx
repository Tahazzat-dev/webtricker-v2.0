import React from "react";
import { SpinnerIcon } from "../icons/Icons";

const LoadingSpinner = ({ className = "" }: { className?: string }) => {
  return <SpinnerIcon className={` ${className} !animate-spin`} />;
};

export default LoadingSpinner;
