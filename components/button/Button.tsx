import React from "react";

interface ButtonStyles {
  primary: string;
  secondary: string;
}

interface ButtonProps {
  type: keyof ButtonStyles;
  children: React.ReactNode;
  additionalClasses?: string;
  isButton?: boolean;
  href?: string;
}

export const ButtonType: ButtonStyles = {
  primary:
    "text-center hover:text-secondary-clr bg-secondary-clr hover:bg-transparent border border-2 border-secondary-clr text-base text-white font-medium rounded-md transition py-3 px-4",
  secondary:
    "text-center text-teriary-clr hover:text-white bg-white hover:bg-teriary-clr border-2 border-teriary-clr text-base font-medium rounded-md transition py-3 px-4",
};

export default function Button({
  type,
  additionalClasses = "",
  children,
  isButton = true,
  href = "/",
}: ButtonProps) {
  const classNames = ButtonType[type] + " " + additionalClasses;

  return (
    <>
      {isButton ? (
        <button type="button" className={classNames}>
          {children}
        </button>
      ) : (
        <a href={href} className={classNames}>
          {children}
        </a>
      )}
    </>
  );
}
