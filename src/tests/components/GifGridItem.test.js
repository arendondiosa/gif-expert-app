import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Tests <GifGridItem />", () => {
  const title = "This is a title";
  const url = "http://url.com";

  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("Render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
