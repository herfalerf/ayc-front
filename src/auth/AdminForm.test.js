import React from "react";
import { render } from "@testing-library/react";
import AdminForm from "./AdminForm";
import { MemoryRouter } from "react-router";

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <AdminForm />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
