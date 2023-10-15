import { IconProps } from "../../lib/schema";

export const IconNotification = (props: IconProps) => {
  const { height, width, className, ...rest } = props;
  return (
    <span className={className} {...rest}>
      <svg
        width={width || "24"}
        height={height || "24"}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.6386 2.18242C7.59682 2.37279 4.49988 5.84533 4.49988 9.86406V13.4979L3.17469 16.1639C3.17236 16.1687 3.17008 16.1736 3.16785 16.1785C2.63472 17.3123 3.49774 18.6736 4.75086 18.6736H8.99988C8.99988 20.3216 10.352 21.6736 11.9999 21.6736C13.6478 21.6736 14.9999 20.3216 14.9999 18.6736H19.2479C20.5011 18.6736 21.3652 17.3125 20.8319 16.1785C20.8297 16.1736 20.8274 16.1687 20.8251 16.1639L19.4999 13.4979V9.67363C19.4999 5.42053 15.9315 1.98032 11.6386 2.18242ZM11.7089 3.68047C15.1689 3.51758 17.9999 6.25473 17.9999 9.67363V13.6736C17.9998 13.7895 18.0265 13.9038 18.078 14.0076L19.4745 16.8182C19.5643 17.0106 19.4604 17.1736 19.2479 17.1736H4.75086C4.5384 17.1736 4.43534 17.0109 4.52527 16.8182V16.8172L5.92176 14.0076C5.97325 13.9038 5.99999 13.7895 5.99988 13.6736V9.86406C5.99988 6.6138 8.48961 3.8321 11.7089 3.68047ZM10.4999 18.6736H13.4999C13.4999 19.5107 12.837 20.1736 11.9999 20.1736C11.1628 20.1736 10.4999 19.5107 10.4999 18.6736Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
};
