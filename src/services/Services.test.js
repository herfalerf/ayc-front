import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Services from "./Services";

it("renders without crashing", function () {
  render(
    <MemoryRouter>
      <Services />
    </MemoryRouter>
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <Services />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
