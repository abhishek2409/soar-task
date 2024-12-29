import { RootState, useAppDispatch } from '@/store';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchBeneficiaryList, sendMoney } from '../thunks';
import SectionTitle from '@/components/SectionTitle';
import Loader, { LoaderType } from '@/components/Loader';
import BeneficiaryList from './BeneficiaryList';
import TransferForm from './TransferForm';
import { useToast } from '@/providers';

export const QuickTransfer = () => {
  const { setToast } = useToast();
  const [selectedBeneficiary, setSelectedBeneficiary] = useState('');
  const [err, setErr] = useState('');
  const { data, isLoading, sendMoneyLoading } = useSelector(
    (state: RootState) => state.quickTransfer
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!data) dispatch(fetchBeneficiaryList());
  }, []);

  const handleQuickTransfer = async (amount: number) => {
    if (!amount) {
      setErr('Please enter an amount');
      return;
    }
    if (!selectedBeneficiary) {
      setErr('Please select a beneficiary');
      return;
    }
    setErr('');
    const data = {
      amount,
      beneficiaryId: selectedBeneficiary,
    };
    try {
      await dispatch(sendMoney(data));
      setSelectedBeneficiary('');
      setToast({
        open: true,
        text: 'Money sent successfully',
        type: 'success',
      });

      setTimeout(() => {
        setToast({
          open: false,
        });
      }, 2000);
    } catch (error) {
      setToast({
        open: true,
        text: 'Failed to send money',
        type: 'error',
      });

      setTimeout(() => {
        setToast({
          open: false,
        });
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col w-full  gap-y-5 h-full">
      <SectionTitle title="Quick Transfer" />
      {isLoading && <Loader type={LoaderType.CARD_SHIMMER} />}
      {sendMoneyLoading && <Loader type={LoaderType.API_SPINNER} />}

      {!!data?.length && !isLoading && (
        <div className="flex flex-col bg-white rounded-units-unit-25  xl:p-units-unit-26 gap-y-units-unit-30 justify-between">
          <BeneficiaryList
            data={data}
            onSelectHandler={setSelectedBeneficiary}
            selectedBeneficiary={selectedBeneficiary}
          />

          <TransferForm handleQuickTransfer={handleQuickTransfer} />
          {err && <p className="text-red-500">{err}</p>}
        </div>
      )}
    </div>
  );
};
