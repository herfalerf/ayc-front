import React from "react";
import { render } from "@testing-library/react";
import Contactpage from "./Contactpage";
import { MemoryRouter } from "react-router";

it("renders without crashing", function () {
  render(
    <MemoryRouter>
      <Contactpage />
    </MemoryRouter>
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <Contactpage />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
