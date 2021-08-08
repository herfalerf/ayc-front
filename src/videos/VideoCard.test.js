import React from "react";
import { render } from "@testing-library/react";
import VideoCard from "./VideoCard";
import { MemoryRouter } from "react-router";

it("renders without crashing", function () {
  render(<VideoCard />);
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <VideoCard link="video.youtube.com" />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
