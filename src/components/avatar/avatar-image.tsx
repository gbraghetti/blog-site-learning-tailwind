import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";

type AvatarSize = "xs" | "sm";

// Omite propriedades
type AvatarImageProps = Omit<ImageProps, "height" | "width"> & {
  size?: AvatarSize;
};

const avatarSize = {
  xs: "h-5 w-5",
  sm: "h-9 w-9",
};

export const AvatarImage = ({
  src,
  alt,
  size = "xs",
  ...rest
}: AvatarImageProps) => {
  return (
    <div
      // cn pra evitar ternário
      className={cn(
        "relative overflow-hidden rounded-full border-[1px] border-blue-200",
        avatarSize[size],
      )}
    >
      <Image src={src} alt={alt} fill />;
    </div>
  );
};
