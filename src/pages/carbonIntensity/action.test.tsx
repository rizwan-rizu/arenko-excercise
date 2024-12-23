import { setFromDate, setToDate, setChartLoading, setError, setIntensityType, setIntensityData } from './action';
import { ActionTypes } from './action';
import { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

describe('Action Creators', () => {

  it('should create an action to set the from date', () => {
    const date: Dayjs = dayjs('2023-01-01');
    const action = setFromDate(date);
    expect(action).toEqual({
      type: ActionTypes.FROM,
      payload: date,
    });
  });

  it('should create an action to set the to date', () => {
    const date: Dayjs = dayjs('2023-12-31');
    const action = setToDate(date);
    expect(action).toEqual({
      type: ActionTypes.TO,
      payload: date,
    });
  });

  it('should create an action to set the chart loading state', () => {
    const loadingState = true;
    const action = setChartLoading(loadingState);
    expect(action).toEqual({
      type: ActionTypes.CHART_LOADING,
      payload: loadingState,
    });
  });

  it('should create an action to set the error message', () => {
    const errorMessage = 'An error occurred';
    const action = setError(errorMessage);
    expect(action).toEqual({
      type: ActionTypes.ERROR,
      payload: errorMessage,
    });
  });

  it('should create an action to set the intensity type', () => {
    const intensity = 'high';
    const action = setIntensityType(intensity);
    expect(action).toEqual({
      type: ActionTypes.INTENSITY_TYPE,
      payload: intensity,
    });
  });

  it('should create an action to set intensity data with formatted xValues', () => {
    const data = [
      { from: '2023-01-01T00:00:00Z', intensity: { forecast: 10, actual: 5 } },
      { from: '2023-01-01T01:00:00Z', intensity: { forecast: 15, actual: 10 } },
    ];

    const action = setIntensityData(data);

    const expectedPayload = {
      xValues: ['2023-01-01 00:00', '2023-01-01 01:00'],
      forecastValues: [10, 15],
      actualValues: [5, 10],
    };

    expect(action).toEqual({
      type: ActionTypes.DATA,
      payload: expectedPayload,
    });
  });
});
