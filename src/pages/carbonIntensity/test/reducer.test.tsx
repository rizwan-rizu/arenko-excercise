import { reducer, initialState, Action } from '../reducer';
import { ActionTypes } from '../action';
import dayjs from 'dayjs';

describe('Reducer', () => {

  it('should handle setting the from date', () => {
    const fromDate = dayjs('2023-01-01');
    const action: Action = { type: ActionTypes.FROM, payload: fromDate };
    const newState = reducer(initialState, action);

    expect(newState.from).toBe(fromDate);
  });

  it('should handle setting the to date', () => {
    const toDate = dayjs('2023-12-31');
    const action: Action = { type: ActionTypes.TO, payload: toDate };
    const newState = reducer(initialState, action);

    expect(newState.to).toBe(toDate);
  });

  it('should handle setting the chart loading state', () => {
    const isLoading = true;
    const action: Action = { type: ActionTypes.CHART_LOADING, payload: isLoading };
    const newState = reducer(initialState, action);

    expect(newState.isChartLoading).toBe(isLoading);
  });

  it('should handle setting intensity data', () => {
    const action: Action = {
      type: ActionTypes.DATA,
      payload: {
        xValues: ['2023-01-01 00:00', '2023-01-01 01:00'],
        forecastValues: [10, 15],
        actualValues: [5, 10],
      },
    };
    const newState = reducer(initialState, action);

    expect(newState.xValues).toEqual(action.payload.xValues);
    expect(newState.forecastValues).toEqual(action.payload.forecastValues);
    expect(newState.actualValues).toEqual(action.payload.actualValues);
  });

  it('should handle setting the error message', () => {
    const errorMessage = 'An error occurred';
    const action: Action = { type: ActionTypes.ERROR, payload: errorMessage };
    const newState = reducer(initialState, action);

    expect(newState.error).toBe(errorMessage);
    expect(newState.isChartLoading).toBe(false);
  });

  it('should handle setting the intensity type', () => {
    const intensityType = 'high';
    const action: Action = { type: ActionTypes.INTENSITY_TYPE, payload: intensityType };
    const newState = reducer(initialState, action);

    expect(newState.intensityType).toBe(intensityType);
  });

  it('should return the initial state when an unknown action type is dispatched', () => {
    const action = { type: 'UNKNOWN_ACTION', payload: null } as never;
    const newState = reducer(initialState, action);

    expect(newState).toEqual(initialState);
  });
});
