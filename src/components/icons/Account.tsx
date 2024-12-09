import type { SVGProps } from "react";
const SvgAccount = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 33 32"
    {...props}
  >
    <g clipPath="url(#account_svg__a)">
      <path
        fill="currentColor"
        d="M16.094 2.667C8.734 2.667 2.761 8.64 2.761 16s5.973 13.333 13.333 13.333S29.427 23.36 29.427 16 23.454 2.667 16.094 2.667m0 4c2.213 0 4 1.786 4 4s-1.787 4-4 4-4-1.787-4-4 1.787-4 4-4m0 18.933a9.6 9.6 0 0 1-8-4.293c.04-2.654 5.333-4.107 8-4.107 2.653 0 7.96 1.453 8 4.107a9.6 9.6 0 0 1-8 4.293"
      />
    </g>
    <defs>
      <clipPath id="account_svg__a">
        <path fill="currentColor" d="M.094 0h32v32h-32z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAccount;
