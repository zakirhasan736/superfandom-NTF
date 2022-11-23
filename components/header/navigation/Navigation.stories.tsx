import { ComponentStory, ComponentMeta } from '@storybook/react';
import Navigation, { INavigation } from './Navigation';

export default {
  title: 'navigation/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => <Navigation {...args} />;

export const Base = Template.bind({});
Base.args = {} as INavigation;