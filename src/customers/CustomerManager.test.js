import React from "react";
import { render } from "@testing-library/react";
import CustomerManager from "./CustomerManager";
import { MemoryRouter } from "react-router";

it("renders without crashing", function () {
  render(
    <MemoryRouter>
      <CustomerManager />
    </MemoryRouter>
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <CustomerManager />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
