import clsx from 'clsx';
import { FC, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  text: string;
}

const Button: FC<ButtonProps> = (props) => {
  const { className, text, ...rest } = props;
  return (
    <button
      role="button"
      aria-label={text}
      className={clsx(
        'bg-menuActive text-white, rounded-units-unit-15 text-center py-units-unit-12 px-units-unit-30 focus:ring-1 focus:ring-menuActive',
        className
      )}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
