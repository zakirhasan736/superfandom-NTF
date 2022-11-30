import { ComponentMeta, ComponentStory } from '@storybook/react';
import PrimaryLayout from '../components/shared/layouts/primary/PrimaryLayout';
import { mockPrimaryLayoutProps } from '../mocks/PrimaryLayout.mocks';
import { IPrimaryLayout } from '../typings/types';

export default {
  title: 'layouts/PrimaryLayout',
  component: PrimaryLayout,
  argTypes: {},
} as ComponentMeta<typeof PrimaryLayout>;

const Template: ComponentStory<typeof PrimaryLayout> = (args) => (
  <PrimaryLayout {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockPrimaryLayoutProps.base,
} as IPrimaryLayout;