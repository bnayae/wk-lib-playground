import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { StyledButton } from './StyledButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/StyledButton',
  component: StyledButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof StyledButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StyledButton> = (args) => (
  <StyledButton {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Styled Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Styled Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Styled Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Styled Button',
};
