import MockAdapter from 'axios-mock-adapter';
import axiosInstance from './axios';
import { debugLog } from './logger';
import { myCardsMockResponse, transactionMockResponse } from '@/constants';

const mock = new MockAdapter(axiosInstance);

mock.onGet('/cards').withDelayInMs(1500).reply(200, myCardsMockResponse);

mock
  .onGet('/transactions')
  .withDelayInMs(1500)
  .reply(200, transactionMockResponse);

export const enableMock = () => {
  debugLog('Mock API enabled.');
};

export default mock;
