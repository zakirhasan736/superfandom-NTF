import { ComponentStory, ComponentMeta } from '@storybook/react';
import Footer from '../components/shared/footer/Footer';
import { IFooter } from '../typings/types';

export default {
  title: 'navigation/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Base = Template.bind({});
Base.args = {} as IFooter;