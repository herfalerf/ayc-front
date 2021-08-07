import React from "react";
import { render } from "@testing-library/react";
import ContactForm from "./ContactForm";
import { MemoryRouter } from "react-router";

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <ContactForm />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
