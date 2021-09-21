import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import About from "./About";

it("renders without crashing", function () {
  render(
    <MemoryRouter>
      <About />
    </MemoryRouter>
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <About />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
