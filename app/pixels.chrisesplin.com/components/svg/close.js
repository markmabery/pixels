import React from 'react';
import constants from '~/constants';

export default function CloseSvg({
  width = 24,
  height = 24,
  fill = constants.COLORS.MDC_THEME_PRIMARY,
  onClick = () => {},
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      onClick={onClick}
    >
      <path
        fill={fill}
        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
      />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
}
