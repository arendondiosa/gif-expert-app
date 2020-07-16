import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Tests <GifGridItem />", () => {
  test("Render the component", () => {
    const wrapper = shallow(<GifGridItem title="" url="" />);
    expect(wrapper).toMatchSnapshot();
  });
});
