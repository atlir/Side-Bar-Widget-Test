import React from "react";

const SvgCursor = props => (
  <svg {...props} viewBox="0 0 36 36">
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h36v36H0z" />
      <path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.998 16.552l9.527 9.527-4.446 4.446-9.527-9.527-4.052 9.064L6 6l24.062 6.5z"
      />
    </g>
  </svg>
);
SvgCursor.defaultProps = {
    color: '#3C4564',
    width: '32',
    height: '32',
};

export default SvgCursor;
