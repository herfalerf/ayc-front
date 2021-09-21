import React from "react";
import { render } from "@testing-library/react";
import TeamEditForm from "./TeamEditForm";
import { MemoryRouter } from "react-router";

it("renders without crashing", function () {
  render(
    <MemoryRouter>
      <TeamEditForm />
    </MemoryRouter>
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <TeamEditForm />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
