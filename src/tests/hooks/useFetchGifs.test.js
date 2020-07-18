import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Tests hook useFetchGifs", () => {
  test("Should return the initial value", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("Superman")
    );
    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test("Should return the value for a request", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("Superman")
    );
    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
