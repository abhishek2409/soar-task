import MockAdapter from 'axios-mock-adapter';
import axiosInstance from './axios';
import { debugLog } from './logger';
import {
  myCardsMockResponse,
  transactionMockResponse,
  weeklyActivityMockResponse,
} from '@/constants';

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

export const enableMock = () => {
  debugLog('Mock API enabled.');
};

export default mock;
