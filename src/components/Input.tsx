import { ComponentProps, forwardRef } from 'react';
import { cn } from '../utils/cn';

interface InputProps extends ComponentProps<'input'> {
  name: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, name, id, className, type, ...props }, ref) => {
    const inputId = id ?? name;

    return (
      <div className="relative">
        <input
          {...props}
          ref={ref}
          name={name}
          id={inputId}
          className={cn(
            'bg-white w-full rounded-lg border border-gray-500 px-3 h-[52px] text-gray-800 pt-4 outline-none peer placeholder-shown:pt-0 focus:border-gray-800 transition-all',
            className,
          )}
          placeholder=" "
          type={type}
        />

        <label
          htmlFor={inputId}
          className="absolute text-xs left-[13px] top-1 pointer-events-none text-gray-700 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all"
        >
          {placeholder}
        </label>
      </div>
    );
  },
);

Input.displayName = 'Input';
