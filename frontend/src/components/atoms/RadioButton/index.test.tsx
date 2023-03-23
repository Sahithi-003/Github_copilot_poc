import React from "react";
import { render } from "@testing-library/react";
import RadioButton from ".";

describe("RadioButton", () => {
  it("should render correctly", () => {
    const { container } = render(
      <RadioButton
        name="RadioButton"
        value="RadioButton"
        label="RadioButton"
        checked={true}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange={() => {}}
      />
    );
    expect(container).toMatchSnapshot();
  });
});

