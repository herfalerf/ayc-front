import React from "react";
import { render } from "@testing-library/react";
import ContactElement from "./ContactElement";
import { MemoryRouter } from "react-router";

it("renders without crashing", function () {
  render(
    <MemoryRouter>
      <ContactElement />
    </MemoryRouter>
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <ContactElement />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
