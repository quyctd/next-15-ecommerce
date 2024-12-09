import type { SVGProps } from "react";
const SvgChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 21"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m7.5 4.667 5.833 5.833L7.5 16.333"
    />
  </svg>
);
export default SvgChevronRight;
