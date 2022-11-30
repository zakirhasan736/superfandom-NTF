import { ComponentStory, ComponentMeta } from '@storybook/react';
import Navigation from '../components/shared/header/navigation/Navigation';
import { INavigation } from '../typings/types';

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