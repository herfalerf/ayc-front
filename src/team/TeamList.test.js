import React from "react";
import { render } from "@testing-library/react";
import TeamList from "./TeamList";

it("renders without crashing", function () {
  render(<TeamList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<TeamList />);
  expect(asFragment()).toMatchSnapshot();
});
