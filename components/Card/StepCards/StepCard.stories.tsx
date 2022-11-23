import { ComponentMeta, ComponentStory } from '@storybook/react';
import StepCard, { IStepCard } from './StepCard';
import { mockStepCardProps } from './StepCard.mocks';


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