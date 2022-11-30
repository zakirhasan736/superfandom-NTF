import { ComponentMeta, ComponentStory } from '@storybook/react';
import StepCard from '../components/core/StepCards/StepCard';
import { mockStepCardProps } from '../mocks/StepCard.mocks';
import { IStepCard } from '../typings/types';

export default {
  title: 'Cards/StepCard',
  component: StepCard,
  argTypes: {},
} as ComponentMeta<typeof StepCard>;

const Template: ComponentStory<typeof StepCard> = (args) => (
  <StepCard {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockStepCardProps.base,
} as IStepCard;