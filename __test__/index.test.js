import getLevel from '../index';
import fetchData from '../__mocks__/http';

jest.mock('../__mocks__/http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('test with mock: OK scenario', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 'high' });
  const result = getLevel(1);

  expect(result).toBe('Ваш текущий уровень: high');
  expect(fetchData).toHaveBeenCalledWith('https://server/user/1');
});

test('test with mock: BAD scenario', () => {
  fetchData.mockReturnValue({ status: 'bad' });
  const result = getLevel(2);

  expect(result).toBe('Информация об уровне временно недоступна');
  expect(fetchData).toHaveBeenCalledWith('https://server/user/2');
});
