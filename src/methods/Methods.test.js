import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Methods from "./Methods";

it("renders without crashing", function () {
  render(
    <MemoryRouter>
      <Methods />
    </MemoryRouter>
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <Methods />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
