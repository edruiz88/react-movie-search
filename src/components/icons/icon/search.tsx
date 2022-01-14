import React from 'react';

interface SVGRProps {
  color?: string;
  size?: string | number;
}

const Search = React.forwardRef<SVGSVGElement, SVGRProps>((props, ref) => {
  const { color, size } = props;
  
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      // {...rest}
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <circle cx="10" cy="10" r="7"></circle>
        <line x1="21" y1="21" x2="15" y2="15"></line>
    </svg>
  );
})

Search.displayName = 'Search';

export default Search;