import React from "react";
import { render } from "@testing-library/react";
import VideoList from "./VideoList";

it("renders without crashing", function () {
  render(<VideoList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<VideoList />);
  expect(asFragment()).toMatchSnapshot();
});
