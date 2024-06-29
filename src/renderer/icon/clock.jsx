import * as React from "react"

const Clock = (props) => (
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
        d="M20.3 9.7A7.468 7.468 0 0 0 15 7.5V15l-5.3 5.3c2.925 2.925 7.675 2.925 10.613 0A7.488 7.488 0 0 0 20.3 9.7ZM15 2.5C8.1 2.5 2.5 8.1 2.5 15S8.1 27.5 15 27.5 27.5 21.9 27.5 15 21.9 2.5 15 2.5ZM15 25C9.475 25 5 20.525 5 15S9.475 5 15 5s10 4.475 10 10-4.475 10-10 10Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h30v30H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default Clock
