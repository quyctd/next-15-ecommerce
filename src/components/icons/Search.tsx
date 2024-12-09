import type { SVGProps } from "react";
const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14M15 15l6 6"
    />
  </svg>
);
export default SvgSearch;
