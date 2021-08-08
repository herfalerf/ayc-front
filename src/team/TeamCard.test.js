import React from "react";
import { render } from "@testing-library/react";
import TeamCard from "./TeamCard";
import { MemoryRouter } from "react-router";

it("renders without crashing", function () {
  render(<TeamCard />);
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <TeamCard name="Test Name" bio="Test bio" img="img.jpg" />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
