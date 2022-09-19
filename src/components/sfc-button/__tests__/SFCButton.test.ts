import SFCButton from '..';
import { mount } from '@vue/test-utils';

describe('Test SFCButton', () => {
  test('content', () => {
    const Comp = {
      template: `<div><SFCButton></SFCButton></div>`,
    };
    const wrapper = mount(Comp, {
      global: {
        components: {
          SFCButton,
        },
      },
    });
    expect(wrapper.findComponent({ name: SFCButton.name }).text()).toContain('Sfc');
  });
});
