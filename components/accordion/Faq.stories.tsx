import { ComponentMeta, ComponentStory } from '@storybook/react';
import Faq, { IFaq } from './Faq';
import { mockFaqProps } from './Faq.mocks';

export default {
  title: 'accordion/Faq',
  component: Faq,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Faq>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Faq> = (args) => (
  <Faq {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFaqProps.base,
} as IFaq;