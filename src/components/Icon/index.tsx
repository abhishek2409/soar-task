import clsx from 'clsx';
import { ElementType, FC } from 'react';

export interface IconProps {
  svg: ElementType;
  className?: string;
}
const Icon: FC<IconProps> = ({ svg: SVGIcon, className }) => {
  return (
    <span className={clsx('inline-block', className)}>
      <SVGIcon />
    </span>
  );
};

export default Icon;
