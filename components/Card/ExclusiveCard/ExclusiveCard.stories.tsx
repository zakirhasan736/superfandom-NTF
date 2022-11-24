import { ComponentMeta, ComponentStory } from '@storybook/react';
import ExclusiveCard, { IExclusiveCard } from './ExclusiveCard';
import { mockExclusiveCardProps } from './ExclusiveCard.mocks';


export default {
  title: 'Cards/ExclusiveCard',
  component: ExclusiveCard,
  argTypes: {
  },
} as ComponentMeta<typeof ExclusiveCard>;

const Template: ComponentStory<typeof ExclusiveCard> = (args) => (
  <ExclusiveCard {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockExclusiveCardProps.base,
} as IExclusiveCard;