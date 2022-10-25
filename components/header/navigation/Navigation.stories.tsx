import { ComponentStory, ComponentMeta } from '@storybook/react';
import Navigation, { INavigation } from './Navigation';

export default {
  title: 'navigation/Navigation',
  component: Navigation,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => <Navigation {...args} />;

export const Base = Template.bind({});
Base.args = {} as INavigation;