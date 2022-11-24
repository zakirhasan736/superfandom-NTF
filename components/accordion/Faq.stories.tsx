import { ComponentMeta, ComponentStory } from '@storybook/react';
import Faq, { IFaq } from './Faq';
import { mockFaqProps } from './Faq.mocks';

export default {
  title: 'accordion/Faq',
  component: Faq,
  argTypes: {},
} as ComponentMeta<typeof Faq>;

const Template: ComponentStory<typeof Faq> = (args) => (
  <Faq {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockFaqProps.base,
} as IFaq;