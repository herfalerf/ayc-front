import React from "react";
import { render } from "@testing-library/react";
import SelectTagForm from "./SelectTagForm";
import { MemoryRouter } from "react-router";

it("renders without crashing", function () {
  render(
    <MemoryRouter>
      <SelectTagForm />
    </MemoryRouter>
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <SelectTagForm />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
