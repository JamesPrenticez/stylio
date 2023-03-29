import React, {type ReactNode} from "react"

interface ButtonProps {
  label: string;
  children?: ReactNode;
}

const Button = ({children, label}:ButtonProps) => {
  return (
    <button>
      {children}
    </button>
  )
}

export default Button