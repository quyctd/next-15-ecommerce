import type { SVGProps } from "react";
const SvgGlobe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="M17.5 10a7.5 7.5 0 0 1-7.5 7.5m7.5-7.5A7.5 7.5 0 0 0 10 2.5m7.5 7.5h-15m7.5 7.5A7.5 7.5 0 0 1 2.5 10m7.5 7.5c1.38 0 2.5-3.358 2.5-7.5S11.38 2.5 10 2.5m0 15c-1.38 0-2.5-3.358-2.5-7.5S8.62 2.5 10 2.5M2.5 10A7.5 7.5 0 0 1 10 2.5"
    />
  </svg>
);
export default SvgGlobe;
