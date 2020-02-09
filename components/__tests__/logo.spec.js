import { shallowMount } from "@vue/test-utils";
import logo from "../logo";

const factory = () => {
    return shallowMount(logo, {
    });
  };

  describe("Logo", () => {
    test("mounts properly", () => {
      const wrapper = factory();
      expect(wrapper.isVueInstance()).toBeTruthy();
    });
  
    // test("renders properly", () => {
    //   const wrapper = factory();
    //   expect(wrapper.html()).toMatchSnapshot();
    // });
  });