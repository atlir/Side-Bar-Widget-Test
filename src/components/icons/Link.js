import React from "react";

const SvgLink = props => (
  <svg {...props} viewBox="0 0 36 36">
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h36v36H0z" />
      <path
        d="M22.364 10h4.363a7.273 7.273 0 110 14.545h-4.363m-8.728 0H9.273a7.273 7.273 0 110-14.545h4.363m-1.454 7.273h11.636"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </g>
  </svg>
);
SvgLink.defaultProps = {
    color: '#3C4564',
    width: '32',
    height: '32',
};
export default SvgLink;
