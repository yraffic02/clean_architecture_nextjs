import { ForwardRefRenderFunction, InputHTMLAttributes, forwardRef,  } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(({name, ...rest}, ref)=>{
    return (
        <input {...rest} name={name} ref={ref}/>
    )
})

Input.displayName = 'Input'