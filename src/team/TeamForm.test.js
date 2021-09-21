import React from "react";
import { render } from "@testing-library/react";
import TeamForm from "./TeamForm";
import { MemoryRouter } from "react-router";

it("renders without crashing", function () {
  render(
    <MemoryRouter>
      <TeamForm />
    </MemoryRouter>
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <TeamForm />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
