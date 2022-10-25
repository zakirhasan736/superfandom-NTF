import { ComponentMeta, ComponentStory } from '@storybook/react';
import StepCard, { IStepCard } from './StepCard';
import { mockStepCardProps } from './StepCard.mocks';


export default {
  title: 'Cards/StepCard',
  component: StepCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof StepCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StepCard> = (args) => (
  <StepCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockStepCardProps.base,
} as IStepCard;