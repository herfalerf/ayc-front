import React from "react";
import { render } from "@testing-library/react";
import VideoManager from "./VideoManager";

it("renders without crashing", function () {
  render(<VideoManager />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<VideoManager />);
  expect(asFragment()).toMatchSnapshot();
});
