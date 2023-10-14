import Image from "next/image";

interface AvatarProps {
  size?: "32" | "100";
  className?: string;
}

const Avatar = ({ size = "32", className, ...rest }: AvatarProps) => {
  return (
    <div className={className}>
      <Image
        height={size}
        width={size}
        src="/images/avatar-image.png"
        alt=""
        {...rest}
      />
    </div>
  );
};

export default Avatar;
