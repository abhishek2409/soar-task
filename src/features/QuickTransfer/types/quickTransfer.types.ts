export interface BeneficiaryData {
  id: string;
  name: string;
  accountNumber: string;
  alias: string;
  avatarImage?: string;
}

export interface QuickTransferState {
  isLoading: boolean;
  error: string;
  data: BeneficiaryData[] | null;
  sendMoneyLoading?: boolean;
  sendMoneyError?: string;
  sendMoneyData?: null;
}

export interface SendMoneyPayload {
  amount: number;
  beneficiaryId: string;
}
