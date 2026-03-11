import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Section from "../section";

describe("Section Component", () => {
  it("Should return basic text with section", () => {
    render(<Section>Witaj w sekcji</Section>);

    const element = screen.getByText("Witaj w sekcji");

    expect(element).toBeInTheDocument();
  });
});
