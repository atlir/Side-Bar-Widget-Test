import React from "react";

const SvgTooltips = props => (
  <svg {...props} viewBox="0 0 36 36">
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h36v36H0z" />
      <g transform="translate(4 5)">
        <path
          stroke={props.color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M28 18.667a3.111 3.111 0 01-3.111 3.11H6.222L0 28V3.111A3.111 3.111 0 013.111 0H24.89A3.111 3.111 0 0128 3.111v15.556zM14 8.849v7.697"
        />
        <circle cx={14} cy={5} r={1} fill="#3C4564" />
      </g>
    </g>
  </svg>
);
SvgTooltips.defaultProps = {
    color: '#3C4564',
    width: '32',
    height: '32',
};
export default SvgTooltips;
