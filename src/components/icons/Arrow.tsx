import { FunctionComponent, SVGAttributes } from "react";

interface Props extends SVGAttributes<SVGSVGElement> {
  color?: string;
}

const ArrowIcon: FunctionComponent<Props> = ({ color = "black", ...props }) => {
  return (
    <svg
      width="14"
      height="24"
      viewBox="0 0 14 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.51473 1.39338L13.0607 10.9393C13.6465 11.5251 13.6465 12.4749 13.0607 13.0606L3.51473 22.6066C2.92894 23.1924 1.9792 23.1924 1.39341 22.6066C0.807622 22.0208 0.807623 21.0711 1.39341 20.4853L9.87869 12L1.39341 3.5147C0.807624 2.92891 0.807624 1.97917 1.39341 1.39338C1.9792 0.807594 2.92895 0.807594 3.51473 1.39338Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowIcon;
