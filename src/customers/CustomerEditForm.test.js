import React from "react";
import { render } from "@testing-library/react";
import CustomerEditForm from "./CustomerEditForm";
import { MemoryRouter } from "react-router-dom";

it("renders without crashing", function () {
  render(
    <MemoryRouter>
      <CustomerEditForm />
    </MemoryRouter>
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <CustomerEditForm />;
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
