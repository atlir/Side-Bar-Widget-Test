import React from "react";

const SvgContrast = props => (
  <svg {...props} viewBox="0 0 36 36">
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h36v36H0z" />
      <g         stroke={props.color}
                 transform="translate(2 2)">
        <rect
          width={32}
          height={22.4}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          rx={2}
        />
        <circle cx={16} cy={11} r={4} fill="#3C4564" fillRule="nonzero" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.6 28.8h12.8M16 22.4v6.4"
        />
      </g>
    </g>
  </svg>
);
SvgContrast.defaultProps = {
    color: '#3C4564',
    width: '32',
    height: '32',
};

export default SvgContrast;
