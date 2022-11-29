import { ComponentMeta, ComponentStory } from '@storybook/react';
import TokenCards from '../components/shared/TokenCards/TokenCards';
import { mockTokenCardsProps } from '../mocks/TokenCards.mocks';
import { ITokenCards } from '../typings/types';


export default {
  title: 'Cards/TokenCards',
  component: TokenCards,
  argTypes: {
  },
} as ComponentMeta<typeof TokenCards>;

const Template: ComponentStory<typeof TokenCards> = (args) => (
  <TokenCards {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockTokenCardsProps.base,
} as ITokenCards;