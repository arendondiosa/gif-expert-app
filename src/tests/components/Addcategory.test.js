import React from "react";
import { shallow } from "enzyme";
import { Form } from "react-bootstrap";
import { AddCategory } from "../../components/AddCategory";

describe("Tests <AddCategory />", () => {
  const setCategories = jest.fn();
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("Render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Change the text inside the input", () => {
    const input = wrapper.find(Form.Control);
    const value = "Hello World";

    input.simulate("change", {
      target: value,
    });
  });

  test("Should not display info on submit", () => {
    wrapper.find(Form).simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("Should call the functions setCategories and clean the input", () => {
    const value = "Hello World";

    wrapper.find(Form.Control).simulate("change", { target: { value } });
    wrapper.find(Form).simulate("submit", { preventDefault() {} });

    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(wrapper.find(Form.Control).prop("value")).toBe("");
  });
});
