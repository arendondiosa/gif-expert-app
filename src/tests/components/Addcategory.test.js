import React from "react";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Tests <AddCategory />", () => {
  const setCategories = () => {};

  test("Render the component", () => {
    const wrapper = shallow(<AddCategory setCategories={setCategories} />);
    expect(wrapper).toMatchSnapshot();
  });
});
