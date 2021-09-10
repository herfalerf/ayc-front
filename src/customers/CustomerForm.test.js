import React from "react";
import { render } from "@testing-library/react";
import CustomerForm from "./CustomerForm";

it("renders without crashing", function () {
  render(<CustomerForm />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<CustomerForm />);
  expect(asFragment()).toMatchSnapshot();
});
