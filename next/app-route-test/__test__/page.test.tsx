import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "@/app/page";

describe("home page", () => {
  it("root page.tsx", () => {
    render(<Page />);

    const header = screen.getByRole("heading");
    expect(header).toHaveTextContent("Home page");
  });
});
