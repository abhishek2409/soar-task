import { FC } from 'react';
import { CardData, CardTheme } from '../types';
import ChipIcon from '@/assets/svgs/chip.svg?react';
import ChipWhiteIcon from '@/assets/svgs/chip-white.svg?react';
import MasterCardIcon from '@/assets/svgs/master-card.svg?react';
import MasterCardDarkIcon from '@/assets/svgs/master-card-dark.svg?react';
import clsx from 'clsx';

const MyCardItem: FC<CardData> = (data) => {
  const { balance, cardHolderName, cardNumber, expiryDate, theme } = data;
  return (
    <div
      className={clsx(
        'flex flex-col w-[350px] rounded-units-unit-25 flex-shrink-0 border-borderGray border gap-y-units-unit-20  xl:gap-y-units-unit-32',

        theme === CardTheme.DARK
          ? 'bg-gradient-to-br from-gradientLight to-gradientDark'
          : 'bg-white'
      )}
    >
      <div className="flex justify-between items-center p-units-unit-20 xl:p-units-unit-24">
        <div className="flex flex-col">
          <span
            className={clsx(
              'text-contentSubtitle text-units-unit-11 xl:text-units-unit-12',
              theme === CardTheme.DARK ? 'text-white' : ''
            )}
          >
            Balance
          </span>
          <span
            className={clsx(
              'text-primaryText  xl:text-units-unit-20 font-semibold',
              theme === CardTheme.DARK ? 'text-white' : ''
            )}
          >
            {balance}
          </span>
        </div>

        {theme === CardTheme.DARK ? (
          <ChipWhiteIcon className="w-[29px] h-[29px] xl:w-[34px] xl:h-[34px]" />
        ) : (
          <ChipIcon className="w-[29px] h-[29px] xl:w-[34px] xl:h-[34px]" />
        )}
      </div>
      <div className="flex gap-x-units-unit-60 px-units-unit-20 xl:px-units-unit-24">
        <div className="flex flex-col">
          <span
            className={clsx(
              'text-contentSubtitle text-units-unit-11 xl:text-units-unit-12',
              theme === CardTheme.DARK ? 'text-white' : ''
            )}
          >
            CARD HOLDER
          </span>
          <span
            className={clsx(
              'text-primaryText text-units-unit-13 xl:text-units-unit-15 font-semibold',
              theme === CardTheme.DARK ? 'text-white' : ''
            )}
          >
            {cardHolderName}
          </span>
        </div>
        <div className="flex flex-col">
          <span
            className={clsx(
              'text-contentSubtitle text-units-unit-11 xl:text-units-unit-12',
              theme === CardTheme.DARK ? 'text-white' : ''
            )}
          >
            VALID THRU
          </span>
          <span
            className={clsx(
              'text-primaryText text-units-unit-13 xl:text-units-unit-15 font-semibold',
              theme === CardTheme.DARK ? 'text-white' : ''
            )}
          >
            {expiryDate}
          </span>
        </div>
      </div>
      <div
        className={clsx(
          'flex justify-between items-center border-t p-units-unit-16 xl:p-units-unit-24 rounded-b-units-unit-25',
          theme === CardTheme.DARK
            ? 'bg-gradient-to-br from-graidientDark to-gradientLight border-transparent'
            : 'border-borderGray'
        )}
      >
        <div
          className={clsx(
            'font-semibold text-units-unit-15 xl:text-units-unit-22',
            theme === CardTheme.DARK ? 'text-white' : 'text-primaryText'
          )}
        >
          {cardNumber}
        </div>
        <div>
          {theme === CardTheme.DARK ? (
            <MasterCardDarkIcon className="w-[30px] h-[18px] xl:w-[44px] xl:h-[30px]" />
          ) : (
            <MasterCardIcon className="w-[30px] h-[18px] xl:w-[44px] xl:h-[30px]" />
          )}
        </div>
      </div>
    </div>
  );
};

export default MyCardItem;
