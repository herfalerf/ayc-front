import React from "react";
import { render } from "@testing-library/react";
import ConfirmDialog from "./ConfirmDialog";

it("renders without crashing", function () {
  render(<ConfirmDialog />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<ConfirmDialog />);
  expect(asFragment()).toMatchSnapshot();
});
