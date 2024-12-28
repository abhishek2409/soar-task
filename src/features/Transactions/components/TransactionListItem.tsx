import { ElementType } from 'react';
import {
  TransactionData,
  TransactionProvider,
  TransactionType,
} from '../types';
import CashTransactionIcon from '@/assets/svgs/cash-transaction.svg?react';
import CardTransactionIcon from '@/assets/svgs/card-transaction.svg?react';
import PaypalTransactionIcon from '@/assets/svgs/paypal-transaction.svg?react';
import clsx from 'clsx';

const TransactionIcon = ({
  iconType,
  className,
}: {
  iconType: TransactionProvider;
  className?: string;
}) => {
  let Icon: ElementType, color: string;
  switch (iconType) {
    case TransactionProvider.CASH:
      Icon = CashTransactionIcon;
      color = 'bg-greenBG';
      break;
    case TransactionProvider.CARD:
      Icon = CardTransactionIcon;
      color = 'bg-yellowBG';
      break;
    case TransactionProvider.PAYPAL:
      Icon = PaypalTransactionIcon;
      color = 'bg-purpleBG';
      break;
    default:
      return null;
  }

  return (
    <div
      className={clsx(
        'w-[50px] h-[50px] md:w-[55px] md:h-[55px] rounded-full flex-shrink-0 flex justify-center items-center',
        color,
        className
      )}
    >
      <Icon />
    </div>
  );
};

const TransactionListItem = (data: TransactionData) => {
  const {
    transactionProvider,
    transactionDesctription,
    transactionDate,
    transactionType,
    amount,
  } = data;
  return (
    <div className="flex items-center gap-x-units-unit-13 justify-between">
      <div className="flex gap-x-units-unit-17">
        <TransactionIcon
          iconType={transactionProvider}
          className="mr-units-unit-4"
        />
        <div className="flex-col flex gap-y-units-unit-7">
          <h3 className="text-menuActive font-medium text-units-unit-14 md:text-units-unit-16">
            {transactionDesctription}
          </h3>
          <p className="text-contentSubtitle text-units-unit-12 md:text-units-unit-15">
            {transactionDate}
          </p>
        </div>
      </div>
      <div>
        <h3
          className={clsx(
            'font-medium md:text-units-unit-16 text-units-unit-11',
            transactionType === 'DEPOSIT'
              ? 'text-alertSuccess'
              : 'text-alertError'
          )}
        >
          {transactionType === TransactionType.DEPOSIT ? '+' : '-'}
          {amount}
        </h3>
      </div>
    </div>
  );
};

export default TransactionListItem;
