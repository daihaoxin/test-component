import MyButton from '..';
import { mount } from '@vue/test-utils';

describe('Test MyButton', () => {
  test('content', () => {
    const Comp = {
      template: `<div><MyButton></MyButton></div>`,
    };
    const wrapper = mount(Comp, {
      global: {
        components: {
          MyButton,
        },
      },
    });
    expect(wrapper.findComponent({ name: MyButton.name }).text()).toContain('MyButton');
  });
});
