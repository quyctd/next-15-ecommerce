import type { SVGProps } from "react";
const SvgJpFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 17 12"
    {...props}
  >
    <rect width={16.8} height={12} y={0.008} fill="#fff" rx={3} />
    <path
      fill="#F93939"
      d="M8.4 8.808a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6"
    />
  </svg>
);
export default SvgJpFlag;
