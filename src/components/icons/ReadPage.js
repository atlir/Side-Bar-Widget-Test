import React from "react";

const SvgReadPage = props => (
  <svg {...props} viewBox="0 0 36 36">
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h36v36H0z" />
      <path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 12v12m4.5-10v6m4.5-6v7m4.5-9v11m4-9v7m8-9v11m-4-15v19m11-11v2m-3-6v11"
      />
    </g>
  </svg>
);
SvgReadPage.defaultProps = {
    color: '#3C4564',
    width: '32',
    height: '32',
};
export default SvgReadPage;
