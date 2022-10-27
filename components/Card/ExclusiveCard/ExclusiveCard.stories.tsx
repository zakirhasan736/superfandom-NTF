import { ComponentMeta, ComponentStory } from '@storybook/react';
import ExclusiveCard, { IExclusiveCard } from './ExclusiveCard';
import { mockExclusiveCardProps } from './ExclusiveCard.mocks';


export default {
  title: 'Cards/ExclusiveCard',
  component: ExclusiveCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof ExclusiveCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ExclusiveCard> = (args) => (
  <ExclusiveCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockExclusiveCardProps.base,
} as IExclusiveCard;