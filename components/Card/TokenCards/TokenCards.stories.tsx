import { ComponentMeta, ComponentStory } from '@storybook/react';
import TokenCards, { ITokenCards } from './TokenCards';
import { mockTokenCardsProps } from './TokenCards.mocks';


export default {
  title: 'Cards/TokenCards',
  component: TokenCards,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof TokenCards>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TokenCards> = (args) => (
  <TokenCards {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockTokenCardsProps.base,
} as ITokenCards;