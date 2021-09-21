import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import AdminHome from "./AdminHome";

it("renders without crashing", function () {
  render(
    <MemoryRouter>
      <AdminHome />
    </MemoryRouter>
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <AdminHome />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
