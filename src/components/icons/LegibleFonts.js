import React from 'react';

const SvgLegibleFonts = props => (
    <svg {...props} viewBox="0 0 36 36">
        <g fill="none" fillRule="evenodd">
            <path d="M1 0h36v36H1z" />
            <path
                fill={props.color}
                d="M17.017 27.629l-1.994-4.55H3.96l-1.993 4.55H0L8.509 8.337h1.965l8.509 19.292h-1.966zm-12.271-6.29h9.491L9.491 10.555 4.746 21.34zm24.627-8.565c3.735 0 6.627 3.257 6.627 7.582 0 4.352-2.892 7.61-6.627 7.61-2.387 0-4.297-1.208-5.42-3.173v2.836h-1.74V8h1.74v7.947c1.123-1.966 3.033-3.173 5.42-3.173zm-.309 13.591c2.92 0 5.139-2.583 5.139-6.01 0-3.425-2.219-5.98-5.139-5.98-3.005 0-5.11 2.47-5.11 5.98 0 3.51 2.105 6.01 5.11 6.01z"
            />
        </g>
    </svg>
);
SvgLegibleFonts.defaultProps = {
    color: '#3C4564',
    width: '32',
    height: '32',
};
export default SvgLegibleFonts;
