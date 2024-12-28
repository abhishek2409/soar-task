import { ChangeEvent, useState, FC } from 'react';
import SendIcon from '@/assets/svgs/send.svg?react';

interface TransferFormProps {
  handleQuickTransfer: (amount: number) => void;
}

const TransferForm: FC<TransferFormProps> = ({ handleQuickTransfer }) => {
  const [amount, setAmount] = useState('');
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*\.?\d{0,2}$/.test(value)) {
      setAmount(value);
    }
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleQuickTransfer(+amount);
  };
  return (
    <form
      className="flex md:gap-x-units-unit-10 3xl:gap-x-units-unit-30 items-center w-full"
      onSubmit={handleSubmit}
    >
      <label className="text-primaryText flex-shrink-0">Write Amount</label>
      <div className="flex items-center bg-inputBG rounded-full">
        <input
          type="text"
          placeholder="Enter Amount"
          onChange={handleInputChange}
          value={amount}
          className="w-full py-4 px-units-unit-30 bg-transparent focus:outline-none flex-1  text-primaryText"
          required
        />
        <button
          className="p-4 bg-menuActive text-white text-sm font-medium  flex items-center gap-2.5 hover:bg-gray-800 focus:outline-none   rounded-full "
          type="submit"
        >
          Send
          <SendIcon />
        </button>
      </div>
    </form>
  );
};

export default TransferForm;
