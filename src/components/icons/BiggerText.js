import React from "react";

const SvgBiggerText = props => (
  <svg {...props} viewBox="0 0 36 36">
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h36v36H0z" />
      <g fill={props.color}>
        <path d="M23.056 29V8.968H15.44V7.016h17.28v1.952h-7.616V29z" />
        <path
          stroke={props.color}
          strokeWidth={0.5}
          d="M7.094 29V17.732H2.81v-1.098h9.72v1.098H8.246V29z"
        />
      </g>
    </g>
  </svg>
);
SvgBiggerText.defaultProps = {
    color: '#3C4564',
    width: '32',
    height: '32',
};

export default SvgBiggerText;
