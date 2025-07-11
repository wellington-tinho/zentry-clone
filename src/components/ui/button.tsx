
import type { ReactNode } from "react";

interface IPropsButton {
  className?: string
  children?: ReactNode
  variant?: "main" | "navbar" | "default"
}


const variantButton = {
  "default": "transition-all ease-in-out w-fit flex gap-2 items-center py-2 px-3 cursor-pointer rounded-full bg-violet-50 text-black hover:rounded-lg",
  "main": "w-fit flex gap-2 items-center py-2 px-3 cursor-pointer rounded-full bg-violet-50 text-black",
  "navbar": "py-2 px-3 text-white duration-300 ease-in hover:w-fit hover:flex hover:gap-2 hover:items-center hover:py-2 hover:px-3 hover:cursor-pointer hover:rounded-full hover:bg-violet-50 hover:text-black",
  "clean": " ",
}

export function Button({ children, variant='default', className, ...props }:IPropsButton){
  return (
    <button
      className={`h-8 ${variantButton[variant]}  ${className} `}
      {...props}
    >
        {children}
    </button>
  );
};
