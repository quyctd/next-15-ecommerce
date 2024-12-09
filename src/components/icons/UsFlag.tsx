import type { SVGProps } from "react";
const SvgUsFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 17 12"
    {...props}
  >
    <g clipPath="url(#us-flag_svg__a)">
      <rect width={16.8} height={12} y={0.008} fill="#fff" rx={3} />
      <path
        fill="#1A47B8"
        fillRule="evenodd"
        d="M0 .008h7.2v5.6H0z"
        clipRule="evenodd"
      />
      <path
        fill="#F93939"
        fillRule="evenodd"
        d="M7.2.008v.8h9.6v-.8zm0 1.6v.8h9.6v-.8zm0 1.6v.8h9.6v-.8zm0 1.6v.8h9.6v-.8zM0 6.408v.8h16.8v-.8zm0 1.6v.8h16.8v-.8zm0 1.6v.8h16.8v-.8zm0 1.6v.8h16.8v-.8z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M.8.808v.8h.8v-.8zm1.6 0v.8h.8v-.8zm1.6 0v.8h.8v-.8zm1.6 0v.8h.8v-.8zm-.8.8v.8h.8v-.8zm-1.6 0v.8H4v-.8zm-1.6 0v.8h.8v-.8zm-.8.8v.8h.8v-.8zm1.6 0v.8h.8v-.8zm1.6 0v.8h.8v-.8zm1.6 0v.8h.8v-.8zm-4.8 1.6v.8h.8v-.8zm1.6 0v.8h.8v-.8zm1.6 0v.8h.8v-.8zm1.6 0v.8h.8v-.8zm-.8-.8v.8h.8v-.8zm-1.6 0v.8H4v-.8zm-1.6 0v.8h.8v-.8z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="us-flag_svg__a">
        <rect width={16.8} height={12} y={0.008} fill="#fff" rx={3} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUsFlag;
