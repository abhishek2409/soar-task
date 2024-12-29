import { BeneficiaryData } from '@/features/QuickTransfer';
import Avatar1Icon from '@/assets/images/avatar2.png';
import Avatar2Icon from '@/assets/images/avatar3.png';
import Avatar3Icon from '@/assets/images/avatar4.png';
import Avatar4Icon from '@/assets/images/avatar5.png';
import Avatar5Icon from '@/assets/images/avatar6.png';
import { v4 as uuid } from 'uuid';

export const beneficiariesMockResponse: BeneficiaryData[] = [
  {
    id: uuid(),
    name: 'John Doe',
    accountNumber: '123456789',
    alias: 'CEO',
    avatarImage: Avatar1Icon,
  },
  {
    id: uuid(),
    name: 'Jane Smith',
    accountNumber: '987654321',
    alias: 'CFO',
    avatarImage: Avatar2Icon,
  },
  {
    id: uuid(),
    name: 'Bob Johnson',
    accountNumber: '555555555',
    alias: 'CTO',
    avatarImage: Avatar3Icon,
  },
  {
    id: uuid(),
    name: 'Alice Williams',
    accountNumber: '111111111',
    alias: 'COO',
    avatarImage: Avatar4Icon,
  },
  {
    id: uuid(),
    name: 'Charlie Brown',
    accountNumber: '999999999',
    alias: 'CMO',
    avatarImage: Avatar5Icon,
  },
];
