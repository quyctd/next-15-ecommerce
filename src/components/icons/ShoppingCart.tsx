import type { SVGProps } from "react";
const SvgShoppingCart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <g clipPath="url(#shopping-cart_svg__a)">
      <path
        fill="currentColor"
        d="M16.519 12.998c.75 0 1.41-.41 1.75-1.03l3.58-6.49a.996.996 0 0 0-.87-1.48h-14.8l-.94-2h-3.27v2h2l3.6 7.59-1.35 2.44c-.73 1.34.23 2.97 1.75 2.97h12v-2h-12l1.1-2zm-9.39-7h12.15l-2.76 5h-7.02zm.84 12c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2m10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2"
      />
    </g>
    <defs>
      <clipPath id="shopping-cart_svg__a">
        <path fill="currentColor" d="M.094 0h24v24h-24z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShoppingCart;
