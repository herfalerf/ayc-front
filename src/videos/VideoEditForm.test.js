import React from "react";
import { render } from "@testing-library/react";
import VideoEditForm from "./VideoEditForm";
import { MemoryRouter } from "react-router";

it("renders without crashing", function () {
  render(
    <MemoryRouter>
      <VideoEditForm />
    </MemoryRouter>
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <VideoEditForm />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
