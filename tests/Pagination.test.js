import React from "react";
import { Pagination } from "../src/";
import { mount } from "enzyme";

describe("Input", () => {
  it("Should renders without problems", () => {
    const wrapper = mount(
      <Pagination
        selected={1}
        pagesCount={44}
        onSelect={val => console.log('selected', val)}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
