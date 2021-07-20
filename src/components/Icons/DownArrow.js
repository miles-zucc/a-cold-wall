import React from "react";

const DownArrow = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="13"
      fill="none"
      viewBox="0 0 22 13"
      className={className}
    >
      <g clip-path="url(#clip0)">
        <path stroke="#707070" d="M.415 1.292l10.23 10.229L20.872 1.292"></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <path
            fill="#fff"
            d="M0 0H11.289V21.165H0z"
            transform="rotate(90 10.144 11.083)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default DownArrow;
