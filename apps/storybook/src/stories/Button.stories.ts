import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '@repo/ui-shadcn';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: 'button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'button',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'button',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'button',
  },
};

export const Small: Story = {
  args: {
    children: 'button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'button',
  },
};

export const Icon: Story = {
  args: {
    size: 'icon',
    children: 'button',
  },
};
