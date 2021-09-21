import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Workshops from "./Workshops";

it("renders without crashing", function () {
  render(
    <MemoryRouter>
      <Workshops />
    </MemoryRouter>
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <Workshops />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
