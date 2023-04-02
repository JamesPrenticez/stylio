import React, {type ReactNode} from "react"
import "./Button.css"

interface ButtonProps {
  label: string;
  children?: ReactNode;
}

const Button = ({children, label}:ButtonProps) => {
  return (
    <button>
      {children ? children : label}
    </button>
  )
}

export default Button