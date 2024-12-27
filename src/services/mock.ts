import MockAdapter from 'axios-mock-adapter';
import axiosInstance from './axios';
import { debugLog } from './logger';
import {
  expenseStatsMockresponse,
  myCardsMockResponse,
  transactionMockResponse,
  weeklyActivityMockResponse,
} from '@/constants';
import { beneficiariesMockResponse } from '@/constants/beneficiaries.mock';
import { balanceHistoryMockResponse } from '@/constants/balanceHistory.mock';

const mock = new MockAdapter(axiosInstance);

mock.onGet('/cards').withDelayInMs(1500).reply(200, myCardsMockResponse);

mock
  .onGet('/transactions')
  .withDelayInMs(1500)
  .reply(200, transactionMockResponse);

mock
  .onGet('/weekly-activity')
  .withDelayInMs(1000)
  .reply(200, weeklyActivityMockResponse);

mock
  .onGet('/expense-stats')
  .withDelayInMs(1000)
  .reply(200, expenseStatsMockresponse);

mock
  .onGet('/beneficiaries')
  .withDelayInMs(1000)
  .reply(200, beneficiariesMockResponse);

mock
  .onGet('/balance-history')
  .withDelayInMs(1000)
  .reply(200, balanceHistoryMockResponse);

export const enableMock = () => {
  debugLog('Mock API enabled.');
};

export default mock;
