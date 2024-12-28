import { RootState, useAppDispatch } from '@/store';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchBeneficiaryList } from '../thunks';
import SectionTitle from '@/components/SectionTitle';
import Loader, { LoaderType } from '@/components/Loader';
import { debugLog } from '@/services';
import BeneficiaryList from './BeneficiaryList';
import TransferForm from './TransferForm';

export const QuickTransfer = () => {
  const [selectedBeneficiary, setSelectedBeneficiary] = useState('');
  const { data, isLoading } = useSelector(
    (state: RootState) => state.quickTransfer
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!data) dispatch(fetchBeneficiaryList());
  }, []);

  const handleQuickTransfer = (amount: number) => {
    if (!amount || !selectedBeneficiary) return;
    const data = {
      amount,
      beneficiaryId: selectedBeneficiary,
    };
    debugLog(data);
  };

  return (
    <div className="flex flex-col w-full  gap-y-5 h-full">
      <SectionTitle title="Quick Transfer" />
      {isLoading && <Loader type={LoaderType.CARD_SHIMMER} />}

      {!!data?.length && !isLoading && (
        <div className="flex flex-col bg-white rounded-units-unit-25  md:p-units-unit-26 gap-y-units-unit-30 justify-between">
          <BeneficiaryList
            data={data}
            onSelectHandler={setSelectedBeneficiary}
            selectedBeneficiary={selectedBeneficiary}
          />

          <TransferForm handleQuickTransfer={handleQuickTransfer} />
        </div>
      )}
    </div>
  );
};
