import React from "react";
import { shallow } from "enzyme";
import { Spinner } from "react-bootstrap";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Tests <AddCategory />", () => {
  const category = "Sipmsons";

  test("Render the component", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Should display items when images are loaded using useFetchGifs", () => {
    const gifs = [
      {
        id: "one",
        url: "https://image.com/one.jpg",
        title: "Image one",
      },
      {
        id: "two",
        url: "https://image.com/two.jpg",
        title: "Image two",
      },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper.find(Spinner).exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
