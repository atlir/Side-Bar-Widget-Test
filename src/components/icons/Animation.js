import React from "react";

const SvgAnimation = props => (
  <svg {...props} viewBox="0 0 36 36">
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h36v36H0z" />
      <path
        d="M18 4v5.6m0 16.8V32M8.102 8.102l3.962 3.962m11.872 11.872l3.962 3.962M4 18h5.6m16.8 0H32M8.102 27.898l3.962-3.962m11.872-11.872l3.962-3.962"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </g>
  </svg>
);
SvgAnimation.defaultProps = {
    color: '#3C4564',
    width:"32",
    height:"32",
};


export default SvgAnimation;
