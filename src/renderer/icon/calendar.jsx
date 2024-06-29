import * as React from "react"

const Calendary = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#76808C"
        fillOpacity={0.2}
        d="M23.75 5H22.5V3.75c0-.688-.563-1.25-1.25-1.25-.688 0-1.25.563-1.25 1.25V5H10V3.75c0-.688-.563-1.25-1.25-1.25-.688 0-1.25.563-1.25 1.25V5H6.25a2.489 2.489 0 0 0-2.487 2.5L3.75 25a2.5 2.5 0 0 0 2.5 2.5h17.5c1.375 0 2.5-1.125 2.5-2.5V7.5c0-1.375-1.125-2.5-2.5-2.5Zm0 18.75c0 .688-.563 1.25-1.25 1.25h-15c-.688 0-1.25-.563-1.25-1.25v-12.5h17.5v12.5Zm-15-10h2.5v2.5h-2.5v-2.5Zm5 0h2.5v2.5h-2.5v-2.5Zm5 0h2.5v2.5h-2.5v-2.5Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h30v30H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default Calendary
