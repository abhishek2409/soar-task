import { ChangeEvent, useState, FC } from 'react';
import SendIcon from '@/assets/svgs/send.svg?react';

interface TransferFormProps {
  handleQuickTransfer: (amount: number) => void;
  amount: string;
  setAmount: (amount: string) => void;
}

const TransferForm: FC<TransferFormProps> = ({
  handleQuickTransfer,
  amount,
  setAmount,
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*\.?\d{0,2}$/.test(value)) {
      setAmount(value);
    }
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleQuickTransfer(+amount);
  };
  return (
    <form
      className="flex gap-x-units-unit-25 xl:gap-x-units-unit-10 3xl:gap-x-units-unit-30 items-center w-full"
      onSubmit={handleSubmit}
      noValidate
    >
      <label className="text-primaryText flex-shrink-0 text-units-unit-12 xl:text-units-unit-16 ">
        Write Amount
      </label>
      <div className="flex items-center bg-inputBG rounded-full w-full">
        <input
          type="text"
          placeholder="Enter Amount"
          onChange={handleInputChange}
          value={amount}
          className="w-full px-units-unit-15 xl:py-4 xl:px-units-unit-30 bg-transparent focus:outline-none flex-1  text-primaryText text-units-unit-12 xl:text-units-unit-16 "
          required
        />
        <button
          className="p-3 xl:p-4 bg-menuActive text-white text-sm font-medium  flex items-center gap-2.5  focus:outline-none   rounded-full text-units-unit-12 xl:text-units-unit-16 hover:bg-gradient-to-br to-gradientLight from-gradientDark "
          type="submit"
        >
          Send
          <SendIcon className="w-[16px] h-[16px] xl:w-[26px] xl:h-[26px]" />
        </button>
      </div>
    </form>
  );
};

export default TransferForm;
