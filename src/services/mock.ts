import MockAdapter from 'axios-mock-adapter';
import axiosInstance from './axios';
import { debugLog } from './logger';
import { mycardsResponse } from '@/constants';

const mock = new MockAdapter(axiosInstance);

mock.onGet('/cards').withDelayInMs(1500).reply(200, mycardsResponse);

export const enableMock = () => {
  debugLog('Mock API enabled.');
};

export default mock;
