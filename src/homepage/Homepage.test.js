import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Homepage from "./Homepage";

it("renders without crashing", function () {
  render(
    <MemoryRouter>
      <Homepage />
    </MemoryRouter>
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <Homepage />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
