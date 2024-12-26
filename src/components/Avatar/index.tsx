import clsx from 'clsx';
import { FC } from 'react';

export interface AvatarProps {
  img: string;
  className?: string;
}
const Avatar: FC<AvatarProps> = ({ img: AvatarImg, className }) => {
  return (
    <div className={clsx(className)}>
      <img src={AvatarImg} alt="avtar" className="w-full h-full rounded-full" />
    </div>
  );
};

export default Avatar;
