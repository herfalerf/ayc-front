import React from "react";
import { render } from "@testing-library/react";
import CardButton from "./CardButton";
import { MemoryRouter } from "react-router";

it("renders without crashing", function () {
  render(
    <MemoryRouter>
      <CardButton route="/" />
    </MemoryRouter>
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <CardButton route="/" />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
