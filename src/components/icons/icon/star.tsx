import React from 'react';

interface SVGRProps {
  color?: string;
  size?: string | number;
}

const Star = React.forwardRef<SVGSVGElement, SVGRProps>((props, ref) => {
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
        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
    </svg>
  );
})

Star.displayName = 'Star';

export default Star;