import { ComponentMeta, ComponentStory } from '@storybook/react';
import ActiveCard, { IActiveCard } from './ActiveCard';
import { mockActiveCardProps } from './ActiveCard.mocks';


export default {
  title: 'Cards/ActiveCard',
  component: ActiveCard,
  argTypes: {
  },
} as ComponentMeta<typeof ActiveCard>;

const Template: ComponentStory<typeof ActiveCard> = (args) => (
  <ActiveCard {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockActiveCardProps.base,
} as IActiveCard;