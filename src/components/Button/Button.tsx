import "./Button.scss";
import  { ReactNode, CSSProperties, MouseEventHandler } from 'react';
 interface ButtonProps {
  children: ReactNode;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
const Button = ({ onClick, children, style }:ButtonProps) => (
  <button className="Button" style={style} onClick={onClick}>
    {children}
  </button>
);

export default Button;
