import {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef,
} from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, ...rest }, ref) => {
    return (
      <input
        {...rest}
        name={name}
        ref={ref}
        className="border-gray-700 border-2 rounded-lg p-1"
      />
    );
  },
);

Input.displayName = "Input";
