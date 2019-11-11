import React from "react";

const SvgKeyboard = props => (
    <svg viewBox="0 0 36 36" {...props}>
        <g fill="none" fillRule="evenodd">
            <path d="M0 0h36v36H0z" />
            <g fillRule="nonzero" stroke={props.color} strokeWidth={2} transform="translate(0 9)">
                <rect width={33.053} height={16.783} x={1.474} y={1.118} rx={2} />
                <path
                    strokeLinecap="square"
                    d="M9.474 13.263h17.052m-20.368 0H5.21m2.369-4.737H5.21m6.632 0h-.947m5.684 0h-.947m5.684 0h-.948m5.685 0h-.948m5.685 0h-.948m.948 4.737h-.948"
                />
            </g>
        </g>
    </svg>
);
SvgKeyboard.defaultProps = {
    color: '#3C4564',
    width:"32",
    height:"32"
};

export default SvgKeyboard;
