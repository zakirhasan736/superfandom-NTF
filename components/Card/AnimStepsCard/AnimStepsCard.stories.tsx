import { ComponentMeta, ComponentStory } from '@storybook/react';
import AnimStepsCard, { IAnimStepsCard } from './AnimStepsCard';
import { mockAnimStepsCardProps } from './AnimStepsCard.mocks';


export default {
  title: 'Cards/AnimStepsCard',
  component: AnimStepsCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof AnimStepsCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AnimStepsCard> = (args) => (
  <AnimStepsCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockAnimStepsCardProps.base,
} as IAnimStepsCard;