export const XMarkIcon = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="37"
      height="38"
      viewBox="0 0 37 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.19141 9.80762L27.5762 28.1924"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M9.19141 28.1924L27.5762 9.80761"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export const RightArrowLong = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="17"
      viewBox="0 0 22 17"
      fill="none"
    >
      <path
        d="M21.707 7.29292L14.707 0.292919C14.5184 0.110761 14.2658 0.00996641 14.0036 0.0122448C13.7414 0.0145233 13.4906 0.119692 13.3052 0.305101C13.1198 0.490509 13.0146 0.741321 13.0123 1.00352C13.01 1.26571 13.1108 1.51832 13.293 1.70692L18.586 6.99992H1C0.734784 6.99992 0.48043 7.10528 0.292893 7.29281C0.105357 7.48035 0 7.7347 0 7.99992C0 8.26514 0.105357 8.51949 0.292893 8.70703C0.48043 8.89456 0.734784 8.99992 1 8.99992H18.586L13.293 14.2929C13.1975 14.3852 13.1213 14.4955 13.0689 14.6175C13.0165 14.7395 12.9889 14.8707 12.9877 15.0035C12.9866 15.1363 13.0119 15.268 13.0622 15.3909C13.1125 15.5138 13.1867 15.6254 13.2806 15.7193C13.3745 15.8132 13.4861 15.8875 13.609 15.9377C13.7319 15.988 13.8636 16.0133 13.9964 16.0122C14.1292 16.011 14.2604 15.9834 14.3824 15.931C14.5044 15.8786 14.6148 15.8024 14.707 15.7069L21.707 8.70692C21.8945 8.51939 21.9998 8.26508 21.9998 7.99992C21.9998 7.73475 21.8945 7.48045 21.707 7.29292Z"
        fill="currentcolor"
      />
    </svg>
  );
};

export const SpinnerIcon = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" fill="currentcolor" />
    </svg>
  );
};
