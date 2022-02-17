import { FunctionComponent } from "react";

interface Props {
  color?: string;
  length?: number;
}

const LineIcon: FunctionComponent<Props> = ({ color = "black", length = 128, ...props }) => {
  return (
    <svg
      width={length}
      height="3"
      viewBox={`0 0 ${length} 3`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1={length}
        y1="1.5"
        x2="1.5"
        y2="1.5"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default LineIcon;
