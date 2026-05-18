import Link from "next/link";
import { RightArrow } from "@/assets/CustomIcons";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  children: string;
  variant: ButtonVariant;
  href?: string;
  showArrow?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const variants: Record<ButtonVariant, string> = {
  primary: "bg-[#22739C] text-white  ",
  secondary: "bg-white text-[#22739C]",
};

const baseStyle =
  "px-14 py-6 cursor-pointer rounded-[58px] inline-flex items-center justify-center gap-7 text-base sm:text-[28px] font-bold leading-7 tarcking-[0.5px]";

export default function Button({
  children,
  variant,
  href,
  showArrow = false,
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = `${baseStyle} ${variants[variant]} ${className}`.trim();

  const content = (
    <>
      {children}
      {showArrow &&
        <span>
          <RightArrow />
        </span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
