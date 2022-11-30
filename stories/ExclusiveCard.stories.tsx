import { ComponentMeta, ComponentStory } from '@storybook/react';
import ExclusiveCard from '../components/shared/ExclusiveCard/ExclusiveCard';
import { mockExclusiveCardProps } from '../mocks/ExclusiveCard.mocks';
import { IExclusiveCard } from '../typings/types';


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