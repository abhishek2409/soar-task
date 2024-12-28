import clsx from 'clsx';
import { FC } from 'react';

export interface AvatarProps {
  img: string;
  className?: string;
  alt?: string;
}
const Avatar: FC<AvatarProps> = ({ img: AvatarImg, className, alt }) => {
  return (
    <div className={clsx(className)}>
      <img
        src={AvatarImg}
        alt={alt ?? 'Avatar img'}
        className="w-full h-full rounded-full"
      />
    </div>
  );
};

export const DefaultAvatar: FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={clsx(
        'relative w-[70px] h-[70px] rounded-full overflow-hidden bg-gray-100  dark:bg-gray-600',
        className
      )}
    >
      <svg
        className="absolute w-full h-full  text-gray-400 -left-1"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </div>
  );
};

export default Avatar;
