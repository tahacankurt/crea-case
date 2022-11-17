import authReducer, { INITIAL_STATE } from './authState';

describe('Auth Reducer', () => {
  test('should return the initial state', () => {
    expect(authReducer(undefined, { type: undefined })).toEqual(INITIAL_STATE);
  });
});
