import { ComponentMeta, ComponentStory } from '@storybook/react';
import ActiveCard, { IActiveCard } from './ActiveCard';
import { mockActiveCardProps } from './ActiveCard.mocks';


export default {
  title: 'Cards/ActiveCard',
  component: ActiveCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof ActiveCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ActiveCard> = (args) => (
  <ActiveCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockActiveCardProps.base,
} as IActiveCard;