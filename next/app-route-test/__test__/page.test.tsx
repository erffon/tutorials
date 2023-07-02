import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";
import About from "@/app/about/page";

// describe("home page", () => {
//   it("root page.tsx", () => {
//     render(<Page />);

//     const header = screen.getByText("Home page");
//     expect(header).toBeInTheDocument();
//   });
// });

describe("first suit", () => {
  it("initial test", () => {
    expect(1).toBe(1);
  });

  it("search for home page text", () => {
    render(<About />);
    expect(screen.getByRole("paragraph")).toBeInTheDocument();
  });
});
