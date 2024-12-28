import React, { FC } from 'react';
import { BeneficiaryData } from '../types';
import Avatar, { DefaultAvatar } from '@/components/Avatar';
import clsx from 'clsx';

interface BeneficiaryItemProps {
  data: BeneficiaryData;
  onSelectHandler: (id: string) => void;
  selectedBeneficiary: string;
}

const BeneficiaryItem: FC<BeneficiaryItemProps> = ({
  data,
  onSelectHandler,
  selectedBeneficiary,
}) => {
  const { avatarImage, id, name, alias } = data;
  return (
    <div
      className="flex flex-col gap-units-unit-15 justify-center items-center text-center cursor-pointer"
      onClick={() => onSelectHandler(id)}
    >
      {avatarImage ? (
        <Avatar
          img={avatarImage}
          className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full flex-shrink-0"
        />
      ) : (
        <DefaultAvatar className="w-[70px] h-[70px] rounded-full flex-shrink-0" />
      )}
      <div className="flex flex-col gap-units-unit-5">
        <h3
          className={clsx(
            'text-menuActive text-units-unit-12 md:text-units-unit-16',
            selectedBeneficiary === id && 'font-semibold'
          )}
        >
          {name}
        </h3>
        <p
          className={clsx(
            'text-contentSubtitle text-units-unit-12 md:text-units-unit-15',
            selectedBeneficiary === id && 'font-semibold'
          )}
        >
          {alias}
        </p>
      </div>
    </div>
  );
};

export default BeneficiaryItem;
