import { type ReactNode } from "react";
interface ButtonProps {
    label: string;
    children?: ReactNode;
}
declare const Button: ({ children, label }: ButtonProps) => JSX.Element;
export default Button;
