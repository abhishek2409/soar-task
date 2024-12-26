import React from 'react';
import clsx from 'clsx';

interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: {
    root?: string;
    input?: string;
  };
  leftIcon?: React.ReactNode;
  type?: string;
}

const TextInput: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  className,
  leftIcon,
  type = 'text',
}) => {
  return (
    <div className={clsx('w-full', className?.root)}>
      {label && <label className="block text-gray-700 mb-1">{label}</label>}
      <div className="relative flex items-center">
        {leftIcon && (
          <div className="absolute left-3 text-gray-400">{leftIcon}</div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={clsx(
            'w-full px-4 py-2 border-none text-gray-600 bg-none focus:outline-none',
            {
              'pl-10': leftIcon, // Add padding if left icon is present
            },
            className?.input
          )}
        />
      </div>
    </div>
  );
};

export default TextInput;
