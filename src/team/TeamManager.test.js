import React from "react";
import { render } from "@testing-library/react";
import TeamManager from "./TeamManager";
import { MemoryRouter } from "react-router";

it("renders without crashing", function () {
  render(
    <MemoryRouter>
      <TeamManager />
    </MemoryRouter>
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <TeamManager />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
