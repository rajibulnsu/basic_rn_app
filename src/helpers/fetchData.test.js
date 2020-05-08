import fetchData from './fetchData';
import {HOST_URL} from '../common/constants';

fetch = jest.fn(() => Promise.resolve());

describe('fetchData', () => {
  const mockResponse = {};

  beforeEach(()=>{
    const mockJsonPromise = Promise.resolve(mockResponse);
    const mockFetchPromise = Promise.resolve({ json: () => mockJsonPromise });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
  });

  afterEach(() => {
    global.fetch.mockClear();
  });

  it('should fetch data from a given host url', async () => {
    await fetchData();

    expect(global.fetch).toHaveBeenCalledWith(HOST_URL);
  });

  it('should fetch data correctly', async () => {
    const result = await fetchData();

    expect(result).toEqual(mockResponse);
  });
});
