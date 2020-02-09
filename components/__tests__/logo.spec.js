import { shallowMount } from "@vue/test-utils";
import logo from "../logo";

const factory = (propsData) => {
  return shallowMount(logo, {
    propsData: {
      ...propsData
    }
  });
};

describe("Logo", () => {
test("mounts properly", () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

test("example", () => {
    const wrapper = factory({
      darkTheme: true,
      bigFontSize: true,
      normalFontSize: true
    });

    console.log(wrapper.vm.$props.darkTheme);

    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("example 2", () => {
    const wrapper = factory({
      darkTheme: false,
      bigFontSize: false,
      normalFontSize: false
    });

    console.log(wrapper.vm.$props.darkTheme);

    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  
// it('render', () => {
//     const wrapper = factory({
//       darkTheme: true,
//       bigFontSize: true,
//       normalFontSize: true
//     });

//     expect(wrapper.html()).to.equal('<div class="logo logo--normal-font">Jakub Gania Software</div>')
//   });
});