import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import BottomNav from "./BottomNav";

it("renders without crashing", function () {
  render(
    <MemoryRouter>
      <BottomNav />
    </MemoryRouter>
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <BottomNav />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
