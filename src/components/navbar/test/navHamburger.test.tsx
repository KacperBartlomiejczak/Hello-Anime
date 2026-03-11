import NavHamburger from "../navHamburger";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("Navigation Hamburger Button", () => {
  it("Should call button when its clicked", async () => {
    const handleClickMock = jest.fn();
    const user = userEvent.setup();

    render(
      <NavHamburger isActive={false} onClick={handleClickMock}></NavHamburger>,
    );

    const button = screen.getByRole("button", {
      name: /toggle navigation menu/i,
    });
    await user.click(button);

    expect(handleClickMock).toHaveBeenCalledTimes(1);
  });
});
