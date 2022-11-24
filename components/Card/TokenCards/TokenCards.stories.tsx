import { ComponentMeta, ComponentStory } from '@storybook/react';
import TokenCards, { ITokenCards } from './TokenCards';
import { mockTokenCardsProps } from './TokenCards.mocks';


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