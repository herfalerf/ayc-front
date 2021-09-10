import React from "react";
import { render } from "@testing-library/react";
import CustomerList from "./CustomerList";

it("renders without crashing", function () {
  render(<CustomerList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<CustomerList />);
  expect(asFragment()).toMatchSnapshot();
});
