import { useDebounce } from "../useDebounce";
import { renderHook, act } from "@testing-library/react";

describe("useDebounce", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  it("Should return initial value immediately", () => {
    const { result } = renderHook(() => useDebounce("Naruto", 500));

    expect(result.current).toBe("Naruto");
  });
  it("Should return value after delay", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: "Naruto", delay: 500 } },
    );
    rerender({ value: "Bleach", delay: 500 });

    expect(result.current).toBe("Naruto");

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(result.current).toBe("Bleach");
  });
});
