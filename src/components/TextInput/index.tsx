import { ChangeEvent, FC, ReactNode } from 'react';
import clsx from 'clsx';

interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: {
    root?: string;
    input?: string;
  };
  leftIcon?: ReactNode;
  type?: string;
  name: string;
  error?: string;
}

const TextInput: FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  className,
  leftIcon,
  type = 'text',
  name,
  error,
}) => {
  return (
    <div className={clsx('w-full', className?.root)}>
      {label && (
        <label
          role="label"
          aria-label={label}
          className={clsx('block text-menuActive mb-units-unit-11', {
            'text-red-600': error,
          })}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {leftIcon && (
          <div className="absolute left-units-unit-26 text-gray-400">
            {leftIcon}
          </div>
        )}
        <input
          role="search"
          aria-label={label ?? name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          className={clsx(
            'w-full px-4 py-2 border-none text-gray-600 bg-none focus:outline-none focus:ring-1 focus:ring-menuActive',
            {
              'pl-units-unit-60': leftIcon, // Add padding if left icon is present
              'border-red-600 text-red-600': error,
            },
            className?.input
          )}
        />
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          <span className="font-medium">{error}</span>
        </p>
      )}
    </div>
  );
};

export default TextInput;
