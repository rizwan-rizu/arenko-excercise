import { describe, it, beforeEach, expect, vi } from "vitest";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { setChartLoading, setError, setIntensityData } from "../action";
import dayjs from "dayjs";
import { fetchCarbonIntensity } from "../api";

describe("fetchCarbonIntensity API function", () => {
  const mockAxios = new MockAdapter(axios);
  const dispatch = vi.fn();
  const from = dayjs("2023-01-01");
  const to = dayjs("2023-01-02");

  beforeEach(() => {
    dispatch.mockClear();
    mockAxios.reset();
  });

  it("should dispatch actions correctly on a successful API call", async () => {
    const mockData = {
      data: [
        { from: "2023-01-01T00:00Z", intensity: { forecast: 10, actual: 5 } },
        { from: "2023-01-01T01:00Z", intensity: { forecast: 15, actual: 10 } },
      ]
    };

    mockAxios
      .onGet(`https://api.carbonintensity.org.uk/intensity/${from.toISOString()}/${to.toISOString()}`)
      .reply(200, mockData);

    await fetchCarbonIntensity(from, to, dispatch);

    expect(dispatch).toHaveBeenCalledWith(setChartLoading(true));
    expect(dispatch).toHaveBeenCalledWith(setIntensityData(mockData.data));
    expect(dispatch).toHaveBeenCalledWith(setChartLoading(false));
  });

  it("should dispatch error action on a failed API call", async () => {
    mockAxios
      .onGet(`https://api.carbonintensity.org.uk/intensity/${from.toISOString()}/${to.toISOString()}`)
      .reply(500);

    await fetchCarbonIntensity(from, to, dispatch);

    expect(dispatch).toHaveBeenCalledWith(setChartLoading(true));
    expect(dispatch).toHaveBeenCalledWith(setError("Data fetch error: Request failed with status code 500"));
    expect(dispatch).toHaveBeenCalledWith(setChartLoading(false));
  });

  it("should dispatch error action on a thrown exception", async () => {
    mockAxios
      .onGet(`https://api.carbonintensity.org.uk/intensity/${from.toISOString()}/${to.toISOString()}`)
      .networkError();

    await fetchCarbonIntensity(from, to, dispatch);

    expect(dispatch).toHaveBeenCalledWith(setChartLoading(true));
    expect(dispatch).toHaveBeenCalledWith(setError(expect.stringMatching(/Data fetch error:/)));
    expect(dispatch).toHaveBeenCalledWith(setChartLoading(false));
  });
});
