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
      className="flex gap-x-units-unit-30 items-center"
      onSubmit={handleSubmit}
    >
      <label className="text-primaryText">Write Amount</label>
      <div className="flex items-center bg-inputBG rounded-full">
        <input
          type="text"
          placeholder="Enter Amount"
          onChange={handleInputChange}
          value={amount}
          className="flex-1 py-4 px-units-unit-30 bg-transparent focus:outline-none  focus:ring-blue-300 text-primaryText"
          required
        />
        <button
          className="p-4 bg-menuActive text-white text-sm font-medium  flex items-center gap-2.5 hover:bg-gray-800 focus:outline-none   rounded-full h-full grow w-[125px]"
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
