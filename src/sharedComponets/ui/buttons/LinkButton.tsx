"use client";

import Link from "next/link";

interface ButtonProps {
  label: string;
  labelStyle?: string;
  className?:string;
  href: string;
}

export default function LinkButton({
  label,
  labelStyle = "",
  className='',
  href,
}: ButtonProps) {
  return (
    <Link href={href} className={`wt_btn_cta ${className}`}>
      <span className="wt_btn_cta-border"></span>
      <span className="wt_btn_cta-ripple">
        <span></span>
      </span>
      <span className="wt_btn_cta-title">
        <span className={labelStyle} data-text={label}>
          {label}
        </span>
      </span>
    </Link>
  );
}
