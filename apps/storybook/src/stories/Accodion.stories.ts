import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '@repo/ui-shadcn';
import { AccordionDemo } from './ArrordionDemo';

const meta = {
  title: 'Example/Accordion',
  component: AccordionDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'single',
  },
};

export const Multiple: Story = {
  args: {
    type: 'multiple',
  },
};
