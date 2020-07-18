import React from "react";
import { shallow } from "enzyme";
import { Card } from "react-bootstrap";
import { GifGridItem } from "../../components/GifGridItem";

describe("Tests <GifGridItem />", () => {
  const title = "This is a title";
  const url = "http://url.com";

  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("Render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Paragraph TITLE inside component", () => {
    const component_title = wrapper.find(Card.Title);

    expect(component_title.text().trim()).toBe(title);
  });

  test("Paragraph URL inside component", () => {
    const component_url = wrapper.find(Card.Img).prop("src");

    expect(component_url).toBe(url);
  });
});
