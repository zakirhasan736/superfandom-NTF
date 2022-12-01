import { ComponentMeta, ComponentStory } from '@storybook/react';
import Faq from '../components/shared/Faq/Faq';
import { mockFaqProps } from '../mocks/Faq.mocks';
import { IFaq } from '../typings/types';

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