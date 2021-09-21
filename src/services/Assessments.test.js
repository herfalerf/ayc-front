import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Assessments from "./Assessments";

it("renders without crashing", function () {
  render(
    <MemoryRouter>
      <Assessments />
    </MemoryRouter>
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <Assessments />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
