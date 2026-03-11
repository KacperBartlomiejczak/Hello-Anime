import AnimeFetcher from "../animeFetcher";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";


describe("AnimeFetcher Component", () => {
  it("Should return dummy json after calling", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve([{ name: "Demon Slayer" }, { name: "Naruto" }]),
      }),
    ) as jest.Mock;

    render(<AnimeFetcher />);

    const loadingText = screen.getByText("Loading");
    expect(loadingText).toBeInTheDocument();

    const firstAnime = await screen.findByText("Demon Slayer");
    const secondAnime = await screen.findByText("Naruto");
    expect(firstAnime).toBeInTheDocument();
    expect(loadingText).not.toBeInTheDocument();
    expect(secondAnime).toBeInTheDocument();

    jest.restoreAllMocks();
  });
});
