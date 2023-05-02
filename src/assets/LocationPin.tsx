import React from 'react';

function LocationPin() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="256"
      height="256"
      viewBox="0 0 256 256">
      <path
        fill="#000"
        strokeMiterlimit="10"
        strokeWidth="1"
        d="M45 0C25.463 0 9.625 15.838 9.625 35.375c0 8.722 3.171 16.693 8.404 22.861L45 90l26.97-31.765c5.233-6.167 8.404-14.139 8.404-22.861C80.375 15.838 64.537 0 45 0zm0 48.705c-8.035 0-14.548-6.513-14.548-14.548S36.965 19.609 45 19.609s14.548 6.513 14.548 14.548S53.035 48.705 45 48.705z"
        transform="matrix(2.81 0 0 2.81 1.407 1.407)"></path>
    </svg>
  );
}

export default React.memo(LocationPin);
