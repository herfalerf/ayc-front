import React from "react";
import { render } from "@testing-library/react";
import VideoForm from "./VideoForm";
import { MemoryRouter } from "react-router";

it("renders without crashing", function () {
  render(
    <MemoryRouter>
      <VideoForm />
    </MemoryRouter>
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <VideoForm />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
