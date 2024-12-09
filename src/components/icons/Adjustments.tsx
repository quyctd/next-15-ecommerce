import type { SVGProps } from "react";
const SvgAdjustments = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 12h2m-2 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0M6 6a2 2 0 1 0 4 0M6 6a2 2 0 1 1 4 0M6 6H4m6 0h10m-6 6H4m2 6a2 2 0 1 0 4 0m-4 0a2 2 0 1 1 4 0m-4 0H4m6 0h10"
    />
  </svg>
);
export default SvgAdjustments;
