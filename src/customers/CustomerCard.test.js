import React from "react";
import { render } from "@testing-library/react";
import CustomerCard from "./CustomerCard";
import { MemoryRouter } from "react-router";

it("renders without crashing", function () {
  render(
    <MemoryRouter>
      <CustomerCard />
    </MemoryRouter>
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <CustomerCard />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
