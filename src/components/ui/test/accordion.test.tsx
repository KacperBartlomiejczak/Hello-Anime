import Accordion from "../accordion";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("Accordion component", () => {
  it("Should render children propertly", async () => {
    const user = userEvent.setup();
    render(
      <Accordion title="Kto zjadł ciastka">
        <p>Ja zjadłem</p>
      </Accordion>,
    );

    expect(screen.queryByText("Ja zjadłem")).not.toBeInTheDocument();

    const button = screen.getByText("Kto zjadł ciastka");
    await user.click(button);

    const text = screen.getByText("Ja zjadłem");
    expect(text).toBeInTheDocument();
  });
});
