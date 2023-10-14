import { IconProps } from "../../lib/schema";

export const IconCopy = (props: IconProps) => {
  const { height, width, className } = props;
  return (
    <span className={className}>
      <svg
        width={width || "24"}
        height={height || "24"}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.25 2.55554C7.74011 2.55554 6.5 3.79565 6.5 5.30554V16.3055C6.5 17.8154 7.74011 19.0555 9.25 19.0555H17.25C18.7599 19.0555 20 17.8154 20 16.3055V5.30554C20 3.79565 18.7599 2.55554 17.25 2.55554H9.25ZM9.25 4.05554H17.25C17.9491 4.05554 18.5 4.60643 18.5 5.30554V16.3055C18.5 17.0047 17.9491 17.5555 17.25 17.5555H9.25C8.55089 17.5555 8 17.0047 8 16.3055V5.30554C8 4.60643 8.55089 4.05554 9.25 4.05554ZM5.5 5.05554L4.89062 5.46179C4.33412 5.83279 4 6.45735 4 7.12585V16.8055C4 19.429 6.1265 21.5555 8.75 21.5555H15.4297C16.0987 21.5555 16.7233 21.2214 17.0938 20.6649L17.5 20.0555H8.75C6.955 20.0555 5.5 18.6005 5.5 16.8055V5.05554Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
};
