import { ComponentMeta, ComponentStory } from '@storybook/react';
import Banner from '../components/core/banner/Banner';
import { mockBannerProps } from '../mocks/Banner.mocks';
import { IBanner } from '../typings/types';


export default {
  title: 'Banner/Banner',
  component: Banner,
  argTypes: {},
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args) => (
  <Banner {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockBannerProps.base,
} as IBanner;