import React from "react";

const SvgStructure = props => (
  <svg {...props} viewBox="0 0 36 36">
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h36v36H0z" />
      <path
        d="M18.5 3L4 10.25l14.5 7.25L33 10.25zM4 24.75L18.5 32 33 24.75M4 17.5l14.5 7.25L33 17.5"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </g>
  </svg>
);
SvgStructure.defaultProps = {
    color: '#3C4564',
    width: '32',
    height: '32',
};
export default SvgStructure;
