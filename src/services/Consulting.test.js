import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Consulting from "./Consulting";

it("renders without crashing", function () {
  render(
    <MemoryRouter>
      <Consulting />
    </MemoryRouter>
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <Consulting />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
