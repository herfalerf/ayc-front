import React from "react";
import { render } from "@testing-library/react";
import VideoLibrary from "./VideoLibrary";

it("renders without crashing", function () {
  render(<VideoLibrary />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<VideoLibrary />);
  expect(asFragment()).toMatchSnapshot();
});
